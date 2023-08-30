import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import Providers from "../components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "abdrahimo",
    description: "abdrahimo website",
    themeColor: "#27272a",
    openGraph: {
        siteName: "ashish",
        title: "abdrahimo",
        type: "website",
        description: "abdrahimo website",
        images: "https://user-images.githubusercontent.com/68690233/211317069-9fdd4a02-78c9-4215-a397-748025e968de.png",
    },
    twitter: {
        title: "abdrahimo",
        description: "abdrahimo website",
        card: "summary_large_image",
        site: "@asheeshh_",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="">
            <body
                className={`${inter.className} bg-day dark:bg-night text-gray-900 dark:text-gray-100`}
            >
                <Providers>
                    <Nav />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
