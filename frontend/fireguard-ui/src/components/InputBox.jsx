import { useState } from "react";
import { Mic, Send } from "lucide-react";

export default function InputBox({ onSend }) {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;

      if (spokenText.trim()) {
        onSend(spokenText);
      }

      setText("");
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognition.start();
  };

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 flex items-center gap-3 bg-slate-900 border-t border-white/10">
      <button
        onClick={startListening}
        className={`p-3 rounded-full ${
          listening ? "bg-red-600 animate-pulse" : "bg-slate-800"
        }`}
        title="Speak"
      >
        <Mic size={18} />
      </button>

      <input
        className="flex-1 bg-slate-800 p-3 rounded-lg outline-none"
        placeholder="Type or speak your fire safety query..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        className="bg-red-500 px-4 py-3 rounded-lg"
      >
        <Send size={18} />
      </button>
    </div>
  );
}
