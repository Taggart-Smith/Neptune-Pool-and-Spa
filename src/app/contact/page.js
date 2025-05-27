import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="">
      <Navbar />
      
      <div className="text-center">
        <h1 className="text-4xl font-bold">Contact Us
        </h1>
        <p className="text-lg">We would love to hear from you!</p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/images/swimming-pool-top-view.jpg"
          alt="Pool"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
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
