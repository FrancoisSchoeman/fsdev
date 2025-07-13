import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Playfair_Display, Geist_Mono, Oxanium } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/nav';
import Footer from '@/components/footer';
import { Toaster } from 'sonner';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const oxanium = Oxanium({
  variable: '--font-oxanium',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// TODO: Add more metadata properties like Open Graph, Twitter Card, etc.
export const metadata: Metadata = {
  title: 'Francois Schoeman',
  description:
    'Hello, there - fellow internet traveler! I am Francois Schoeman, a software engineer based in Stilbaai, South Africa.',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION!,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-sidebar-primary">
      <body
        className={`${oxanium.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased relative bg-gradient-to-br from-background via-muted to-background bg-no-repeat rounded-xl m-1 min-h-screen`}
      >
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 md:px-0 pt-8">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
      <GoogleAnalytics gaId={process.env.GA4_MEASUREMENT_ID!} />
    </html>
  );
}
