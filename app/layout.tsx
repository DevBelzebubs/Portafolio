import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import ScrollNavigation from "@/components/scroll-navigation";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JDGR // Portfolio",
  description: "Junior Software Developer specializing in high-performance backends, microservices, and modular schematics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
        <LanguageProvider>
          <Header />
          <Sidebar />
          <ScrollNavigation />
          <main className="relative pt-16 md:pl-64 h-dvh overflow-y-auto overscroll-contain">
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none -z-10"></div>
            <div className="absolute inset-0 scanline pointer-events-none mix-blend-overlay -z-10"></div>
            <div className="max-w-7xl mx-auto p-6 lg:p-12 pb-24 min-h-full">
              {children}
            </div>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
