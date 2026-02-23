import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-red-500 font-bold text-lg">
          <Flame size={24} />
          FireGuard
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/protocols" className="hover:text-red-400">Safety Protocols</Link>
          <Link to="/contacts" className="hover:text-red-400">Emergency Contacts</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/protocols" onClick={() => setOpen(false)} className="block">Safety Protocols</Link>
          <Link to="/contacts" onClick={() => setOpen(false)} className="block">Emergency Contacts</Link>
        </div>
      )}
    </nav>
  );
}