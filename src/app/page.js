import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";
import PricingBar from "./components/PricingBar";
import Link from "next/link";
import ContactRef from "./components/ContactRef";
import Benefits from "./components/Benefits";
import Hero2 from "./components/Hero2";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="background relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-x-hidden">
      {/* Decorative SVG dots pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%230099cc' fill-opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.5,
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero
          title="Welcome to Neptune Pool & Spa"
          subtitle="Your trusted pool cleaning service."
          image="/images/swimming-pool-top-view.jpg"
          cta={
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-black text-white px-4 py-2 rounded"
            >
              Get a Quote
            </Link>
          }
        />
        <Hero2 />
        <WhyChooseUs />
        <Certifications />
        <PricingBar />
        <ContactRef />
        <Footer />
      </div>
    </div>
  );
}
