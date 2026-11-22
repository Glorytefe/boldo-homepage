import type { Metadata, Viewport } from 'next';
import { Manrope, Open_Sans } from 'next/font/google';
import './globals.scss';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-manrope',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

const description =
  'Save time by building fast with Boldo Template — an enterprise template to ramp up your company website.';

export const metadata: Metadata = {
  title: 'Boldo — Save time by building fast',
  description,
  openGraph: {
    title: 'Boldo — Save time by building fast',
    description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a2640',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
