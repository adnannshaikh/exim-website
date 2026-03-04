"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNav = (href) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(href);
    }
    setOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-primary border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleNav("/")}
          className="text-2xl font-semibold text-white tracking-tight"
        >
          EXIM<span className="text-soft-blue">NAME</span>
        </button>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-12 text-sm tracking-wide text-white/70">

          <button onClick={() => handleNav("/")} className="hover:text-white transition">
            Home
          </button>

          <button onClick={() => handleNav("/about")} className="hover:text-white transition">
            About
          </button>

          <button onClick={() => handleNav("/products")} className="hover:text-white transition">
            Products
          </button>

          <button onClick={() => handleNav("/certifications")} className="hover:text-white transition">
            Certifications
          </button>

          <button onClick={() => handleNav("/contact")} className="hover:text-white transition">
            Contact
          </button>

        </div>

        {/* === YOUR CONTAINER CTA (UNCHANGED VISUAL) === */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNav("/trade-inquiry")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-white/40 bg-transparent px-10 py-4 font-bold uppercase tracking-widest text-white/80 transition-all duration-500 hover:border-transparent hover:shadow-2xl"
          >
            {/* Initial Ghost Texture */}
            <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(255,255,255,0.05)_12px,rgba(255,255,255,0.05)_24px)] transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Sliding Container */}
            <div className="absolute inset-0 z-0 -translate-x-full bg-orange-700 transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.15,1)] group-hover:translate-x-0">

              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,rgba(0,0,0,0.25)_12px,rgba(0,0,0,0.25)_24px)]"></div>

              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_1px,transparent_1px,transparent_24px)]"></div>

              <span className="absolute left-2 top-1 text-[8px] font-mono tracking-tighter text-white/40 select-none">
                MAX.GW 30,480 KG
              </span>

              <div className="absolute left-0 top-0 h-2.5 w-2.5 border-b border-r border-black/50 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-r border-t border-black/50 bg-black/40"></div>
              <div className="absolute right-0 top-0 h-2.5 w-2.5 border-b border-l border-black/50 bg-black/40"></div>
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-l border-t border-black/50 bg-black/40"></div>

              <div className="absolute inset-y-0 right-4 w-[3px] border-l border-white/10 bg-black/30 shadow-[-2px_0_4px_rgba(0,0,0,0.4)]"></div>
              <div className="absolute inset-y-0 right-7 w-[3px] border-l border-white/10 bg-black/30 shadow-[-2px_0_4px_rgba(0,0,0,0.4)]"></div>
            </div>

            {/* Text */}
            <span className="relative z-10 text-sm transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
              Initiate Trade Inquiry
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-8 space-y-6 text-white/80 text-sm">

          <button onClick={() => handleNav("/")} className="block w-full text-left hover:text-white">
            Home
          </button>

          <button onClick={() => handleNav("/about")} className="block w-full text-left hover:text-white">
            About
          </button>

          <button onClick={() => handleNav("/products")} className="block w-full text-left hover:text-white">
            Products
          </button>

          <button onClick={() => handleNav("/certifications")} className="block w-full text-left hover:text-white">
            Certifications
          </button>

          <button onClick={() => handleNav("/contact")} className="block w-full text-left hover:text-white">
            Contact
          </button>

          <button
            onClick={() => handleNav("/trade-inquiry")}
            className="block mt-4 bg-white text-primary px-6 py-3 rounded-lg font-semibold text-center"
          >
            Initiate Trade Inquiry
          </button>

        </div>
      )}
    </nav>
  );
}