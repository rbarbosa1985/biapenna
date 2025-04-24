import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lustria } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const geistLustria = Lustria({
  weight: '400',
});

export const metadata: Metadata = {
  title: 'BiaPenna',
  description: 'BiePenna personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistLustria} antialiased`}
        style={{
          backgroundColor: '#FFF3Df',
        }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
