import Footer from '@components/Footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="grid min-h-screen place-items-center">
                <div className="relative p-5 md:p-0 text-center animate__animated animate__fadeIn">{children}</div>
            </main>

            <Footer className='lg:fixed mt-8' />
        </>
    );
}
