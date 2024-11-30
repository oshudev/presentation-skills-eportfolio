import { spaceMono } from '@/app/fonts';

import { BlockQuote } from '@/components/block-quote';
import { Gallery, GalleryGroup, GalleryImage, GalleryTitle } from '@/components/gallery';

import outputData from '@/data/output.json';

export default function Midterms() {
  return (
    <>
      <section className="my-8 md:my-16">
        <h1
          className={`${spaceMono.className} uppercase text-7xl lg:text-[180px] text-center mb-8 md:mb-16`}
        >
          Midterms
        </h1>
        <BlockQuote
          quote="Any sufficiently advanced technology is equivalent to magic."
          quotee="Sir Arthur C. Clarke"
          className="max-w-3xl mx-auto"
        />
      </section>
      <section className="my-8">
        <h2 className="mb-4">Performance Tasks</h2>
        <Gallery>
          {outputData.midterm.performanceTasks.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
        </Gallery>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Quizzes</h2>
        <Gallery>
          {outputData.midterm.quizzes.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
        </Gallery>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Project</h2>
        <Gallery>
          <GalleryGroup>
            <GalleryImage
              width={375}
              height={812}
              src={outputData.midterm.project.image}
              alt={outputData.midterm.project.title}
            />
            <GalleryTitle>{outputData.midterm.project.title}</GalleryTitle>
          </GalleryGroup>
        </Gallery>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Project</h2>
        <Gallery>
          <GalleryGroup>
            <GalleryImage
              width={375}
              height={812}
              src={outputData.midterm.exam.image}
              alt={outputData.midterm.exam.title}
            />
            <GalleryTitle>{outputData.midterm.exam.title}</GalleryTitle>
          </GalleryGroup>
        </Gallery>
      </section>
    </>
  );
}
