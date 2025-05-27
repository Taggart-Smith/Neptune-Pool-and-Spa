import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero
        title="Welcome to Neptune Pool & Spa"
        subtitle="Your trusted pool cleaning service."
        image="/images/swimming-pool-top-view.jpg"
        cta={<button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>}
      />

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mt-4">Residential Pool Cleaning</h2>
        <p className="text-lg mt-2">
          The cost for a residential pool cleaning appointment is{" "}
          <strong>$25</strong>.
        </p>
      </div>

      <Footer />
    </div>
  );
}
