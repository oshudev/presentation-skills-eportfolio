import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/header';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joshua Ythiel Arriesgado',
  description: 'EPortfolio for ITC C309',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
