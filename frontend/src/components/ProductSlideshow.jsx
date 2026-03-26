// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function ProductSlideshow({
//   isOpen,
//   onClose,
//   startIndex,
//   products,
// }) {
//   const [current, setCurrent] = useState(startIndex || 0);

//   useEffect(() => {
//     setCurrent(startIndex);
//   }, [startIndex]);

//   if (!isOpen) return null;

//   const product = products[current];

//   const next = () =>
//     setCurrent((prev) => (prev + 1) % products.length);

//   const prev = () =>
//     setCurrent((prev) => (prev - 1 + products.length) % products.length);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="fixed inset-0 bg-primary z-50 flex items-center justify-center p-6"
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 text-white"
//       >
//         <X size={30} />
//       </button>

//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center text-white">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={product.id}
//             src={product.image}
//             alt={product.name}
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 40 }}
//             className="rounded-xl h-[400px] w-full object-cover"
//           />
//         </AnimatePresence>

//         <div>
//           <h2 className="text-4xl font-semibold mb-6">
//             {product.name}
//           </h2>

//           <div className="space-y-3 text-white/70">
//             <p>Specifications: To be added</p>
//             <p>Packaging: To be added</p>
//             <p>MOQ: To be added</p>
//             <p>HS Code: To be added</p>
//           </div>

//           <div className="flex gap-4 mt-12">
//             <button
//               onClick={prev}
//               className="p-3 border border-white/30 rounded-full"
//             >
//               <ChevronLeft />
//             </button>
//             <button
//               onClick={next}
//               className="p-3 border border-white/30 rounded-full"
//             >
//               <ChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }















"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductSlideshow({
  isOpen,
  onClose,
  startIndex,
  products,
}) {
  const [current, setCurrent] = useState(startIndex || 0);

  useEffect(() => {
    setCurrent(startIndex);
  }, [startIndex]);

  if (!isOpen) return null;

  const product = products[current];

  const next = () =>
    setCurrent((prev) => (prev + 1) % products.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-primary z-50 flex items-center justify-center p-6"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:opacity-70 transition"
      >
        <X size={30} />
      </button>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center text-white">

        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={product.id}
            src={product.image}
            alt={product.name}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="rounded-xl h-[400px] w-full object-cover"
          />
        </AnimatePresence>

        {/* CONTENT */}
        <div>

          <h2 className="text-4xl font-semibold mb-8">
            {product.name}
          </h2>

          {/* INFO */}
          <div className="space-y-5 text-sm text-white/80">

            {product.specs && (
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  Specifications
                </p>
                <p>{product.specs}</p>
              </div>
            )}

            {product.grade && (
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  Quality / Grade
                </p>
                <p>{product.grade}</p>
              </div>
            )}

            {product.hsCode && (
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  HS Code
                </p>
                <p>{product.hsCode}</p>
              </div>
            )}

          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={`https://wa.me/917400197131?text=Hello, I am interested in ${product.name}`}
              target="_blank"
              className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-action hover:text-white transition"
            >
              Request Quote
            </a>

            {/* NAV */}
            <div className="flex gap-3 ml-auto">
              <button
                onClick={prev}
                className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                <ChevronRight />
              </button>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}