import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import Pricing from "./pricing/page";
import PricingBar from "./components/PricingBar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero
        title="Welcome to Neptune Pool & Spa"
        subtitle="Your trusted pool cleaning service."
        image="/images/swimming-pool-top-view.jpg"
        cta={<button className="bg-orange-500 hover:bg-black text-white px-4 py-2 rounded">Get Started</button>}
      />
      <Certifications />

      <PricingBar />

      <Footer />
    </div>
  );
}
