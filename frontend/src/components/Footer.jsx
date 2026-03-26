"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [year, setYear] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, targetPath) => {
    if (pathname === targetPath) {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <>
      {/* Scroll Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] bg-primary text-white p-4 rounded-full shadow-xl hover:bg-action hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <footer className="bg-primary text-white pt-24 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">

          {/* ===== COMPANY ===== */}
          <div>
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="text-2xl font-semibold tracking-tight mb-5 inline-block hover:opacity-80 transition cursor-pointer"
            >
              ZASH <span className="text-action">ORGANIC EXPORTS</span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Exporter of structured agricultural commodities with disciplined sourcing,
              compliance-led execution, and consistent global trade delivery.
            </p>

            <p className="text-white/40 text-xs tracking-wide">
              Built for reliability. Designed for scale.
            </p>
          </div>

          {/* ===== COMPANY LINKS ===== */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== TRADE ===== */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              Trade Desk
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { href: "/products", label: "Product Portfolio" },
                { href: "/trade-inquiry", label: "Initiate Trade Inquiry" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== OFFICES ===== */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              Offices
            </h4>

            <div className="space-y-5 text-sm text-white/70">

              {/* Mumbai */}
              <div>
                {/* <p className="text-white font-medium mb-1">
                  Mumbai (Head Office)
                </p> */}
                <p>Mumbai, Maharashtra, India</p>
              </div>

              {/* Gujarat */}
              <div>
                {/* <p className="text-white font-medium mb-1">
                  Gujarat (Procurement & Sourcing)
                </p> */}
                <p>Ahemdabad, Gujarat, India</p>
              </div>

              {/* Contact */}
              <div className="pt-2 space-y-2">
                <p className="hover:text-white transition cursor-pointer">
                  	info@zashorganic.com
                </p>
                <p className="hover:text-white transition cursor-pointer">
                  +91 7400197131 / +91 7014935973
                </p>
          
                <p className="text-white/50 text-xs">
                  Mon – Sat | 09:00 – 18:00 IST
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ===== BOTTOM STRIP ===== */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">

          <p>
            © {year || ""} Zash Organic Exports. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, "/privacy-policy")}
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              onClick={(e) => handleLinkClick(e, "/terms")}
              className="hover:text-white transition"
            >
              Terms of Trade
            </Link>
          </div>

          <p>
            Powered by{" "}
            <a
              href="https://mangobrains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:opacity-80 transition"
            >
              <span style={{ color: "#00C26E" }}>Mango</span>
              <span className="text-white">Brains</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}