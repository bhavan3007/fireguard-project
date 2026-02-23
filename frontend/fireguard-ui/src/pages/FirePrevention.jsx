import { motion } from "framer-motion";

export default function FirePrevention() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">

      {/* PAGE TITLE */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          Fire Prevention Guidelines
        </h1>
        <p className="text-slate-400 text-lg">
          Fire prevention is the most effective way to reduce fire hazards and
          protect lives and property. Follow these essential safety practices.
        </p>
      </div>

      {/* SECTION 1 */}
      <AnimatedSection reverse={false}>
        <img
          src="/home.jfif"
          alt="Home Safety"
          className="w-60 h-60 object-cover rounded-full border-4 border-red-500 shadow-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            🔥 Home Fire Prevention Tips
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Never leave cooking unattended.</li>
            <li>• Install smoke alarms in every room.</li>
            <li>• Avoid overloading electrical outlets.</li>
            <li>• Keep flammable materials away from heat sources.</li>
            <li>• Inspect gas connections regularly.</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* SECTION 2 */}
      <AnimatedSection reverse={true}>
        <img
          src="/work.jfif"
          alt="Workplace Safety"
          className="w-60 h-60 object-cover rounded-full border-4 border-red-500 shadow-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            🏢 Workplace Fire Safety Measures
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Maintain fire extinguishers accessible.</li>
            <li>• Conduct regular fire drills.</li>
            <li>• Keep emergency exits clear.</li>
            <li>• Store hazardous materials safely.</li>
            <li>• Follow electrical safety protocols.</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* SECTION 3 */}
      <AnimatedSection reverse={false}>
        <img
          src="/general.jfif"
          alt="General Safety"
          className="w-60 h-60 object-cover rounded-full border-4 border-red-500 shadow-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">
            ⚠ General Fire Prevention Rules
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Educate family members about fire safety.</li>
            <li>• Keep extinguishers in working condition.</li>
            <li>• Avoid smoking near flammable items.</li>
            <li>• Never leave candles unattended.</li>
            <li>• Prepare an evacuation plan.</li>
          </ul>
        </div>
      </AnimatedSection>

    </div>
  );
}

/* ===== REUSABLE ANIMATED SECTION ===== */

function AnimatedSection({ children, reverse }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: reverse ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`
        max-w-5xl mx-auto mb-24 
        flex flex-col md:flex-row 
        items-center gap-12
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {children}
    </motion.section>
  );
}