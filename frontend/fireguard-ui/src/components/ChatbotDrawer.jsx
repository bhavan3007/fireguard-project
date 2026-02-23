import { useState } from "react";
import { MessageCircle, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

export default function ChatbotDrawer() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW (mobile sidebar)

  return (
    <>
      {/* Floating Button */}
    {/* Floating Button */}
<AnimatePresence>
  {!open && (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="hidden md:block bg-slate-900 text-white text-sm px-4 py-2 rounded-full shadow-lg border border-white/20"
      >
        What can I help you?
      </motion.div>

      {/* Chat Icon */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0px 0px 0px rgba(245, 9, 9, 0.4)",
            "0px 0px 20px rgba(239,68,68,0.6)",
            "0px 0px 0px rgba(239,68,68,0.4)"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        onClick={() => setOpen(true)}
        className="bg-red-500 hover:bg-red-600 text-white p-5 rounded-full shadow-xl"
      >
        <MessageCircle size={28} />
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 z-50 flex justify-end
              md:pr-60 md:pb-32 md:pt-4
            "
          >
            {/* CLOSE ICON */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4 z-[60]
                bg-red-500 hover:bg-red-600
                p-2 rounded-full shadow-xl
              "
            >
              <X size={20} className="text-white" />
            </button>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                absolute top-4 left-4 z-[60]
                bg-slate-800 hover:bg-slate-700
                p-2 rounded-full shadow-xl
                md:hidden
              "
            >
              <Menu size={20} className="text-white" />
            </button>

            {/* MOBILE OVERLAY */}
            <div
              className="absolute inset-0 bg-black/60 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* CHAT PANEL */}
            <div
              className="
                relative bg-slate-950 shadow-2xl flex
                w-full h-full
                md:w-[420px] md:h-full
                md:rounded-xl border border-white/10
              "
            >
              <div className="flex w-full h-full">
                {/* SIDEBAR DESKTOP */}
                <div className="hidden md:block w-64 border-r border-white/10">
                  <Sidebar />
                </div>

                {/* CHAT AREA */}
                <div className="flex-1 h-full">
                  <ChatWindow />
                </div>
              </div>
            </div>

            {/* MOBILE SIDEBAR DRAWER */}
            <AnimatePresence>
              {menuOpen && (
                <>
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 z-[65] md:hidden"
                    onClick={() => setMenuOpen(false)}
                  />

                  {/* Sidebar Panel */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                    className="
                      fixed top-0 left-0 h-full w-64
                      bg-slate-950 border-r border-white/10
                      z-[70] md:hidden
                    "
                  >
                    <Sidebar />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}