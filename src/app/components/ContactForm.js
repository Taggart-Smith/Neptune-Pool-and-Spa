'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>

      {submitted && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
          Your message has been sent!
        </div>
      )}

      <form
        action="https://formsubmit.co/taggart.smith@gmail.com"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="space-y-4"
      >
        {/* Optional: Prevent spam */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Optional: Redirect after submission */}
        <input type="hidden" name="_next" value="https://taggart-smith.github.io/Neptune-Pool-and-Spa/contact" />

        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
