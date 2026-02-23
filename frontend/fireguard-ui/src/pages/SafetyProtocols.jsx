import { motion } from "framer-motion";
import {
  Bell,
  FireExtinguisher,
  Wind,
  Building
} from "lucide-react";

export default function SafetyProtocols() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Fire Safety Protocols (India)
        </h1>

        <p className="text-slate-400 text-lg">
          These protocols follow Indian Fire Service guidelines and the
          National Building Code (NBC) to ensure safe emergency response.
        </p>
      </motion.div>

      {/* PROTOCOL SECTIONS */}
      <div className="max-w-5xl mx-auto grid gap-8">

        <ProtocolCard
          icon={<Bell />}
          title="During Fire Emergency"
          items={[
            "Raise fire alarm immediately.",
            "Call emergency services (101).",
            "Use extinguisher only if fire is small.",
            "Evacuate using nearest exit.",
            "Do not use elevators."
          ]}
        />

        <ProtocolCard
          icon={<FireExtinguisher />}
          title="Fire Extinguisher Safety"
          items={[
            "Identify correct extinguisher type.",
            "Follow PASS method.",
            "Maintain safe distance.",
            "Stop if fire spreads."
          ]}
        />

        <ProtocolCard
          icon={<Wind />}
          title="Smoke Handling"
          items={[
            "Stay close to the floor.",
            "Cover nose and mouth.",
            "Do not open hot doors.",
            "Follow exit signage."
          ]}
        />

        <ProtocolCard
          icon={<Building />}
          title="Evacuation Protocol"
          items={[
            "Move calmly without panic.",
            "Assist injured persons.",
            "Proceed to assembly point.",
            "Wait for authority clearance."
          ]}
        />

      </div>

      {/* FOOTNOTE */}
      <p className="text-center text-slate-500 mt-16 text-sm">
        Source: National Building Code of India (NBC), Fire Services Act
      </p>

    </div>
  );
}

/* ===== PROTOCOL CARD COMPONENT ===== */

function ProtocolCard({ icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-white/10 rounded-xl p-8 shadow-xl"
    >
      {/* ICON */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* LIST */}
      <ul className="space-y-3 text-slate-300">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-red-400">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}