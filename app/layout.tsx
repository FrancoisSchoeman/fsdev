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

const siteUrl = 'https://www.fsdev.co.za';
const siteName = 'Francois Schoeman';
const siteDescription =
  'Hello, there - fellow internet traveler! I am Francois Schoeman, a software engineer based in Stilbaai, South Africa.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Francois Schoeman',
    'Software Engineer',
    'Full Stack Developer',
    'Web Development',
    'Next.js',
    'React',
    'TypeScript',
    'Stilbaai',
    'South Africa',
  ],
  authors: [{ name: 'Francois Schoeman' }],
  creator: 'Francois Schoeman',
  publisher: 'Francois Schoeman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: '/og?title=Francois Schoeman - Software Engineer&description=Software engineer based in Stilbaai, South Africa',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
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
