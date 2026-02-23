import { useEffect, useRef, useState } from "react";
import { sendChat } from "../services/api";
import MessageBubble from "./MessageBubble";
import InputBox from "./InputBox";
import { ShieldAlert, Shield } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const bottomRef = useRef(null);

  // ================= GET USER =================
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  // ================= LOAD SESSION CHATS =================
  const loadChatSession = async (id) => {
    setMessages([]);
    setSessionId(id);

    const res = await fetch(`http://127.0.0.1:5000/session/${id}`);
    const data = await res.json();

    const formatted = [];

    data.forEach((chat) => {
      formatted.push({ from: "user", text: chat.question });
      formatted.push({ from: "bot", answer: chat.response });
    });

    setMessages(formatted);
  };

  // expose globally so sidebar can call it
  window.loadChatSession = loadChatSession;

  // ================= CREATE SESSION =================
  const createSession = async () => {
    if (!user) return null;

    const res = await fetch("http://127.0.0.1:5000/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id }),
    });

    const data = await res.json();
    setSessionId(data.session_id);
    return data.session_id;
  };

  // ================= SEND MESSAGE =================
  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setLoading(true);

    try {
      let currentSession = sessionId;

      if (user && !currentSession) {
        currentSession = await createSession();
      }

      const response = await sendChat(
        text,
        user?.id || null,
        currentSession
      );

      setMessages((prev) => [...prev, { from: "bot", answer: response }]);

      // ⭐ AUTO TITLE FROM FIRST MESSAGE
      if (currentSession && messages.length === 0 && user) {
        await fetch("http://127.0.0.1:5000/session/title", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: currentSession,
            title: text.slice(0, 30),
          }),
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          answer: {
            purpose: "System Error",
            steps: ["Unable to fetch response from safety system."],
            warning: "Do not rely on system during outage.",
            escalation: "Contact emergency services immediately.",
          },
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ================= AUTO SCROLL =================
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950">
      <div className="sticky top-0 z-50 flex items-center gap-3 px-5 py-4 bg-slate-900 border-b border-white/10">
        <ShieldAlert className="text-red-500" size={22} />
        <div>
          <h2 className="font-semibold text-slate-100">
            Fire Safety Guidance
          </h2>
          <p className="text-xs text-slate-400">
            Real-time technical assistance
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-slate-400 mt-20">
              Ask a fire safety or emergency question
            </div>
          )}

          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}

          {loading && (
            <div className="flex justify-start">
              <Shield className="text-red-400 animate-pulse" />
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
}
