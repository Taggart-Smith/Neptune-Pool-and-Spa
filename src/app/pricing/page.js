import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 drop-shadow-sm">
          Pricing
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Choose the best plan for your pool cleaning needs.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Residential Pricing */}
          <div className="md:w-1/2 space-y-6">
            <Image
              src="/images/swimming-pool-top-view.jpg"
              alt="Residential Pool"
              width={600}
              height={350}
              className="rounded-2xl shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 text-center">
                Residential
              </h2>
              <ul className="mb-4 text-gray-700">
                <li className="mb-2">
                  <strong>Basic Cleaning:</strong> <span className="text-blue-700">$50 per visit</span>
                </li>
                <li className="mb-2">
                  <strong>Standard Cleaning:</strong> <span className="text-blue-700">$75 per visit</span>
                </li>
                <li className="mb-2">
                  <strong>Premium Cleaning:</strong> <span className="text-blue-700">$100 per visit</span>
                </li>
              </ul>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-blue-700">
                  All Residential Services Include:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Skimming and debris removal</li>
                  <li>Brushing pool walls and tiles</li>
                  <li>Vacuuming pool floor</li>
                  <li>Emptying baskets and traps</li>
                  <li>Water chemistry testing &amp; balancing</li>
                  <li>Equipment inspection</li>
                </ul>
              </div>
              <p className="text-blue-600 text-sm text-center">
                Contact us for custom packages and discounts on long-term contracts.
              </p>
            </div>
          </div>

          {/* Commercial Pricing */}
          <div className="md:w-1/2 space-y-6">
            <Image
              src="/images/poolsidex:robot.jpg"
              alt="Commercial Pool"
              width={600}
              height={350}
              className="rounded-2xl shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 text-center">
                Commercial
              </h2>
              <ul className="mb-4 text-gray-700">
                <li className="mb-2">
                  <strong>Basic Cleaning:</strong> <span className="text-blue-700">$75 per visit</span>
                </li>
                <li className="mb-2">
                  <strong>Standard Cleaning:</strong> <span className="text-blue-700">$100 per visit</span>
                </li>
                <li className="mb-2">
                  <strong>Premium Cleaning:</strong> <span className="text-blue-700">$150 per visit</span>
                </li>
              </ul>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-blue-700">
                  All Commercial Services Include:
                </h3>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>All residential services</li>
                  <li>Detailed equipment checks</li>
                  <li>Filter cleaning &amp; maintenance</li>
                  <li>Compliance checks</li>
                  <li>Service logs &amp; reporting</li>
                  <li>Priority scheduling</li>
                </ul>
              </div>
              <p className="text-blue-600 text-sm text-center">
                Contact us for custom commercial quotes and maintenance contracts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
