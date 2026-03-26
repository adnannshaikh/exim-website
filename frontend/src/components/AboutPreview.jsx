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



















// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function AboutPreview() {
//   return (
//     <section id="about" className="py-32 bg-section px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

//         {/* Left Content */}
//         <div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-semibold text-primary mb-8 leading-tight"
//           >
//             Structured Agricultural
//             <br />
//             Export Operations
//           </motion.h2>

//           <p className="text-muted mb-6 leading-relaxed text-lg">
//             EXIMNAME operates as a disciplined export house connecting verified
//             agricultural producers with global import markets through compliant
//             sourcing and regulated trade practices.
//           </p>

//           <p className="text-muted mb-10 leading-relaxed text-lg">
//             Our operational model integrates farm procurement, standardized
//             processing, documentation control, and maritime logistics —
//             ensuring reliability and execution consistency.
//           </p>

//           <Link
//             href="/about"
//             className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary pb-1 hover:opacity-70 transition"
//           >
//             Learn More About Our Operations
//           </Link>

//         </div>

//         {/* Right Visual */}
//         <div className="relative">
//           <div className="h-[420px] bg-white rounded-2xl shadow-sm flex items-center justify-center">
//             <span className="text-muted">
//               Company / Warehouse / Export Image
//             </span>
//           </div>

//           <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/5 rounded-2xl -z-10" />
//         </div>

//       </div>
//     </section>
//   );
// }








// "use client";

// import Link from "next/link";

// export default function AboutPreview() {
//   return (
//     <section className="pt-20 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 bg-white">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

//         {/* ===== LEFT IMAGES ===== */}
//         <div className="relative h-[380px] sm:h-[420px] md:h-[480px]">

//           {/* Main Image */}
//           <div className="absolute top-0 left-0 w-[75%] h-[70%] rounded-xl overflow-hidden shadow-md">
//             <img
//               src="/about/Rice_loading_PREVIEW.jpg"
//               alt="Farmer Network"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Secondary Image */}
//           <div className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-xl overflow-hidden shadow-md border border-primary/10">
//             <img
//               src="/about/VanillaSeed_PREVIEW.jpg"
//               alt="Warehouse and Processing"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Subtle background shape */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,78,121,0.08),transparent_70%)] -z-10"></div>

//         </div>

//         {/* ===== RIGHT CONTENT ===== */}
//         <div>

//           {/* Label */}
//           <div className="text-[11px] tracking-[0.25em] uppercase text-action mb-5">
//             About Us
//           </div>

//           {/* Heading */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
//             Structured Agricultural
//             <br />
//             Export Operations
//           </h2>

//           {/* Paragraph */}
//           <p className="text-primary/70 text-base sm:text-lg leading-relaxed mb-6">
//             We operate through a verified network of farmers and suppliers
//             across key agricultural regions, enabling consistent sourcing of
//             export-grade commodities.
//           </p>

//           <p className="text-primary/70 text-base sm:text-lg leading-relaxed mb-10">
//             Our operations are built around quality control, disciplined
//             procurement, and reliable export execution — ensuring long-term
//             supply partnerships with international buyers.
//           </p>

//           {/* CTA */}
//           <Link
//             href="/about"
//             className="inline-flex items-center justify-center bg-primary text-white px-7 py-3.5 rounded-md font-medium hover:bg-action transition"
//           >
//             Learn More About Us
//           </Link>

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
    <section id="about" className="py-20 md:py-32 bg-section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-6 md:mb-8 leading-tight"
          >
            Structured Agricultural
            <br />
            Export Operations
          </motion.h2>

          <p className="text-muted mb-5 md:mb-6 leading-relaxed text-base sm:text-lg">
            We operate as a disciplined export house connecting verified
            agricultural producers with global import markets through
            consistent sourcing and quality-controlled supply chains.
          </p>

          <p className="text-muted mb-8 md:mb-10 leading-relaxed text-base sm:text-lg">
            Our execution integrates farm procurement, standardized processing,
            documentation handling, and maritime logistics — ensuring reliability
            across every shipment cycle.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary pb-1 hover:opacity-70 transition"
          >
            Learn More About Our Operations →
          </Link>

        </div>

        {/* ===== RIGHT VISUAL ===== */}

        {/* 📱 MOBILE VERSION (simple clean stack) */}
        <div className="md:hidden grid grid-cols-2 gap-3">

          <img
            src="/about/VanillaSeed_PREVIEW.png"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />

          <img
            src="/about/GhostChilli_PREVIEW.png"
            className="w-full h-40 object-cover rounded-xl"
            alt=""
          />

          <img
            src="/about/Rice_loading_PREVIEW.png"
            className="col-span-2 w-full h-52 object-cover rounded-xl"
            alt=""
          />

        </div>

        {/* 💻 DESKTOP VERSION (your layered layout) */}
        <div className="hidden md:block relative w-full h-[460px]">

          {/* LEFT IMAGE */}
          <div className="absolute left-0 top-0 w-[48%] h-[55%] rounded-xl overflow-hidden shadow-md">
            <img
              src="/about/VanillaSeed_PREVIEW.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* RIGHT TOP IMAGE */}
          <div className="absolute right-0 top-0 w-[48%] h-[50%] rounded-xl overflow-hidden shadow-md">
            <img
              src="/about/GhostChilli_PREVIEW.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="absolute left-1/2 top-[60%] w-[60%] h-[55%] -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-xl border border-white z-10">
            <img
              src="/about/Rice_loading_PREVIEW.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* DEPTH SHAPE */}
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-primary/5 rounded-2xl -z-10" />

        </div>

      </div>
    </section>
  );
}