"use client"

import Image from 'next/image';

import { spaceMono } from './fonts';
import Link from 'next/link';

import { useMediaQuery } from '@/hooks/use-media-query';

export default function Home() {
  return (
    <main className="px-6 py-4">
      <div className="container mx-auto">
        <section className="relative">
          <div className="rounded-lg overflow-hidden">
            <Image
              width={1218}
              height={812}
              src="/hero.jpg"
              alt="Graduating student image"
              className="min-w-full"
            ></Image>
          </div>
          <div className="flex flex-col gap-3 py-4 sm:absolute sm:top-1/2 sm:left-0 sm:-translate-y-1/2 sm:text-white sm:p-9">
            <h1
              className={`${spaceMono.className} text-7xl tracking-tight leading-tight uppercase text-wrap sm:text-8xl sm:leading-snug`}
            >
              Kumusta <br /> I'm <span className="px-5 bg-[#FA5D29]/75 sm:bg-[#FA5D29]/80">Joshua</span>
            </h1>
            <p className="font-medium tracking-wide text-lg">
              This is my portfolio for finals. I code this website myself.
            </p>
            <Link
              href="https://github.com/oshudev/presentation-skills-eportfolio"
              className="font-bold tracking-wide p-6 w-fit bg-slate-900 hover:bg-slate-600 text-white transition duration-300 rounded-lg"
            >
              View Source Code
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
