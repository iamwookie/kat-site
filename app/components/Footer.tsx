import { twMerge } from "tailwind-merge";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={twMerge(className, 'relative w-screen bottom-4 text-center animate__animated animate__fadeIn')}>
            built by <a href="https://bil.al" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-50">bil.al</a>
        </footer>
    );
}
