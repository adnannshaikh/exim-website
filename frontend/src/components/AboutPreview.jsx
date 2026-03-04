// "use client";

// import { motion } from "framer-motion";

// export default function AboutPreview() {
//   return (
//     <section id="about" className="py-24 bg-white px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* Left Content */}
//         <div>
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold mb-6"
//           >
//             About EXIMNAME
//           </motion.h2>

//           <p className="text-stone-600 mb-6 leading-relaxed">
//             EXIMNAME is a global agro export company focused on delivering
//             premium Indian agricultural commodities with consistency,
//             compliance, and transparency.
//           </p>

//           <p className="text-stone-600 mb-8 leading-relaxed">
//             Our operations bridge verified farm networks, quality processing,
//             and international logistics to ensure seamless export solutions
//             for global trade partners.
//           </p>

//           <a
//             href="/about"
//             className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition"
//           >
//             Learn More
//           </a>
//         </div>

//         {/* Right Visual Placeholder */}
//         <div className="h-96 bg-stone-200 rounded-2xl flex items-center justify-center">
//           <span className="text-stone-500">
//             Company Image / Warehouse / Export Activity
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// }



















"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="py-32 bg-section px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-primary mb-8 leading-tight"
          >
            Structured Agricultural
            <br />
            Export Operations
          </motion.h2>

          <p className="text-muted mb-6 leading-relaxed text-lg">
            EXIMNAME operates as a disciplined export house connecting verified
            agricultural producers with global import markets through compliant
            sourcing and regulated trade practices.
          </p>

          <p className="text-muted mb-10 leading-relaxed text-lg">
            Our operational model integrates farm procurement, standardized
            processing, documentation control, and maritime logistics —
            ensuring reliability and execution consistency.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary pb-1 hover:opacity-70 transition"
          >
            Learn More About Our Operations
          </Link>

        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="h-[420px] bg-white rounded-2xl shadow-sm flex items-center justify-center">
            <span className="text-muted">
              Company / Warehouse / Export Image
            </span>
          </div>

          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/5 rounded-2xl -z-10" />
        </div>

      </div>
    </section>
  );
}