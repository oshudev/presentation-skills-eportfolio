'use client';

import Image from 'next/image';

import { spaceMono } from './fonts';
import Link from 'next/link';

import { Gallery, GalleryGroup, GalleryImage, GalleryTitle } from '@/components/gallery';

import outputData from '@/data/output.json';

export default function Home() {
  return (
    <>
      <section className="relative my-8">
        <div className="rounded-lg overflow-hidden">
          <Image
            width={1218}
            height={812}
            src="/hero.jpg"
            alt="Graduating student image"
            className="min-w-full"
          ></Image>
        </div>
        <div className="flex flex-col gap-3 py-4 md:absolute sm:top-1/2 md:left-0 md:-translate-y-1/2 md:text-white md:p-9">
          <h1
            className={`${spaceMono.className} text-6xl !text-wrap tracking-tight leading-tight uppercase sm:!leading-snug md:text-8xl`}
          >
            Kumusta! <br /> I&apos;m&nbsp;
            <span className="inline-block px-5 bg-[#FA5D29]/75 sm:bg-[#FA5D29]/80 w-fit">
              Joshua
            </span>
          </h1>

          <p className="tracking-wide text-lg">
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
      <section className="my-32 flex flex-col max-w-2xl mx-auto gap-8">
        <h2>About Me</h2>
        <p>
          My name is Joshua Ythiel Arriesgado, and I&apos;m 20 years old. I currently live
          at Correctional Road, Mandaluyong City. I&apos;m a hardworking and dedicated
          individual who is always looking for new and innovative ways to get things done.
          I&apos;m a great team player, and I&aposm always willing to help out wherever I
          can.
        </p>
        <p>
          I&apos;m passionate about developing my career here at JRU and am always looking
          for new opportunities to grow and develop my skills. In my free time, I enjoy
          playing mobile games, learning new things, and looking for UI design trends.
          I&apos;m an outgoing and friendly person who loves to have fun and make the most
          out of every day.
        </p>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Latest Activities</h2>
        <Gallery>
          {outputData.finals.performanceTasks.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
          {outputData.finals.quizzes.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
        </Gallery>
      </section>
    </>
  );
}
