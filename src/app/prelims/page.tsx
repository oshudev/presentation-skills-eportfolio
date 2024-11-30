import { spaceMono } from '@/app/fonts';

import { BlockQuote } from '@/components/block-quote';
import { Gallery, GalleryGroup, GalleryImage, GalleryTitle } from '@/components/gallery';

import outputData from '@/data/output.json';

export default function Prelims() {
  return (
    <>
      <section className="my-8 md:my-16">
        <h1
          className={`${spaceMono.className} uppercase text-7xl lg:text-[180px] text-center mb-8 md:mb-16`}
        >
          Prelims
        </h1>
        <BlockQuote
          quote="Technology will never replace great teachers but technology in the hands of great teachers is transformational."
          quotee="George Couras"
          className="max-w-3xl mx-auto"
        />
      </section>
      <section className="my-8">
        <h2 className="mb-4">Assignments</h2>
        <Gallery>
          {outputData.prelim.assignments.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
        </Gallery>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Performance Tasks</h2>
        <Gallery>
          {outputData.prelim.performanceTasks.map((item, index) => (
            <GalleryGroup key={index}>
              <GalleryImage width={375} height={812} src={item.image} alt={item.title} />
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryGroup>
          ))}
        </Gallery>
      </section>
      <section className="my-8">
        <h2 className="mb-4">Student Takeaways</h2>
        <Gallery>
          {outputData.prelim.studentTakeaways.map((item, index) => (
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
          {outputData.prelim.quizzes.map((item, index) => (
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
              src={outputData.prelim.project.image}
              alt={outputData.prelim.project.title}
            />
            <GalleryTitle>{outputData.prelim.project.title}</GalleryTitle>
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
              src={outputData.prelim.exam.image}
              alt={outputData.prelim.exam.title}
            />
            <GalleryTitle>{outputData.prelim.exam.title}</GalleryTitle>
          </GalleryGroup>
        </Gallery>
      </section>
    </>
  );
}
