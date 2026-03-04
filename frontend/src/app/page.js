import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import CoreCommodities from "../components/CoreCommodities";
import AboutPreview from "../components/AboutPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <CoreCommodities />
      {/* <ProductGrid /> */}
    </main>
  );
}