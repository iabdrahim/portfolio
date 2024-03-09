import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import Providers from "../components/provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "abdrahimo",
  description: "abderrahim aneddam, student and web developer from Morroco",
  themeColor: "#27272a",
  keywords: [
    "abderrahim aneddam",
    "abdrahimo",
    "aneddam",
    "abdrahim developer",
    "abdrahim aneddam developer",
    "abderrahim developer",
    "iabdrahim",
    "iabdrahim portfolio",
    "abdrahim portfolio",
    "abderrahim portfolio",
  ],
  openGraph: {
    siteName: "iabderahim",
    title: "abdrahimo",
    type: "website",
    description: "abderrahim aneddam, student and web developer from Morroco",
    images:
      "https://user-images.githubusercontent.com/68690233/211317069-9fdd4a02-78c9-4215-a397-748025e968de.png",
  },
  twitter: {
    title: "abdrahimo",
    description: "abdrahimo website",
    card: "summary_large_image",
    site: "@abdrahim_",
  },
  verification: {
    google: "5EySfeUGoEZeYFK_SsE2qJD_ZcX4S9e_YmkrEtpZKZs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <Providers>
        <body
          className={`${inter.className} bg-day dark:bg-night text-gray-900 dark:text-gray-100 pt-16`}
        >
          {children}
        </body>
        <Nav />
      </Providers>
      <Script
        strategy="afterInteractive"
        src="https://analytics.umami.is/script.js"
        data-website-id="814f108c-0b94-40ae-95c8-32ed7b164e17"
      />
    </html>
  );
}
