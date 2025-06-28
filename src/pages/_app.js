import '@/styles/globals.css';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Add whichever weights you need
  variable: '--font-ebgaramond'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${ebGaramond.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}