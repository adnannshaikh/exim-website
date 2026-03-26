// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { PRODUCTS } from "../data/products";
// import ProductSlideshow from "./ProductSlideshow";

// export default function CoreCommodities() {
//   const coreProducts = PRODUCTS.filter((p) => p.core);

//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   return (
//     <section className="pt-16 pb-36 bg-lightsection px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* ===== HEADER ===== */}
//         <div className="relative max-w-3xl mx-auto mb-28 text-center">

//           {/* Soft gradient behind text (no box) */}
//           <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(31,78,121,0.12),transparent_70%)]"></div>

//           {/* Top subtle label
//           <div className="text-[11px] tracking-[0.25em] uppercase text-primary/50 mb-5">
//             Active Export Lines
//           </div> */}

//           {/* Heading */}
//           <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
//             Core Export Commodities
//           </h2>

//           {/* Description */}
//           <p className="text-primary/70 text-lg leading-relaxed">
//             A focused portfolio of high-demand agricultural commodities,
//             sourced through verified networks and delivered with
//             consistent export execution standards.
//           </p>

//         </div>

//         {/* ===== GRID ===== */}
//         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {coreProducts.map((product, i) => (
//             <div
//               key={product.id}
//               onClick={() => {
//                 setIndex(i);
//                 setOpen(true);
//               }}
//               className="group bg-white rounded-xl border border-primary/10 hover:border-action hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-semibold text-primary tracking-tight">
//                   {product.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ===== CTA ===== */}
//         {/* <div className="text-center mt-24">
//           <Link
//             href="/products"
//             className="inline-flex items-center justify-center bg-action text-white px-10 py-4 rounded-md font-medium tracking-wide hover:opacity-90 hover:-translate-y-[2px] transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             View Complete Product Portfolio
//           </Link>
//         </div> */}


//         <div className="text-center mt-24">
//   <Link
//     href="/products"
//     className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-primary/30 bg-transparent px-10 py-4 font-bold uppercase tracking-widest text-primary/80 transition-all duration-500 hover:border-transparent hover:shadow-2xl"
//   >
//     {/* Ghost Texture (Adapted for light background) */}
//     <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.03)_12px,rgba(0,0,0,0.03)_24px)] transition-opacity duration-500 group-hover:opacity-0"></div>

//     {/* Sliding Container Background */}
//     <div className="absolute inset-0 z-0 -translate-x-full bg-orange-700 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.15,1)] group-hover:translate-x-0">
      
//       {/* Corrugated Metal Textures */}
//       <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.25)_12px,rgba(0,0,0,0.25)_24px)]"></div>
//       <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_1px,transparent_1px,transparent_24px)]"></div>

//       {/* Container Markings */}
//       <span className="absolute left-2 top-1 text-[8px] font-mono tracking-tighter text-white/40 select-none">
//         MAX.GW 30,480 KG
//       </span>

//       {/* Corner Castings */}
//       <div className="absolute left-0 top-0 h-2.5 w-2.5 border-b border-r border-black/50 bg-black/40"></div>
//       <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-r border-t border-black/50 bg-black/40"></div>
//       <div className="absolute right-0 top-0 h-2.5 w-2.5 border-b border-l border-black/50 bg-black/40"></div>
//       <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-l border-t border-black/50 bg-black/40"></div>

//       {/* Door Lock Rods */}
//       <div className="absolute inset-y-0 right-4 w-[3px] border-l border-white/10 bg-black/30"></div>
//       <div className="absolute inset-y-0 right-7 w-[3px] border-l border-white/10 bg-black/30"></div>
//     </div>

//     {/* CTA Text */}
//     <span className="relative z-10 text-sm transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
//       View Complete Product Portfolio
//     </span>
//   </Link>
// </div>
//       </div>

//       {/* ===== SLIDESHOW ===== */}
//       <ProductSlideshow
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         startIndex={index}
//         products={coreProducts}
//       />
//     </section>
//   );
// }








"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "../data/products";
import ProductSlideshow from "./ProductSlideshow";

export default function CoreCommodities() {
  const coreProducts = PRODUCTS.filter((p) => p.core);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="pt-12 md:pt-16 pb-28 md:pb-36 bg-lightsection px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="relative max-w-3xl mx-auto mb-16 md:mb-24 text-center">

          {/* Gradient glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(31,78,121,0.12),transparent_70%)]"></div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4 md:mb-6 leading-tight">
            Core Export Commodities
          </h2>

          {/* Description */}
          <p className="text-primary/70 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            A focused portfolio of high-demand agricultural commodities,
            sourced through verified networks and delivered with
            consistent export execution standards.
          </p>

        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

          {coreProducts.map((product, i) => (
            <div
              key={product.id}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group bg-white rounded-xl border border-primary/10 hover:border-action hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary tracking-tight leading-snug">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* ===== CTA ===== */}
        <div className="text-center mt-16 md:mt-24">

          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-primary/30 bg-transparent px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/80 transition-all duration-500 hover:border-transparent hover:shadow-2xl"
          >
            {/* Ghost Texture */}
            <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.03)_12px,rgba(0,0,0,0.03)_24px)] transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Sliding Container */}
            <div className="absolute inset-0 z-0 -translate-x-full bg-orange-700 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.15,1)] group-hover:translate-x-0">

              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.25)_12px,rgba(0,0,0,0.25)_24px)]"></div>

              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_1px,transparent_1px,transparent_24px)]"></div>

            </div>

            <span className="relative z-10 transition-all duration-500 group-hover:text-white">
              View Complete Product Portfolio
            </span>
          </Link>

        </div>

      </div>

      {/* ===== SLIDESHOW ===== */}
      <ProductSlideshow
        isOpen={open}
        onClose={() => setOpen(false)}
        startIndex={index}
        products={coreProducts}
      />
    </section>
  );
}