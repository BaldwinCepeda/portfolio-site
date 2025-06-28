import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="px-6 py-16 max-w-xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
                <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded" />
                    <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded" />
                    <textarea name="message" rows="5" placeholder="Your Message" required className="w-full border p-3 rounded" />
                    <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
}