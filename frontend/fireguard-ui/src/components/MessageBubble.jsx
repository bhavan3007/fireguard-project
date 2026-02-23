import { Shield, User } from "lucide-react";

export default function MessageBubble({ msg }) {

  if (msg.from === "user") {
    return (
      <div className="flex justify-end mb-4">
        <div className="flex items-end gap-2 max-w-[85%]">
          <div className="bg-red-500 text-white px-4 py-2 rounded-2xl rounded-br-md shadow">
            {msg.text}
          </div>
          <div className="bg-slate-700 p-2 rounded-full">
            <User size={14} />
          </div>
        </div>
      </div>
    );
  }

  const { purpose, steps, warning, escalation } = msg.answer;

  return (
    <div className="flex justify-start mb-5">
      <div className="flex items-start gap-3 max-w-[90%]">

        <div className="bg-red-500/20 text-red-400 p-2 rounded-full">
          <Shield size={16} />
        </div>

        <div className="bg-slate-800/90 backdrop-blur px-5 py-4 rounded-2xl shadow-lg border border-white/10">
          <p className="text-xs uppercase tracking-wide text-red-400 mb-1">
            Purpose
          </p>
          <p className="mb-3 text-sm leading-relaxed">{purpose}</p>

          <p className="text-xs uppercase tracking-wide text-red-400 mb-1">
            Procedure
          </p>
          <ul className="list-decimal list-inside mb-3 space-y-1 text-sm">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>

          <p className="text-yellow-400 text-sm mt-2">
            ⚠ {warning}
          </p>

          <p className="text-red-500 text-sm mt-1">
            🚨 {escalation}
          </p>
        </div>
      </div>
    </div>
  );
}
