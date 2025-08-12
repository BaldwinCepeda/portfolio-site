import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl font-light text-gray-900 tracking-wide font-garamond text-center">
            José Antonio Carrión Moscoso
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 font-light text-center max-w-2xl">
            Capturing Timeless Moments
          </p>
          <DropdownMenu />
          <Link href="/portfolio">
            <button className="mt-10 bg-gray-100 text-gray-900 px-8 py-3 rounded shadow hover:bg-gray-200 transition cursor-pointer font-semibold text-lg">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

function DropdownMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300 focus:outline-none"
      >
        Menu
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
        </ul>
      )}
    </div>
  );
}