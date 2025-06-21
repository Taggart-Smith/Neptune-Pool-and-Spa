'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 drop-shadow-sm">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6">
            <Image
              src="/Neptune-Pool-and-Spa/images/swimming-pool-top-view.jpg"
              alt="Top view of a clear blue swimming pool"
              loading='lazy'
              width={600}
              height={350}
              className="rounded-2xl shadow-xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-1">Neptune Pool & Spa</p>
              <p className="text-gray-700 mb-1">St George County, UT</p>
              <p className="text-gray-700 mb-3">Mon–Sat: 8am – 6pm</p>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-600 hover:text-orange-500" />
                  <a
                    href="sms:3855674648"
                    className="underline hover:text-orange-500 transition"
                  >
                    (385) 567-4648
                  </a>
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-orange-500" />
                  <a
                    href="mailto:info@neptunepoolandspa.com"
                    className="underline hover:text-orange-500 transition"
                  >
                    info@neptunepoolandspa.com
                  </a>
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2 flex items-center">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
