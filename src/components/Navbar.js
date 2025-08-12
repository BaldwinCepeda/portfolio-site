import Link from 'next/link';

export default function Navbar({ transparent }) {
    return (
        <nav className={`w-full top-0 z-50 px-8 py-4 ${transparent ? 'bg-transparent shadow-none' : 'bg-white shadow'} fixed`}>
            <ul className="flex justify-left space-x-8 font-semibold text-gray-800 font-garamond text-lg">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}