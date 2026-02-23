import { Flame, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 mt-0">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND SECTION */}
        <div>
          <div className="flex items-center gap-2 text-red-500 font-bold text-lg mb-4">
            <Flame size={22} />
            FireGuard
          </div>

          <p className="text-slate-400 text-sm">
            FireGuard is a smart fire safety awareness platform that provides
            real-time guidance, emergency resources, and safety education to
            help prevent fire hazards.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3 text-slate-400 text-sm">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/protocols" className="hover:text-red-400">Safety Protocols</Link>
            <Link to="/contacts" className="hover:text-red-400">Emergency Contacts</Link>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4">Emergency Support</h3>

          <div className="space-y-3 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              Fire Service: 101
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              Ambulance: 108
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              support@fireguard.com
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              India Emergency Network
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-white/10 text-center py-5 text-slate-500 text-sm">
        © {new Date().getFullYear()} FireGuard Safety System. All rights reserved.
      </div>

    </footer>
  );
}