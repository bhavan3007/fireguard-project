import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

export default function LearnVideo() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-slate-900 border border-white/10 p-12 rounded-xl shadow-xl max-w-lg"
      >
        {/* ICON */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="flex justify-center mb-6"
        >
          <Wrench size={60} className="text-red-500" />
        </motion.div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Video Learning Module
        </h1>

        {/* MESSAGE */}
        <p className="text-slate-400 text-lg mb-6">
          We are currently working on adding official Government
          fire safety training videos.
        </p>

        {/* STATUS */}
        <div className="flex items-center justify-center gap-2 text-yellow-400 font-semibold">
          <Clock size={20} />
          <span>Coming Soon...</span>
        </div>

        {/* EXTRA NOTE */}
        <p className="text-sm text-slate-500 mt-6">
          Stay tuned for NDMA & Fire Department educational content.
        </p>
      </motion.div>

    </div>
  );
}