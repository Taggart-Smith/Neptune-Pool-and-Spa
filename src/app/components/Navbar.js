import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4 bg-white shadow mb-8">
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link href="/residential" className="hover:text-blue-600">Residential</Link>
        </li>
        <li>
          <Link href="/commercial" className="hover:text-blue-600">Commercial</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
        <li>
          <Link href="/payment" className="hover:text-blue-600">Payment</Link>
        </li>
      </ul>
    </nav>
  );
}