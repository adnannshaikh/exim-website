"use client";

import { useState } from "react";
import { PRODUCTS } from "../data/products";
import ProductSlideshow from "./ProductSlideshow";

export default function ProductGrid({ standalone = false }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const categories = [...new Set(PRODUCTS.map((p) => p.category))];

  return (
    <section
      className={`${standalone ? "py-12" : "py-24"} bg-white px-6`}
    >
      <div className="max-w-7xl mx-auto">

        {!standalone && (
          <h2 className="text-4xl font-semibold mb-20 text-center text-primary">
            Export Product Catalogue
          </h2>
        )}

        {categories.map((category) => (
          <div key={category} className="mb-24">

            {/* Category Title */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {category}
              </h3>
              <div className="w-16 h-[2px] bg-action" />
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">

              {PRODUCTS.filter((p) => p.category === category).map(
                (product, i) => {
                  const realIndex = PRODUCTS.findIndex(
                    (p) => p.id === product.id
                  );

                  return (
                    <div
                      key={product.id}
                      onClick={() => {
                        setIndex(realIndex);
                        setOpen(true);
                      }}
                      className="group cursor-pointer border border-primary/10 rounded-lg overflow-hidden hover:border-action transition-all duration-300 bg-white"
                    >
                      {/* Image */}
                      <div className="overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-52 object-cover transition duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-52 bg-primary/5 flex items-center justify-center text-primary/40 text-sm">
                            Image Coming Soon
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-primary mb-2">
                          {product.name}
                        </h4>

                        <p className="text-primary/50 text-sm tracking-wide">
                          Bulk Export Supply
                        </p>
                      </div>
                    </div>
                  );
                }
              )}

            </div>
          </div>
        ))}
      </div>

      <ProductSlideshow
        isOpen={open}
        onClose={() => setOpen(false)}
        startIndex={index}
        products={PRODUCTS}
      />
    </section>
  );
}