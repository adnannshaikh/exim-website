"use client";

import { useState } from "react";

export default function TradeInquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    commodity: "",
    volume: "",
    port: "",
    incoterm: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Trade Inquiry Submitted");
  };

  return (
    <main className="min-h-screen pt-40 bg-lightsection px-6">

      {/* Header */}
      <section className="max-w-5xl mx-auto text-center mb-24">

        <div className="inline-block mb-6 text-xs tracking-widest uppercase text-action">
          International Trade Desk
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-8 leading-tight">
          Initiate Trade Inquiry
        </h1>

        <p className="text-primary/60 max-w-3xl mx-auto leading-relaxed">
          Provide your supply requirements and destination details.
          Our export desk will review and respond with structured execution terms.
        </p>

      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto pb-32">

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-primary/10 rounded-2xl p-12 shadow-sm"
        >

          {/* Company Details */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-8">
              Company Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <input
                name="country"
                placeholder="Country of Import"
                value={formData.country}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

            </div>
          </div>

          {/* Trade Details */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-8">
              Trade Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <input
                name="commodity"
                placeholder="Commodity Required"
                value={formData.commodity}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <input
                name="volume"
                placeholder="Estimated Volume (e.g. 1 x 20ft Container)"
                value={formData.volume}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <input
                name="port"
                placeholder="Destination Port"
                value={formData.port}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              />

              <select
                name="incoterm"
                value={formData.incoterm}
                onChange={handleChange}
                className="border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
                required
              >
                <option value="">Select Incoterm</option>
                <option value="FOB">FOB</option>
                <option value="CIF">CIF</option>
                <option value="EXW">EXW</option>
                <option value="Other">Other</option>
              </select>

            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Additional Requirements
            </h2>

            <textarea
              name="message"
              rows="5"
              placeholder="Specify packaging preferences, quality grade, delivery timeline, or inspection requirements..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-primary/10 p-4 rounded-md focus:outline-none focus:border-action"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-12 py-4 rounded-md font-medium hover:bg-action transition"
            >
              Submit Trade Inquiry
            </button>
          </div>

        </form>

      </section>

    </main>
  );
}