import Link from "next/link";

export default function AboutSidebar() {
    return (
        <aside className="bg-white border border-gray-200 rounded-lg shadow p-8 w-full max-w-xs flex flex-col items-center mx-auto md:mx-0 md:items-stretch">
            <div className="mb-6 text-center">
                <h1 className="text-2xl tracking-widest font-light text-gray-700 mb-1">JOSE ANTONIO</h1>
                <div className="text-xs tracking-widest text-gray-400 mb-4">PHOTOGRAPHY</div>
            </div>
            <nav className="flex flex-col items-center space-y-2 mb-8">
                <Link href="/"><span className="text-gray-700 tracking-widest text-sm hover:underline cursor-pointer">HOME</span></Link>
                <Link href="/about"><span className="text-gray-700 tracking-widest text-sm hover:underline cursor-pointer">ABOUT</span></Link>
                <Link href="/portfolio"><span className="text-gray-700 tracking-widest text-sm hover:underline cursor-pointer">PORTFOLIO</span></Link>
                <Link href="/contact"><span className="text-gray-700 tracking-widest text-sm hover:underline cursor-pointer">CONTACT</span></Link>
            </nav>
            <div className="mb-6 flex justify-center">
                <img src="/307997449_1277703752981380_5520456252049544734_n.jpg" alt="Profile" className="w-40 h-40 object-cover rounded" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center md:text-left">
                Hi! I’m Jose, a photographer specializing in lifestyle, portrait, and event photography. I love helping people and brands tell their story through authentic, timeless images.
            </p>
            <button className="w-full bg-gray-700 text-white py-2 rounded mb-6 tracking-widest text-xs hover:bg-gray-800 transition">WHAT I BRING TO THE TABLE »</button>
            <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-700"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg></a>
                <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-gray-700"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.48 2.04 2 6.52 2 12.04c0 4.42 2.87 8.17 6.84 9.5-.09-.81-.17-2.05.04-2.93.19-.82 1.23-5.23 1.23-5.23s-.31-.62-.31-1.54c0-1.44.84-2.52 1.89-2.52.89 0 1.32.67 1.32 1.47 0 .9-.57 2.25-.86 3.5-.25 1.05.53 1.91 1.57 1.91 1.89 0 3.16-2.42 3.16-5.29 0-2.19-1.48-3.83-4.18-3.83-3.04 0-4.94 2.28-4.94 4.83 0 .87.34 1.8.77 2.3.09.11.1.21.07.32-.08.35-.25 1.11-.28 1.26-.04.18-.14.22-.33.13-1.23-.57-1.99-2.36-1.99-3.8 0-3.1 2.25-5.95 6.48-5.95 3.4 0 6.04 2.42 6.04 5.65 0 3.37-2.12 6.08-5.07 6.08-1.01 0-1.97-.53-2.3-1.13l-.63 2.41c-.19.74-.56 1.67-.84 2.24.63.19 1.3.29 2 .29 5.52 0 10-4.48 10-10S17.52 2.04 12 2.04z" /></svg></a>
                <a href="#" aria-label="Email" className="text-gray-400 hover:text-gray-700"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.8a1 1 0 0 0 1.42 0L20 10.01V20H4z" /></svg></a>
            </div>
        </aside>
    );
}
