import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const roboto = Roboto({ 
        weight: ['100', '300', '400', '500', '700', '900',],
        subsets: ["latin"],
        variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Portfolio - Template",
    description: "Portfolio template made by studio-dev.fr",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html 
            lang="fr" 
            className="bg-bg-2"
        >
            <body className={`max-w-2xl mx-auto w-full font-roboto scroll-smooth ${roboto.className} `}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
