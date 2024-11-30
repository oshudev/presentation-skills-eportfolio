import type { Metadata } from 'next';

import './globals.css';
import { manrope } from './fonts';

import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Joshua\'s Portfolio',
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
