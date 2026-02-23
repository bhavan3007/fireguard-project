import { motion } from "framer-motion";
import { Video, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LearnSafety() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Learn Fire Safety
        </h1>
        <p className="text-slate-400">
          Choose your preferred way to learn fire safety awareness.
        </p>
      </motion.div>

      {/* OPTIONS */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* VIDEO OPTION */}
        <OptionCard
          icon={<Video size={40} />}
          title="Learn by Video"
          desc="Watch educational fire safety videos and understand prevention techniques visually."
          color="bg-red-500"
          onClick={() => navigate("/learn-video")}
        />

        {/* QUIZ OPTION */}
        <OptionCard
          icon={<Brain size={40} />}
          title="Learn by Quiz"
          desc="Test your knowledge with interactive fire safety quizzes."
          color="bg-blue-500"
          onClick={() => navigate("/learn-quiz")}
        />

      </div>

    </div>
  );
}

/* ===== OPTION CARD ===== */

function OptionCard({ icon, title, desc, color, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer bg-slate-900 border border-white/10 p-10 rounded-xl shadow-xl text-center"
    >
      <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white ${color}`}>
        {icon}
      </div>

      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-slate-400">{desc}</p>
    </motion.div>
  );
}