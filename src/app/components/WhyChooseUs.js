import {
  faWater,
  faBoxOpen,
  faTools,
  faLeaf,
  faUserTie,
  faBolt,
  faMapMarkerAlt,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const features = [
  {
    icon: faWater,
    title: "Expert pool cleaning",
    desc: "Keep your pool pristine and safe with our professional cleaning services.",
  },
  {
    icon: faBoxOpen,
    title: "Quality products",
    desc: "Top-tier pool chemicals, filters, and accessories from our physical storefront.",
  },
  {
    icon: faTools,
    title: "Customized maintenance plans",
    desc: "Tailored pool care solutions designed to meet your unique needs and budget.",
  },
  {
    icon: faLeaf,
    title: "Energy efficient solutions",
    desc: "Keep your pool pristine and safe with our professional cleaning services.",
  },
  {
    icon: faUserTie,
    title: "Knowledgeable staff",
    desc: "Our team of pool experts is always ready to answer your questions.",
  },
  {
    icon: faBolt,
    title: "Fast, reliable repairs",
    desc: "Minimize downtime with our quick and efficient pool repair services.",
  },
  {
    icon: faMapMarkerAlt,
    title: "Local expertise",
    desc: "Proudly serving the region with fast, reliable service.",
  },
  {
    icon: faSwimmer,
    title: "Openings & closings",
    desc: "Hassle-free start and end to the pool season with our opening and closing services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Why choose Neptune Pool & Spa?
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We take the hassle out of pool ownership, so you can focus on enjoying
          your backyard oasis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-blue-700 text-3xl mb-2"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow text-center"
          >
            Talk to a pool care expert
          </Link>
          <Link
            href="/services"
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow text-center"
          >
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  );
}
