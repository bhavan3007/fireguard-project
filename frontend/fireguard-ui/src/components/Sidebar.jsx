import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Flame,
  MessageCircle,
  LogOut,
  Plus
} from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  const location = useLocation();

  // ================= GET USER =================
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => setUser(session?.user || null)
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // ================= LOAD SESSIONS =================
  useEffect(() => {
    if (!user) return;

    fetch(`http://127.0.0.1:5000/sessions/${user.id}`)
      .then(res => res.json())
      .then(setSessions);
  }, [user]);

  // ================= LOGIN =================
  const login = () =>
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    });

  const logout = () => supabase.auth.signOut();

  // ================= NEW CHAT =================
  const newChat = async () => {
    const res = await fetch("http://127.0.0.1:5000/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id })
    });

    const data = await res.json();

    setSessions(prev => [
      { id: data.session_id, title: "New Chat" },
      ...prev
    ]);

    window.loadChatSession?.(data.session_id);
  };

  const openSession = (id) => {
    window.loadChatSession?.(id);
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      
      {/* HEADER */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10">
        <Flame className="text-red-500" size={26} />
        <div>
          <h1 className="text-lg font-bold">FireGuard</h1>
          <p className="text-xs text-slate-400">PRO TECH</p>
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        <MenuItem
          icon={<MessageCircle size={16} />}
          label="Guidance Chat"
          path="/"
          active={location.pathname === "/"}
        />

        {user && (
          <>
            <div className="mt-6 text-xs text-slate-400 px-2">
              Your Chats
            </div>

            <button
              onClick={newChat}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 text-sm"
            >
              <Plus size={16} /> New Chat
            </button>

            {sessions.map(s => (
              <button
                key={s.id}
                onClick={() => openSession(s.id)}
                className="w-full text-left px-3 py-2 rounded hover:bg-white/10 text-sm truncate"
              >
                {s.title}
              </button>
            ))}
          </>
        )}
      </nav>

      {/* FOOTER */}
      <div className="px-6 py-4 border-t border-white/10 text-sm">
        {user ? (
          <>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user.user_metadata.avatar_url}
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">
                  {user.user_metadata.full_name}
                </p>
                <p className="text-xs text-slate-400">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 p-2 rounded"
            >
              <LogOut size={16} /> Logout
            </button>
          </>
        ) : (
          <>
            <p className="text-yellow-400 text-sm">Guest Mode</p>
            <button
              onClick={login}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded"
            >
              Login with Google
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 border-r border-white/10 flex flex-col">
    <SidebarContent />
  </aside>
  );
}

function MenuItem({ icon, label, path, active }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
        active
          ? "bg-red-500/15 text-red-400"
          : "hover:bg-white/5 text-slate-300"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}