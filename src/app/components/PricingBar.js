import React from "react";
import Image from "next/image";

const PricingBar = () => {
  return (
    <div className="pricing flex flex-col items-center w-full py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 drop-shadow-sm">Pricing</h1>

      {/* Residential */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl w-full px-4 py-8 gap-8">
        <div className="left-side w-full sm:w-1/2">
          <Image
            src="/Neptune-Pool-and-Spa/images/swimming-pool-top-view.jpg"
            alt="Residential Pool"
            width={500}
            height={300}
            className="rounded-2xl shadow-xl object-cover border border-gray-200"
            priority
          />
        </div>
        <div className="right-side w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center sm:text-left">Residential</h3>
          <ul className="mb-4 text-gray-700">
            <li className="mb-2">
              <strong>Basic Cleaning:</strong> <span className="text-gray-900">$50 per visit</span>
            </li>
            <li className="mb-2">
              <strong>Standard Cleaning:</strong> <span className="text-gray-900">$75 per visit</span>
            </li>
            <li className="mb-2">
              <strong>Premium Cleaning:</strong> <span className="text-gray-900">$100 per visit</span>
            </li>
          </ul>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">
              All Residential Services Include:
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Skimming and debris removal</li>
              <li>Brushing pool walls and tiles</li>
              <li>Vacuuming pool floor</li>
              <li>Emptying baskets and traps</li>
              <li>Water chemistry testing &amp; balancing</li>
              <li>Equipment inspection</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm">
            Contact us for custom packages and discounts on long-term contracts.
          </p>
        </div>
      </div>

      {/* Commercial */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between max-w-5xl w-full px-4 py-8 gap-8">
        <div className="right-side w-full sm:w-1/2">
          <Image
            src="/Neptune-Pool-and-Spa/images/poolsidex:robot.jpg"
            alt="Commercial Pool"
            width={500}
            height={300}
            className="rounded-2xl shadow-xl object-cover border border-gray-200"
            priority
          />
        </div>
        <div className="left-side w-full sm:w-1/2">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 text-center sm:text-left">Commercial</h3>
          <ul className="mb-4 text-gray-700">
            <li className="mb-2">
              <strong>Basic Cleaning:</strong> <span className="text-gray-900">$75 per visit</span>
            </li>
            <li className="mb-2">
              <strong>Standard Cleaning:</strong> <span className="text-gray-900">$100 per visit</span>
            </li>
            <li className="mb-2">
              <strong>Premium Cleaning:</strong> <span className="text-gray-900">$150 per visit</span>
            </li>
          </ul>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">
              All Commercial Services Include:
            </h4>
            <ul className="list-disc pl-5 text-gray-700">
              <li>All residential services</li>
              <li>Detailed equipment checks</li>
              <li>Filter cleaning &amp; maintenance</li>
              <li>Compliance checks</li>
              <li>Service logs &amp; reporting</li>
              <li>Priority scheduling</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm">
            Contact us for custom commercial quotes and maintenance contracts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingBar;