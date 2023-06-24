import './globals.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
import Footer from '@components/Footer';
import Analytics from '@components/Analytics';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'KAT',
    description: '✨ A minimalist Discord bot that plays music and does other cool things.',
    authors: [{ name: 'Bilal' }],
    themeColor: '#FFFFFF',
    openGraph: {
        type: 'website',
        url: 'https://kat.bil.al',
        title: 'KAT',
        description: '✨ A minimalist Discord bot that plays music and does other cool things.',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} bg-darkslate text-white`}>
                <main className="grid min-h-screen place-items-center">
                    <div className="relative p-5 md:p-0 text-center animate__animated animate__fadeIn">{children}</div>
                </main>

                <Footer />
            </body>

            <Analytics />
        </html>
    );
}
