import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Inter } from "next/font/google";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ZACH ORGANIC EXPORTS",
  description:
    "Premium Indian agricultural commodities exported worldwide with compliance and reliability.",
  icons: {
    icon: "/ZASH_LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#021024] antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}