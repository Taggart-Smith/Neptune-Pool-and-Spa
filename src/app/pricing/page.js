import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800 drop-shadow-sm">
          Pricing
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Transparent pricing for every pool. Choose the plan that fits your needs, or contact us for a custom quote!
        </p>

        {/* FAQ / Info Section */}
        <div className="mb-12 bg-blue-100 rounded-xl p-6 text-gray-800 shadow">
          <h2 className="text-xl font-semibold mb-2">How does pricing work?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prices are per visit and may vary based on pool size and condition.</li>
            <li>All plans include a satisfaction guarantee and free water testing.</li>
            <li>We offer discounts for regular weekly or bi-weekly service contracts.</li>
            <li>Contact us for a free on-site estimate or for special requests.</li>
          </ul>
        </div>

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
                  <strong>Basic Cleaning:</strong> <span className="text-gray-900">$50 per visit</span>
                  <span className="block text-xs text-gray-500">Skimming, basket emptying, water test</span>
                </li>
                <li className="mb-2">
                  <strong>Standard Cleaning:</strong> <span className="text-gray-900">$75 per visit</span>
                  <span className="block text-xs text-gray-500">Basic + brushing, vacuuming, chemical balancing</span>
                </li>
                <li className="mb-2">
                  <strong>Premium Cleaning:</strong> <span className="text-gray-900">$100 per visit</span>
                  <span className="block text-xs text-gray-500">Standard + filter cleaning, equipment check</span>
                </li>
              </ul>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-gray-800">
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
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-1">Popular Add-ons:</h4>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                  <li>One-time deep clean: <span className="text-gray-900">$120</span></li>
                  <li>Algae treatment: <span className="text-gray-900">$60</span></li>
                  <li>Heater or pump inspection: <span className="text-gray-900">$40</span></li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm text-center">
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
                  <strong>Basic Cleaning:</strong> <span className="text-gray-900">$75 per visit</span>
                  <span className="block text-xs text-gray-500">Skimming, baskets, water test, compliance check</span>
                </li>
                <li className="mb-2">
                  <strong>Standard Cleaning:</strong> <span className="text-gray-900">$100 per visit</span>
                  <span className="block text-xs text-gray-500">Basic + brushing, vacuuming, chemical balancing, logs</span>
                </li>
                <li className="mb-2">
                  <strong>Premium Cleaning:</strong> <span className="text-gray-900">$150 per visit</span>
                  <span className="block text-xs text-gray-500">Standard + filter cleaning, priority scheduling</span>
                </li>
              </ul>
              <div className="mb-4">
                <h3 className="font-semibold mb-1 text-gray-800">
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
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-1">Popular Add-ons:</h4>
                <ul className="list-disc pl-5 text-gray-700 text-sm">
                  <li>After-hours service: <span className="text-gray-900">$100</span></li>
                  <li>Emergency call-out: <span className="text-gray-900">$150</span></li>
                  <li>Equipment upgrades: <span className="text-gray-900">Quote</span></li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm text-center">
                Contact us for custom commercial quotes and maintenance contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to get started?</h2>
          <p className="text-gray-700 mb-4">Contact us today for a free estimate or to schedule your first cleaning!</p>
          <a
            href="/contact"
            className="inline-block text-white bg-orange-500 rounded-xl px-6 py-2 transition-all duration-300 ease-in-out transform hover:bg-black"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
