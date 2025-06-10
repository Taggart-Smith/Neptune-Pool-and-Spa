import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="navbar text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-6">

        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-bold mb-1">Neptune Pool & Spa</h2>
          <p className="text-blue-100 mb-2">
            Your trusted pool cleaning service in St George County, UT
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="tel:3855674648"
              className="hover:underline flex items-center gap-1"
            >
              <span role="img" aria-label="Phone">
                📞
              </span>
              (385) 567-4648
            </a>
            <a
              href="mailto:info@neptunepoolandspa.com"
              className="hover:underline flex items-center gap-1"
            >
              <span role="img" aria-label="Email">
                ✉️
              </span>
              info@neptunepoolandspa.com
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center gap-1"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 flex items-center gap-1"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end text-blue-100">
          <p className="mb-1">Serving St George County, UT</p>
          <p className="mb-1">Mon–Sat: 8am – 6pm</p>
          <p className="italic">Professional • Reliable • Local</p>
        </div>
      </div>
      <div className="mt-6 border-t border-white pt-4 text-center text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} Neptune Pool & Spa. All rights
        reserved.
      </div>
    </footer>
  );
}
