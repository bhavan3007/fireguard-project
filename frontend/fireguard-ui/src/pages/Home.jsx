import {
  Flame,
  ShieldCheck,
  Phone,
  AlertTriangle,
  Siren,
  FireExtinguisher
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ===== HERO SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-28 px-6 bg-gradient-to-b from-red-900/30 via-slate-950 to-slate-950"
      >
        <h1 className="text-5xl font-bold mb-6">
          Fire Safety Awareness System
        </h1>

        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
          Learn how to prevent fires, handle emergencies, and stay safe with
          real-time guidance and instant chatbot support.
        </p>
        <div className="flex justify-center gap-4">
          <button
  onClick={() => navigate("/learn-safety")}
  className="bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-600"
>
  Learn Safety Tips
</button>

        </div>
      </motion.section>

      {/* ===== TOPICS SECTION ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-10 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Fire Safety Topics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TopicCard
            icon={<Flame size={30} />}
            title="Fire Prevention"
             desc="Learn how to prevent fires in homes, industries, and public places."
            onClick={() => navigate("/fire-prevention")}
          />

          <TopicCard
            icon={<ShieldCheck size={30} />}
            title="Safety Protocols"
            desc="Understand emergency procedures and evacuation techniques."
            onClick={() => navigate("/protocols")}
          />

          <TopicCard
            icon={<Phone size={30} />}
            title="Emergency Contacts"
            desc="Important fire service and emergency helpline numbers."
            onClick={() => navigate("/contacts")}
          />

          <TopicCard
            icon={<AlertTriangle size={30} />}
            title="Fire Types"
            desc="Different types of fire and correct extinguisher usage."
            onClick={() => navigate("/fire-types")}
          />
        </div>
      </motion.section>

      {/* ===== SAFETY TIPS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-slate-900 mt-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-12">
          Essential Fire Safety Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TipCard icon={<FireExtinguisher />} title="Keep Extinguishers Ready" />
          <TipCard icon={<Siren />} title="Install Smoke Alarms" />
          <TipCard icon={<ShieldCheck />} title="Practice Evacuation Plans" />
        </div>
      </motion.section>

      {/* ===== EMERGENCY ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center bg-gradient-to-b from-slate-950 to-red-900/20"
      >
        <h2 className="text-3xl font-semibold mb-6">In Case of Emergency</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <EmergencyCard label="Fire Service" number="101" />
          <EmergencyCard label="Ambulance" number="108" />
          <EmergencyCard label="Police" number="100" />
        </div>
      </motion.section>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function TopicCard({ icon, title, desc, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      onClick={onClick}
      className="cursor-pointer bg-slate-900 border border-white/10 rounded-xl p-6 text-center hover:border-red-500 transition"
    >
      <div className="text-red-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </motion.div>
  );
}

function TipCard({ icon, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-950 border border-white/10 p-6 rounded-xl text-center"
    >
      <div className="text-red-500 mb-3 flex justify-center">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
    </motion.div>
  );
}

function EmergencyCard({ label, number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-red-500 px-8 py-6 rounded-xl text-white shadow-lg"
    >
      <p className="text-lg font-semibold">{label}</p>
      <p className="text-2xl font-bold">{number}</p>
    </motion.div>
  );
}