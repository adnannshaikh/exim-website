// import ProductGrid from "../../components/ProductGrid";
// import Link from "next/link";

// export const metadata = {
//   title: "Export Commodity Portfolio | EXIMNAME",
//   description:
//     "Comprehensive agricultural export portfolio including grains, spices, fresh produce and specialty commodities structured for global trade execution.",
// };

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen pt-40 bg-lightsection">

//       {/* HERO SECTION */}
//       <section className="px-6 pb-36">
//         <div className="max-w-7xl mx-auto">

//           <div className="grid md:grid-cols-2 gap-20 items-center">

//             {/* Left */}
//             <div>
//               <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
//                 Institutional Export Portfolio
//               </div>

//               <h1 className="text-5xl md:text-6xl font-semibold text-primary leading-tight mb-8">
//                 Structured Agricultural
//                 <br />
//                 Commodity Supply
//               </h1>

//               <p className="text-primary/60 text-lg leading-relaxed mb-12">
//                 A disciplined range of grains, dry produce, fresh exports,
//                 spices, and specialty commodities structured for repeat
//                 international bulk trade execution.
//               </p>

//               <Link
//                 href="/trade-inquiry"
//                 className="inline-block bg-primary text-white px-9 py-4 rounded-md font-medium hover:bg-action transition"
//               >
//                 Initiate Trade Inquiry
//               </Link>
//             </div>

//             {/* Right Visual (Structured Block Instead of Placeholder Text) */}
//             <div className="relative h-[460px] rounded-2xl overflow-hidden border border-primary/10 bg-primary/5 flex items-center justify-center">

//               <div className="text-center px-10">
//                 <div className="text-3xl font-semibold text-primary mb-4">
//                   Multi-Category Portfolio
//                 </div>
//                 <p className="text-primary/50 text-sm leading-relaxed">
//                   Grains · Dry Produce · Fresh Exports · Spices · Specialty Commodities
//                 </p>
//               </div>

//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,78,121,0.05),transparent_70%)]"></div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* VALUE STRIP (More Subtle + More Fluid) */}
//       <section className="py-24 border-y border-primary/5 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">

//           {[
//             ["Multi-Category", "Diversified Commodity Portfolio"],
//             ["Bulk Execution", "Structured Shipment Handling"],
//             ["Documentation", "Complete Export Compliance"],
//             ["Global Reach", "Maritime & Freight Network"],
//           ].map(([title, desc]) => (
//             <div key={title}>
//               <div className="text-xl font-semibold text-primary mb-3">
//                 {title}
//               </div>
//               <p className="text-primary/50 text-sm">
//                 {desc}
//               </p>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* PRODUCT GRID */}
//       <section className="bg-white py-32">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="mb-20">
//             <h2 className="text-3xl font-semibold text-primary mb-6">
//               Complete Commodity Range
//             </h2>

//             <p className="text-primary/60 max-w-3xl leading-relaxed">
//               Categorised across grains, dry produce, fresh exports,
//               spices, and specialty verticals structured for long-term
//               international supply contracts.
//             </p>
//           </div>

//           <ProductGrid standalone />

//         </div>
//       </section>

//       {/* FINAL CTA */}
//       {/* PREMIUM CTA CLOSE */}
// <section className="bg-lightsection py-28 px-6">
//   <div className="max-w-6xl mx-auto">

//     <div className="relative bg-white border border-primary/10 rounded-2xl px-12 py-20 shadow-sm overflow-hidden">

//       {/* Subtle depth background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,78,121,0.05),transparent_60%)]"></div>

//       <div className="relative text-center">

//         <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-8 leading-tight">
//           Ready to Structure Your Supply Agreement?
//         </h3>

//         <p className="text-primary/60 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
//           Our export desk coordinates sourcing, packaging, inspection protocols,
//           documentation, and freight handling aligned to your destination market
//           and contractual volume requirements.
//         </p>

//         <Link
//   href="/trade-inquiry"
//   className="inline-flex items-center justify-center
//              bg-primary
//              text-white
//              px-12 py-4
//              rounded-md
//              font-semibold
//              tracking-wide
//              shadow-md
//              hover:bg-[#0A1F44]
//              hover:shadow-xl
//              hover:-translate-y-[2px]
//              transition-all duration-300"
// >
//   Initiate Trade Discussion
// </Link>
//       </div>

//     </div>

//   </div>
// </section>

//     </main>
//   );
// }























import ProductGrid from "../../components/ProductGrid";
import Link from "next/link";
import { Package, Truck, FileText, Globe } from "lucide-react";

export const metadata = {
  title: "Active Export Commodities | EXIMNAME",
  description:
    "Current export-ready agricultural commodities available for bulk international trade execution.",
};

export default function page() {
  return (
    <main className="min-h-screen pt-40 bg-lightsection">

      {/* HERO */}
      <section className="px-6 pb-36">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div>

            {/* Tag */}
            {/* <div className="inline-flex items-center gap-2 mb-6 text-[11px] tracking-[0.2em] uppercase text-action font-medium">
              <div className="w-6 h-[1px] bg-action"></div>
              Active Export Lines
            </div> */}

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-semibold text-primary leading-[1.1] mb-8">
              Export-Ready Agricultural
              <br />
              Commodities
            </h1>

            {/* Split Content */}
            <div className="space-y-6 mb-12">

              <p className="text-primary/70 text-lg leading-relaxed">
                We operate through a verified network of farmers producing
                <span className="text-primary font-medium"> export-grade commodities</span>.
                For volume spikes or seasonal gaps, our extended procurement network
                ensures uninterrupted supply.
              </p>

              <p className="text-primary/70 text-lg leading-relaxed">
                Every shipment undergoes strict quality checks before dispatch —
                ensuring <span className="text-primary font-medium">consistency, reliability, and execution precision</span>.
              </p>

            </div>

            {/* CTA + subtle trust cue */}
            <div className="flex items-center gap-6">

              <Link
                href="/trade-inquiry"
                className="inline-flex items-center justify-center
                     bg-primary text-white
                     px-10 py-4 rounded-md
                     font-semibold tracking-wide
                     shadow-md
                     hover:bg-[#0A1F44]
                     hover:-translate-y-[2px]
                     hover:shadow-xl
                     transition-all duration-300"
              >
                Initiate Trade Inquiry
              </Link>

              <span className="text-xs text-primary/40 tracking-wide">
                Response within 24 hrs
              </span>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-primary/10 bg-white p-4 shadow-sm">

            <div className="grid grid-cols-2 gap-4 h-full">

              <img
                src="/hero/BLACK_PEPPER.png"
                className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-105"
                alt="Black Pepper"
              />

              <img
                src="/hero/GARLIC.png"
                className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-105"
                alt="Garlic"
              />

              <img
                src="/hero/GARLIC_POWDER.png"
                className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-105"
                alt="Garlic Powder"
              />

              <img
                src="/hero/MAKAHANA.png"
                className="w-full h-full object-cover rounded-xl transition duration-500 hover:scale-105"
                alt="Makhana"
              />

            </div>

            {/* Depth + premium feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,78,121,0.08),transparent_60%)] pointer-events-none"></div>

          </div>

        </div>
      </section>

      {/* TRUST STRIP */}


      {/* <section className="py-28 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6"> */}

          {/* Top Heading */}
          {/* <div className="mb-16 text-center">
            <h3 className="text-3xl font-semibold text-primary mb-4">
              Trade Infrastructure
            </h3>
            <p className="text-primary/50 max-w-2xl mx-auto">
              Built around sourcing strength, execution discipline, and global delivery capability.
            </p>
          </div> */}

          {/* Grid */}
          {/* <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                icon: Package,
                title: "Focused Portfolio",
                desc: "Selected high-demand commodities",
              },
              {
                icon: Truck,
                title: "Consistent Supply",
                desc: "Verified sourcing networks",
              },
              {
                icon: FileText,
                title: "Export Execution",
                desc: "Documentation & logistics ready",
              },
              {
                icon: Globe,
                title: "Global Trade",
                desc: "Bulk shipment handling",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group text-center p-8 rounded-xl border border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              > */}

                {/* Icon */}
                {/* <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/5 group-hover:bg-primary/10 transition">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                {/* <h4 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h4> */}

                {/* Desc */}
                {/* <p className="text-primary/50 text-sm">
                  {item.desc}
                </p> */}

              {/* </div>
            ))}

          </div>
        </div>
      </section> */} 

      {/* PRODUCT GRID */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Available Commodities
            </h2>

            <p className="text-primary/60 max-w-3xl leading-relaxed">
              A curated set of export-ready products currently active for supply.
              Built for repeat orders, bulk execution, and long-term trade relationships.
            </p>
          </div>

          <ProductGrid standalone />

        </div>
      </section>

      {/* CTA */}
      <section className="bg-lightsection py-28 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="relative bg-white border border-primary/10 rounded-2xl px-12 py-20 shadow-sm overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,78,121,0.05),transparent_60%)]"></div>

            <div className="relative text-center">

              <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-8 leading-tight">
                Ready to Initiate Trade?
              </h3>

              <p className="text-primary/60 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                Connect with our export desk to discuss specifications,
                pricing, packaging, and shipment timelines aligned to your market.
              </p>

              <Link
                href="/trade-inquiry"
                className="inline-flex items-center justify-center
                           bg-primary
                           text-white
                           px-12 py-4
                           rounded-md
                           font-semibold
                           tracking-wide
                           shadow-md
                           hover:bg-[#0A1F44]
                           hover:shadow-xl
                           hover:-translate-y-[2px]
                           transition-all duration-300"
              >
                Initiate Trade Discussion
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}