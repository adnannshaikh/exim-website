"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/about/Rice_loading_PREVIEW.png",
  "/about/RiceWarehouse_PREVIEW.png",
//   "/about/warehouse3.jpg",
//   "/about/warehouse4.jpg",
];

export default function WarehouseSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide (slow premium)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-md">

      {/* Images */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Warehouse"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay (premium feel) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
}