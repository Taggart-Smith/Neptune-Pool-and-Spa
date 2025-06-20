"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 navbar py-4 shadow">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold text-slate-50">
          Neptune Pool & Spa
        </Link>
        
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-6 bg-white mb-1 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white mb-1 rounded transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-1 w-6 bg-white rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        <ul className="hidden sm:flex gap-8 text-lg font-medium text-slate-50">
          <li>
            <Link href="/" className="hover:text-orange-500">Home</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-orange-500">Pricing</Link>
          </li>
          <li>
            <Link href="/payment" className="hover:text-orange-500">Payment</Link>
          </li>
          <li>
            <Link href="/contact" className="bg-orange-500 rounded-xl px-6 py-2 transition-all duration-300 ease-in-out transform hover:bg-black">Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="navbar sm:hidden flex flex-col gap-4 text-lg font-medium text-slate-50 px-6 py-4">
          <li>
            <Link href="/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Pricing</Link>
          </li>
          <li className="bg-orange-500 rounded-xl p-2 text-white px-6 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black shadow-md hover:shadow-lg">
            <Link href="/contact" className="" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}