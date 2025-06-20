import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-4 gap-8">
      {/* Left: Headline & CTA */}
      <div className="flex-1">
        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
          Neptune pool maintenance experts
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          We handle the maintenance, <br />
          <span className="text-blue-700">you enjoy your pool</span>
        </h1>
        <p className="mb-6 text-gray-700 text-lg">
          Reliable pool cleaning services &amp; quality products for your home.
        </p>
        <Link
          href="/contact"
          className="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Schedule now <span role="img" aria-label="phone">📞</span>
        </Link>
        {/* Optional: Google reviews or trust badges */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/images/google-reviews.png" alt="Google reviews" width={80} height={20} />
          <span className="text-sm text-gray-500">4.7 ★★★★★</span>
        </div>
      </div>
      {/* Right: Hero Image with Decorative Border */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative">
          <Image
            src="/images/swimming-pool-top-view.jpg"
            alt="Family enjoying pool"
            width={400}
            height={350}
            className="rounded-2xl shadow-lg border-4 border-blue-700"
            priority
          />
          {/* Decorative waves or shapes */}
          <div className="absolute -bottom-6 -left-6 w-16 h-6 bg-blue-200 rounded-full opacity-60" />
          <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-300 rounded-full opacity-80" />
        </div>
      </div>
    </section>
  );
}