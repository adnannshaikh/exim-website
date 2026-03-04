// // "use client";

// // import { motion } from "framer-motion";
// // import { ArrowRight } from "lucide-react";

// // export default function Hero() {
// //   return (
// //     <section className="relative h-screen flex items-center justify-center bg-stone-900 text-white">
// //       <div className="text-center max-w-4xl px-6">
// //         <motion.h1
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-5xl md:text-7xl font-bold mb-6"
// //         >
// //           Global Agro Exports.
// //           <span className="text-emerald-500"> Pure Quality.</span>
// //         </motion.h1>

// //         <p className="text-stone-400 mb-10 text-lg">
// //           Premium Indian agricultural commodities delivered worldwide.
// //         </p>

// //         <button className="bg-emerald-700 px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto">
// //           Explore Products <ArrowRight size={18} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const images = [
//   "/hero/Rice.jpeg",
//   "/hero/Pomogrante.jpeg",
//   "/hero/Onion.jpeg",
//   "/hero/Vanilla.jpeg",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000); // change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">

//       {/* Rotating Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={images[index]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${images[index]})` }}
//         />
//       </AnimatePresence>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-6"
//         >
//           Global Agro Exports.
//           <span className="text-emerald-500"> Pure Quality.</span>
//         </motion.h1>

//         <p className="text-stone-300 mb-10 text-lg">
//           Premium Indian agricultural commodities delivered worldwide.
//         </p>

//         <button className="bg-emerald-700 px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-emerald-600 transition">
//           Explore Products <ArrowRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// const images = [
//   "/hero/Rice.jpeg",
//   "/hero/Pomogrante.jpeg",
//   "/hero/Onion.jpeg",
//   "/hero/Vanilla.jpeg",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[90vh] flex items-center overflow-hidden">

//       {/* Background Rotation */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={images[index]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${images[index]})` }}
//         />
//       </AnimatePresence>

//       {/* Maritime Overlay */}
//       <div className="absolute inset-0 bg-[#021024]/80" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="max-w-3xl">

//           <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white mb-8">
//             Global Agricultural
//             <br />
//             <span className="text-[#C1E8FF]">
//               Export & Trade Solutions
//             </span>
//           </h1>

//           <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl">
//             Institutional sourcing, compliance-driven exports,
//             and reliable maritime logistics connecting India to global markets.
//           </p>

//           <div className="flex gap-6">
//             <Link
//               href="/products"
//               className="bg-[#1F4E79] text-white px-8 py-4 rounded-md font-medium hover:bg-[#163a5a] transition"
//             >
//               View Products
//             </Link>

//             <Link
//               href="/#contact"
//               className="border border-white/40 text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#021024] transition"
//             >
//               Request Quote
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




















// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";

// const images = [
//   "/hero/Rice.jpeg",
//   "/hero/Pomogrante.jpeg",
//   "/hero/Onion.jpeg",
//   "/hero/Vanilla.jpeg",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[90vh] flex items-center overflow-hidden">

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={images[index]}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${images[index]})` }}
//         />
//       </AnimatePresence>

//       {/* Soft Maritime Overlay */}
//       <div className="absolute inset-0 bg-[#021024]/75" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="max-w-3xl">

//           <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-8">
//             Global Agricultural
//             <br />
//             <span className="text-[#C1E8FF]">
//               Export & Trade Solutions
//             </span>
//           </h1>

//           <p className="text-white/70 text-lg mb-12 max-w-xl">
//             Reliable sourcing, compliance-driven exports, and
//             structured maritime logistics connecting India to global markets.
//           </p>

//           <div className="flex gap-6">
//             <Link
//               href="/products"
//               className="bg-[#1F4E79] text-white px-8 py-4 rounded-md font-medium hover:bg-[#163a5a] transition"
//             >
//               View Products
//             </Link>

//             <Link
//               href="/#contact"
//               className="border border-white/40 text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#021024] transition"
//             >
//               Request Quote
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }






















"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/hero/Rice.jpeg",
  "/hero/Pomogrante.jpeg",
  "/hero/Onion.jpeg",
  "/hero/Vanilla.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* Neutral Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-8">
            Premium Agricultural
            <br />
            Export Solutions
          </h1>

          <p className="text-white/80 text-lg mb-12 max-w-xl">
            Structured sourcing, verified quality control, and reliable
            international logistics delivering Indian commodities worldwide.
          </p>

          <div className="flex gap-6">
            <Link
              href="/products"
              className="bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-200 transition"
            >
              View Products
            </Link>

            <Link
              href="/#contact"
              className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-black transition"
            >
              Request Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}