import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ReactNode } from 'react';

type LayoutProps = {children?: ReactNode}
export default function Layout({ children } : LayoutProps) {
    return (
        <>
            <Head>
                <title>Bratti - Fullstack and Mobile Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Diogo Bratti" />
                <meta name="keywords" content="Mobile, Fullstack, Backend, Frontend, ReactJS, ReactNative, Flutter, PHP, MySQL, Oracle" />
                <meta name="description" content="I am a proactive, talented and responsible JavaScript and PHP developer focused on mobile and full stack position." />
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#2D2E32" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:site_name" content="Bratti - Fullstack and Mobile Developer" />
                <meta property="og:locale" content="en_US" />
                <title data-rh="true">Bratti - Fullstack and Mobile Developer</title>
                <meta data-rh="true" property="og:type" content="website" />
                <meta data-rh="true" property="og:title" content="Bratti - Fullstack and Mobile Developer" />
                <meta data-rh="true" property="og:image" content="/images/diogo_1.png" />
            </Head>

            {/* Header */}

            <Header />
            <main className="bg-zinc-900 box-border p-0 m-0 font-sans">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

