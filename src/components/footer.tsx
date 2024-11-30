'use client';

import Link from 'next/link';
import footerData from '@/data/header.json';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-5 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 sm:items-start">
          <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {footerData.header.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm text-center text-gray-200 uppercase tracking-wide hover:text-white transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 px-4 text-center sm:mt-0 sm:px-0 text-sm text-gray-400">
            © {new Date().getFullYear()} Joshua Ythiel Arriesgado. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
