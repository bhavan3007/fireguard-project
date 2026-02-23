import { motion } from "framer-motion";
import {
  Flame,
  Ambulance,
  Shield,
  AlertTriangle,
  Phone
} from "lucide-react";

export default function EmergencyContacts() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Emergency Contacts (India)
        </h1>

        <p className="text-slate-400 text-lg">
          Use these official emergency numbers during fire, medical,
          disaster, or safety situations.
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        <ContactCard
          icon={<Flame size={30} />}
          title="Fire Emergency"
          number="101"
          desc="Fire & Rescue Services"
          color="bg-red-500"
        />

        <ContactCard
          icon={<Ambulance size={30} />}
          title="Ambulance"
          number="108"
          desc="Medical Emergency Service"
          color="bg-green-500"
        />

        <ContactCard
          icon={<Shield size={30} />}
          title="Police"
          number="100"
          desc="Law Enforcement Support"
          color="bg-blue-500"
        />

        <ContactCard
          icon={<AlertTriangle size={30} />}
          title="Disaster Helpline"
          number="112"
          desc="National Emergency Number"
          color="bg-yellow-500"
        />

      </div>

      {/* FOOTNOTE */}
      <p className="text-center text-slate-500 mt-20 text-sm">
        Source: Government of India – Emergency Helpline Services
      </p>

    </div>
  );
}

/* ===== CONTACT CARD COMPONENT ===== */

function ContactCard({ icon, title, number, desc, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 border border-white/10 rounded-xl p-8 shadow-xl"
    >
      {/* ICON */}
      <div
        className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-6 text-white`}
      >
        {icon}
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-slate-400 mb-6">{desc}</p>

      {/* CALL BUTTON */}
      <a
        href={`tel:${number}`}
        className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-red-500 transition px-6 py-4 rounded-lg text-lg font-bold"
      >
        <Phone size={20} />
        Call {number}
      </a>
    </motion.div>
  );
}