import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Pricing from "./pricing/page";
import PricingBar from "./components/PricingBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero
        title="Welcome to Neptune Pool & Spa"
        subtitle="Your trusted pool cleaning service."
        image="/images/swimming-pool-top-view.jpg"
        cta={<Link href="/contact" className="bg-orange-500 hover:bg-black text-white px-4 py-2 rounded">Get a Quote</Link>}
      />

      <Certifications />

      <PricingBar />

      <Footer />
    </div>
  );
}
