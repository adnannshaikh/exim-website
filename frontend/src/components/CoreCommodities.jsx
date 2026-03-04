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
    <section className="py-36 bg-lightsection px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Core Export Commodities
          </h2>

          <p className="text-primary/60 text-lg">
            Strategically sourced agricultural commodities supplied with
            disciplined quality control and structured export execution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {coreProducts.map((product, i) => (
            <div
              key={product.id}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group bg-white rounded-xl border border-primary/10 hover:border-action transition cursor-pointer overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-primary mb-2">
                  {product.name}
                </h3>

                <p className="text-primary/50 text-sm">
                  Structured Export Supply
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-action text-white px-10 py-4 rounded-md font-medium hover:opacity-90 transition"
          >
            View Complete Product Portfolio
          </Link>
        </div>
      </div>

      <ProductSlideshow
        isOpen={open}
        onClose={() => setOpen(false)}
        startIndex={index}
        products={coreProducts}
      />
    </section>
  );
}