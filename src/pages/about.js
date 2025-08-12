import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSidebar from "@/components/AboutSidebar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-12 gap-8">
                <div className="md:w-1/3 w-full flex-shrink-0">
                    <AboutSidebar />
                </div>
                <main className="md:w-2/3 w-full px-2 py-4 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed mb-8">
                        I collaborate with brands, entrepreneurs, restaurants, jewelry designers, pet owners, and individuals seeking authentic, well-crafted images. From a personal portrait to a visual campaign for your product, my goal is the same: to make what you create look and feel powerful and true.
                    </p>
                    <h2 className="text-4xl font-bold mb-4">What makes my photography unique?</h2>
                    <p className="text-lg leading-relaxed">
                        I don’t shoot routinely, I shoot with intention. Each session is a creative process tailored to the subject: a face, a space, a plate of food, or a piece of jewelry. In portraits, I look for expression, not posing. In pets, their true personality. In architecture, the emotion of the space. And in products, a powerful visual aesthetic that sells without shouting.
                        <br /><br />
                        I use what’s necessary—light, technique, intuition—to achieve clean images with character and presence. My style isn’t overloaded or artificial: it’s direct, clear, and with identity. If you’re looking for photos that connect, whether for yourself, your brand, or your client, I’m here for you.
                    </p>
                </main>
            </div>
            <Footer />
        </>
    );
}