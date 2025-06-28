import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed">
                    Hi, I am Jose Antonio Carrion Moscoso , a passionate photographer based in NYC.
                    I specialize in capturing authentic moments through natural light and storytelling.
                    Whether it is a wedding, portrait session, or a lifestyle shoot, I aim to create timeless memories.
                </p>
            </main>
            <Footer />
        </>
    );
}