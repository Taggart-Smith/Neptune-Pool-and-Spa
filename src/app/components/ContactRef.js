import Link from "next/link";

export default function ContactRef() {
  return (
    <div className="mt-20 mb-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Ready to dive in?
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Contact Neptune Pool & Spa today for a free estimate or to schedule your first cleaning. Our team is here to answer your questions and help you enjoy a sparkling clean pool!
      </p>
      <Link
        href="/contact"
        className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl shadow transition-all duration-300 hover:bg-black"
      >
        Contact Us
      </Link>
    </div>
  );
}