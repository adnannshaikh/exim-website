"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [year, setYear] = useState(null);
  
  // 2. Get the current active route
  const pathname = usePathname(); 

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 3. Smart click handler for footer links
  const handleLinkClick = (e, targetPath) => {
    if (pathname === targetPath) {
      e.preventDefault(); // Stop standard navigation
      scrollToTop();      // Trigger the smooth scroll instead
    }
  };

  return (
    <>
      {/* Floating Scroll Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-[9999]
                     bg-primary text-white
                     p-4 rounded-full
                     shadow-xl
                     hover:bg-action
                     hover:-translate-y-1
                     transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <footer className="bg-primary text-white pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 mb-24">

          {/* Company Identity */}
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-6">
              EXIM<span className="text-action">NAME</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              International exporter of structured agricultural commodities,
              delivering disciplined sourcing, compliance integrity,
              and maritime-grade trade execution.
            </p>

            <p className="text-white/40 text-xs tracking-wide">
              Structured trade. Institutional reliability.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-8">
              Company
            </h4>

            {/* 4. Apply the handler to all navigation links */}
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</Link></li>
              <li><Link href="/about" onClick={(e) => handleLinkClick(e, "/about")}>About</Link></li>
              <li><Link href="/certifications" onClick={(e) => handleLinkClick(e, "/certifications")}>Certifications</Link></li>
              <li><Link href="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>Contact</Link></li>
            </ul>
          </div>

          {/* Trade Desk */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-8">
              Trade Desk
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/products" onClick={(e) => handleLinkClick(e, "/products")}>Product Portfolio</Link></li>
              <li><Link href="/trade-inquiry" onClick={(e) => handleLinkClick(e, "/trade-inquiry")}>Initiate Trade Inquiry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-8">
              Registered Office
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li>Mumbai, Maharashtra, India</li>
              <li>exports@eximname.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Mon – Sat | 09:00 – 18:00 IST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">

          <p>
            © {year || ""} EXIMNAME International Exports. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" onClick={(e) => handleLinkClick(e, "/privacy-policy")}>Privacy Policy</Link>
            <Link href="/terms" onClick={(e) => handleLinkClick(e, "/terms")}>Terms of Trade</Link>
          </div>

          <p className="mt-4 md:mt-0">
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