import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Certifications from "./components/Certifications";

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

      <div className="pricing flex flex-col items-center">
        <h1 className="text-2xl font-semibold mt-4">Pricing</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl w-full px-4 py-8 gap-8">
          <div className="left-side">
            <Image
              src="/images/poolside:sunset.jpg"
              alt="Pool Cleaning"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="right-side">
            <h3 className="text-xl font-semibold mt-4">Residential</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Basic Cleaning: $50 per visit</li>
              <li>Standard Cleaning: $75 per visit</li>
              <li>Premium Cleaning: $100 per visit</li>
            </ul>
            <p className="mt-4">Contact us for custom packages and discounts on long-term contracts.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl w-full px-4 py-8 gap-8">
          <div className="left-side">
            <h3 className="text-xl font-semibold mt-4">Commercial</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Basic Cleaning: $50 per visit</li>
              <li>Standard Cleaning: $75 per visit</li>
              <li>Premium Cleaning: $100 per visit</li>
            </ul>
            <p className="mt-4">Contact us for custom packages and discounts on long-term contracts.</p>
          </div>
          <div className="right-side">
            <Image
              src="/images/poolsidex:robot.jpg"
              alt="Pool Cleaning"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
