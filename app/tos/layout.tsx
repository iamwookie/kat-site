import { Metadata } from 'next';
import Footer from '@components/Footer';

export const metadata: Metadata = {
    title: 'KAT | Terms Of Service',
    openGraph: {
        title: 'KAT | Terms Of Service',
    },
};

export default function TOSLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="min-w-screen p-10 md:p-20">
                <div className="p-4 rounded-lg bg-darkerslate animate__animated animate__fadeIn">{children}</div>
            </main>

            <Footer />
        </>
    );
}
