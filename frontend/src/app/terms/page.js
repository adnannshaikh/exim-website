export const metadata = {
  title: "Terms of Trade | ZASH Organic Exports",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 bg-lightsection">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold text-primary mb-10">
          Terms of Trade
        </h1>

        <div className="space-y-8 text-primary/70 text-sm leading-relaxed">

          <p>
            These terms outline the general conditions under which ZASH Organic
            Exports conducts international trade and business transactions.
          </p>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Product Information
            </h2>
            <p>
              Product specifications, grades, and availability are subject to
              seasonal variation and sourcing conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Pricing & Quotations
            </h2>
            <p>
              All pricing is indicative unless confirmed through formal quotation.
              Final pricing depends on quantity, packaging, and destination.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Order Confirmation
            </h2>
            <p>
              Orders are considered confirmed only after mutual agreement on terms,
              including specifications, pricing, payment terms, and delivery
              conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Quality & Inspection
            </h2>
            <p>
              Products are supplied as per agreed specifications. Third-party
              inspection can be arranged upon request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Logistics & Delivery
            </h2>
            <p>
              Delivery timelines depend on product availability, processing,
              documentation, and shipping schedules.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Liability
            </h2>
            <p>
              ZASH Organic Exports is not liable for delays or losses caused by
              external factors such as shipping disruptions, customs clearance,
              or force majeure conditions.
            </p>
          </div>

          <p className="text-primary/40 text-xs pt-6">
            Last updated: {new Date().getFullYear()}
          </p>

        </div>
      </div>
    </main>
  );
}