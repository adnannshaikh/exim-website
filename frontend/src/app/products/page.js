import ProductGrid from "../../components/ProductGrid";
import Link from "next/link";

export const metadata = {
  title: "Export Commodity Portfolio | EXIMNAME",
  description:
    "Comprehensive agricultural export portfolio including grains, spices, fresh produce and specialty commodities structured for global trade execution.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-40 bg-lightsection">

      {/* HERO SECTION */}
      <section className="px-6 pb-36">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>
              <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
                Institutional Export Portfolio
              </div>

              <h1 className="text-5xl md:text-6xl font-semibold text-primary leading-tight mb-8">
                Structured Agricultural
                <br />
                Commodity Supply
              </h1>

              <p className="text-primary/60 text-lg leading-relaxed mb-12">
                A disciplined range of grains, dry produce, fresh exports,
                spices, and specialty commodities structured for repeat
                international bulk trade execution.
              </p>

              <Link
                href="/trade-inquiry"
                className="inline-block bg-primary text-white px-9 py-4 rounded-md font-medium hover:bg-action transition"
              >
                Initiate Trade Inquiry
              </Link>
            </div>

            {/* Right Visual (Structured Block Instead of Placeholder Text) */}
            <div className="relative h-[460px] rounded-2xl overflow-hidden border border-primary/10 bg-primary/5 flex items-center justify-center">

              <div className="text-center px-10">
                <div className="text-3xl font-semibold text-primary mb-4">
                  Multi-Category Portfolio
                </div>
                <p className="text-primary/50 text-sm leading-relaxed">
                  Grains · Dry Produce · Fresh Exports · Spices · Specialty Commodities
                </p>
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,78,121,0.05),transparent_70%)]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUE STRIP (More Subtle + More Fluid) */}
      <section className="py-24 border-y border-primary/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">

          {[
            ["Multi-Category", "Diversified Commodity Portfolio"],
            ["Bulk Execution", "Structured Shipment Handling"],
            ["Documentation", "Complete Export Compliance"],
            ["Global Reach", "Maritime & Freight Network"],
          ].map(([title, desc]) => (
            <div key={title}>
              <div className="text-xl font-semibold text-primary mb-3">
                {title}
              </div>
              <p className="text-primary/50 text-sm">
                {desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Complete Commodity Range
            </h2>

            <p className="text-primary/60 max-w-3xl leading-relaxed">
              Categorised across grains, dry produce, fresh exports,
              spices, and specialty verticals structured for long-term
              international supply contracts.
            </p>
          </div>

          <ProductGrid standalone />

        </div>
      </section>

      {/* FINAL CTA */}
      {/* PREMIUM CTA CLOSE */}
<section className="bg-lightsection py-28 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="relative bg-white border border-primary/10 rounded-2xl px-12 py-20 shadow-sm overflow-hidden">

      {/* Subtle depth background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,78,121,0.05),transparent_60%)]"></div>

      <div className="relative text-center">

        <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-8 leading-tight">
          Ready to Structure Your Supply Agreement?
        </h3>

        <p className="text-primary/60 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Our export desk coordinates sourcing, packaging, inspection protocols,
          documentation, and freight handling aligned to your destination market
          and contractual volume requirements.
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