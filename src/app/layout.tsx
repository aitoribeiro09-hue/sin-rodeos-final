import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: "SIN RODEOS | Editorial",
    description: "Observaciones sobre dinero, acción y salir del bucle.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen antialiased bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
