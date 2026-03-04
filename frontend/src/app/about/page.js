export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 bg-lightsection">

      {/* Hero Intro */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-8 leading-tight">
            Institutional Export Infrastructure
          </h1>

          <p className="text-primary/60 text-lg max-w-3xl mx-auto leading-relaxed">
            EXIMNAME operates as a structured agricultural export house,
            connecting verified sourcing networks in India with global
            import partners through disciplined execution and compliance-driven processes.
          </p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Who We Are
            </h2>

            <p className="text-primary/70 leading-relaxed mb-6">
              EXIMNAME is an Indian export enterprise specializing in
              agricultural commodities including grains, dry produce,
              fresh vegetables, and specialty items.
            </p>

            <p className="text-primary/70 leading-relaxed">
              Our operational framework is built on long-term international
              trade partnerships supported by consistency, documentation
              integrity, and transparent communication.
            </p>
          </div>

          <div className="h-96 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 text-sm">
            Company Infrastructure / Warehouse Image
          </div>

        </div>
      </section>

      {/* Sourcing Model */}
      <section className="px-6 py-24 bg-lightsection">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-primary mb-10 text-center">
            Structured Sourcing Model
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <div className="w-14 h-14 bg-action/10 rounded-full mx-auto mb-6 flex items-center justify-center text-action font-semibold">
                01
              </div>
              <h3 className="font-medium text-primary mb-3">
                Verified Farmer Networks
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Direct and vetted procurement channels across major
                agricultural belts of India.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 bg-action/10 rounded-full mx-auto mb-6 flex items-center justify-center text-action font-semibold">
                02
              </div>
              <h3 className="font-medium text-primary mb-3">
                Quality Processing
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Structured grading, sorting, and packaging
                aligned with export market requirements.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 bg-action/10 rounded-full mx-auto mb-6 flex items-center justify-center text-action font-semibold">
                03
              </div>
              <h3 className="font-medium text-primary mb-3">
                Pre-Dispatch Inspection
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed">
                Controlled documentation and inspection protocols
                prior to international shipment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-primary mb-8">
            Compliance & Documentation
          </h2>

          <p className="text-primary/70 leading-relaxed max-w-4xl mb-12">
            Our export operations are supported by complete documentation
            protocols including IEC registration, phytosanitary certification,
            certificate of origin issuance, and structured customs clearance handling.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-sm text-primary/60">

            <div className="border border-primary/10 p-6 rounded-lg">
              IEC Registration
            </div>

            <div className="border border-primary/10 p-6 rounded-lg">
              Phytosanitary Certification
            </div>

            <div className="border border-primary/10 p-6 rounded-lg">
              Certificate of Origin
            </div>

            <div className="border border-primary/10 p-6 rounded-lg">
              Customs Clearance
            </div>

          </div>

        </div>
      </section>

      {/* Logistics */}
      <section className="px-6 py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">
            Logistics & Global Reach
          </h2>

          <p className="text-white/70 leading-relaxed max-w-4xl">
            We execute both FOB and CIF shipments through established
            freight networks and maritime carriers. Our logistics
            coordination ensures adherence to vessel schedules,
            export timelines, and international port requirements.
          </p>

        </div>
      </section>

    </main>
  );
}