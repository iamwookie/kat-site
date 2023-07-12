import './globals.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
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
                {children}
            </body>

            <Analytics />
        </html>
    );
}
