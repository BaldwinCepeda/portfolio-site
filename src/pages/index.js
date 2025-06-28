import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-white py-24 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-400 tracking-wide font-garamond">
          José Antonio Carrión Moscoso
        </h1>
      </div>

      <main className="flex flex-col items-center justify-center text-center min-h-screen bg-white px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Capturing Timeless Moments
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Welcome to my portfolio! I specialize in lifestyle, portrait, and event photography that tells a story and preserves emotion.
        </p>

        {/* ✅ Use Next.js Link instead of raw <a> */}
        <Link href="/portfolio">
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            View Portfolio
          </button>
        </Link>
      </main>

      <Footer />
    </>
  );
}