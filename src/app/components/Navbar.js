import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar w-full flex justify-center py-4 shadow mb-8">
      <div className="flex items-center justify-between w-full max-w-6xl px-4">
        <Link href="/" className="link text-2xl font-bold text-slate-50 ">
          Neptune Pool & Spa
        </Link>
      </div>
      <ul className="flex gap-8 text-lg font-medium text-slate-50">
        <li>
          <Link href="/" className="link">Home</Link>
        </li>
        <li>
          <Link href="/pricing" className="link">Pricing</Link>
        </li>
        <li>
          <Link href="/contact" className="link">Contact</Link>
        </li>
        <li>
          <Link href="/payment" className="link">Payment</Link>
        </li>
      </ul>
    </nav>
  );
}