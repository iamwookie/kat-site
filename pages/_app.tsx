import "@/styles/globals.css";
import "animate.css";
import "tippy.js/dist/tippy.css";

import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import Footer from "@components/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>

            <Footer />
        </>
    );
}
