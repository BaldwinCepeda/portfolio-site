import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-16 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
        <p className="text-gray-600 mb-8">A collection of my favorite shots.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="/photos/photo1.jpg" alt="Photo 1" className="rounded shadow-md" />
          <img src="/photos/photo2.jpg" alt="Photo 2" className="rounded shadow-md" />
          <img src="/photos/photo3.jpg" alt="Photo 3" className="rounded shadow-md" />
        </div>
      </main>
      <Footer />
    </>
  );
}