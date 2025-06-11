'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto w-full">
      {submitted && (
        <div className="p-4 mb-6 text-green-800 bg-green-100 border border-green-300 rounded-lg shadow-sm">
          ✅ Your message has been sent!
        </div>
      )}

      <form
        action="https://formsubmit.co/taggart.smith@gmail.com"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        {/* Anti-spam & Redirect */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://taggart-smith.github.io/Neptune-Pool-and-Spa/contact" />

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-800 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-800 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div>
  <label htmlFor="phone" className="block text-gray-800 font-medium mb-1">Phone Number</label>
  <input
    type="tel"
    name="phone"
    id="phone"
    pattern="[\+]?[0-9\- ]{7,15}"
    placeholder="e.g. (555) 555-5555"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
</div>


        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-800 font-medium mb-1">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-inner"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
