'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <motion.div className="inline-block rounded-lg" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 350, damping: 15 }}>
            <Link href={href} target="_blank" className="rounded-lg px-2 border-2 hover:bg-white hover:text-black">
                {children}
            </Link>
        </motion.div>
    );
}
