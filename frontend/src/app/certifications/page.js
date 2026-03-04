"use client";

import { useState } from "react";
import { X } from "lucide-react";

const CERTIFICATIONS = [
  {
    id: "iec",
    name: "Import Export Code (IEC)",
    file: "",
  },
  {
    id: "gst",
    name: "GST Registration",
    file: "",
  },
  {
    id: "msme",
    name: "MSME Registration",
    file: "",
  },
  {
    id: "fssai",
    name: "FSSAI License",
    file: "",
  },
  {
    id: "apeda",
    name: "APEDA Registration",
    file: "",
  },
];

export default function CertificationsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen pt-40 bg-lightsection px-6">

      {/* Header */}
      <section className="max-w-6xl mx-auto text-center mb-24">

        <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
          Regulatory & Trade Compliance
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-8 leading-tight">
          Certifications & Documentation
        </h1>

        <p className="text-primary/60 max-w-3xl mx-auto leading-relaxed">
          EXIMNAME operates in full compliance with Indian export regulations
          and structured international trade requirements. Official
          documentation is maintained and available for verified trade partners.
        </p>

      </section>

      {/* Certification Grid */}
      <section className="max-w-7xl mx-auto pb-32">
        <div className="grid md:grid-cols-3 gap-12">

          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelected(cert)}
              className="group cursor-pointer bg-white border border-primary/10 rounded-xl p-10 hover:border-action transition-all duration-300"
            >
              <div className="h-36 bg-primary/5 rounded-lg flex items-center justify-center mb-8 text-primary/40 text-sm">
                Certificate Preview
              </div>

              <h3 className="text-lg font-medium text-primary">
                {cert.name}
              </h3>

              <p className="text-primary/50 text-sm mt-2">
                Click to Preview
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-primary/90 flex items-center justify-center p-6 z-50">

          <div className="bg-white max-w-4xl w-full rounded-xl p-10 relative shadow-xl">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-primary"
            >
              <X size={26} />
            </button>

            <h2 className="text-2xl font-semibold text-primary mb-8">
              {selected.name}
            </h2>

            <div className="h-[500px] bg-primary/5 rounded-lg flex items-center justify-center text-primary/40">
              Scanned certificate will appear here.
            </div>

          </div>
        </div>
      )}

    </main>
  );
}