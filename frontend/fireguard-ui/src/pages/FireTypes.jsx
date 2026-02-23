import { motion } from "framer-motion";
import { Flame, Zap, Droplet, Cpu, Utensils } from "lucide-react";

export default function FireTypes() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* PAGE HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Types of Fire & Extinguishers
        </h1>
        <p className="text-slate-400">
          Fires are classified into different types based on the fuel source.
          Each type requires a specific extinguisher to safely control it.
        </p>
      </div>

      {/* FIRE TYPE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <FireCard
          icon={<Flame size={40} />}
          title="Class A Fire"
          color="bg-red-500"
          items="Wood, paper, cloth, plastics"
          extinguisher="Water / Foam / Dry Powder"
        />

        <FireCard
          icon={<Droplet size={40} />}
          title="Class B Fire"
          color="bg-orange-500"
          items="Petrol, diesel, oil, paints"
          extinguisher="Foam / CO₂ Extinguisher"
        />

        <FireCard
          icon={<Zap size={40} />}
          title="Class C Fire"
          color="bg-yellow-500"
          items="Electrical equipment, wiring"
          extinguisher="CO₂ / Dry Powder"
        />

        <FireCard
          icon={<Cpu size={40} />}
          title="Class D Fire"
          color="bg-purple-500"
          items="Metal fires like magnesium"
          extinguisher="Special Dry Powder"
        />

        <FireCard
          icon={<Utensils size={40} />}
          title="Class K Fire"
          color="bg-green-500"
          items="Cooking oils & fats"
          extinguisher="Wet Chemical Extinguisher"
        />

      </div>

      {/* SAFETY NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto mt-20 bg-red-900/20 border border-red-500 rounded-xl p-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-3 text-red-400">
          ⚠ Important Safety Note
        </h3>
        <p className="text-slate-300">
          Never use water on electrical or oil fires. Always identify the fire
          type before choosing the extinguisher.
        </p>
      </motion.div>

    </div>
  );
}

/* ===== REUSABLE FIRE CARD ===== */

function FireCard({ icon, title, items, extinguisher, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, rotate: 1 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-white/10 rounded-xl p-8 text-center shadow-xl"
    >
      <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-slate-400 mb-4">
        <strong>Examples:</strong><br /> {items}
      </p>

      <div className="bg-slate-800 p-4 rounded-lg text-sm text-red-400 font-medium">
        ✔ Recommended Extinguisher:<br />
        {extinguisher}
      </div>
    </motion.div>
  );
}