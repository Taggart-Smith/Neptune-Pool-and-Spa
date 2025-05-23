import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Residential() {
  return (
    <div className="">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Residential Pool Cleaning</h1>
        <p className="text-lg">Professional, reliable service for your home pool.</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/images/swimming-pool-top-view.jpg"
          alt="Residential Pool"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">Our Services</h2>
        <ul className="text-lg mt-2 list-disc list-inside">
          <li>Weekly pool cleaning</li>
          <li>Water testing & balancing</li>
          <li>Filter cleaning</li>
          <li>Debris removal</li>
        </ul>
        <p className="text-lg mt-4">
          The cost for a residential pool cleaning appointment is{" "}
          <strong>$25</strong>.
        </p>
      </div>

      <Footer />
    </div>
  );
}