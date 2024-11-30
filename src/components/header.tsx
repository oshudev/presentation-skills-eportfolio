'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import headerData from '@/data/header.json';

import { useMediaQuery } from '@/hooks/use-media-query';

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (isDesktop && isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  }, [isDesktop, isMobileNavOpen]);

  const handleClick = () => {
    setIsMobileNavOpen((curr) => !curr);
  };

  return (
    <>
      <header className="relative z-40 px-6 py-4 border-b border-gray-200/60">
        <div className="container mx-auto">
          <div className="h-18 flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center justify-center bg-slate-100 rounded-full font-extrabold text-lg size-10"
            >
              J
            </Link>
            <div className="h-full hidden lg:block">
              <nav className="h-full">
                {headerData.header.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="h-full px-4 relative font-bold text-sm tracking-widest text-slate-400 uppercase hover:text-slate-900 transition duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileNavOpen((curr) => !curr)}
                className="size-10 border-transparent relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'w-4 h-0.5 bg-slate-950 -translate-y-1 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 rotate-45',
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      'w-4 h-0.5 bg-slate-950 translate-y-1 transition duration-300',
                      isMobileNavOpen && 'translate-y-0 -rotate-45',
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-[72px] left-0 bottom-0 right-0 bg-white z-30">
          <div className="container mx-auto h-full">
            <nav className="flex flex-col items-center gap-y-4 py-8 h-full justify-center">
              {headerData.header.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-slate-900 uppercase tracking-widest font-bold text-xl h-10"
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
