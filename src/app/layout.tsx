import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "August Jones | Unique Clothing & Accessories",
  description: "Discover one-of-a-kind clothing and accessories by August Jones. Handcrafted pieces that tell a story.",
  keywords: ["clothing", "accessories", "handmade", "unique", "fashion", "August Jones"],
  authors: [{ name: "August Jones" }],
  openGraph: {
    title: "August Jones | Unique Clothing & Accessories",
    description: "Discover one-of-a-kind clothing and accessories by August Jones. Handcrafted pieces that tell a story.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "August Jones",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
