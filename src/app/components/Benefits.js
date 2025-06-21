import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Benefits() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Images grid */}
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/Neptune-Pool-and-Spa/images/pool-cleaning.jpg"
          alt="Pool cleaning"
          width={180}
          height={120}
          className="rounded-lg shadow"
        />
        <Image
          src="/Neptune-Pool-and-Spa/images/pool-cleaning.jpg"
          alt="Filter cleaning"
          width={180}
          height={120}
          className="rounded-lg shadow"
        />
        <Image
          src="/Neptune-Pool-and-Spa/images/pool-cleaning.jpg"
          alt="Pool after cleaning"
          width={180}
          height={120}
          className="rounded-lg shadow"
        />
        <Image
          src="/Neptune-Pool-and-Spa/images/pool-cleaning.jpg"
          alt="Pool cleaning in progress"
          width={180}
          height={120}
          className="rounded-lg shadow"
        />
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Don’t let a dirty pool ruin your summer fun
        </h2>
        <p className="mb-4 text-gray-700">
          Without regular maintenance, your pool can become a source of stress and unexpected costs.
        </p>
        <ul className="mb-6 space-y-2">
          {[
            "Algae growth can make your pool unsafe and unsightly.",
            "Malfunctioning equipment can lead to expensive repairs.",
            "Poor water quality can affect your family’s health."
          ].map((text, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faChevronRight} className="text-blue-700 text-xl" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Book your pool cleaning&nbsp;
          <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
