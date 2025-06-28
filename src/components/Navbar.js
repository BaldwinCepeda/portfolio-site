import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 sticky top-0 z-50 ">
            <ul className="flex justify-left space-x-8 font-semibold text-gray-700 font-
            garamond">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}