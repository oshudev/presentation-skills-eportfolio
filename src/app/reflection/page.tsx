import { spaceMono } from '@/app/fonts';

export default function Reflection() {
  return (
    <>
      <section className="my-8 md:my-16">
        <h1
          className={`${spaceMono.className} uppercase text-7xl lg:text-[180px] text-center mb-8 md:mb-16`}
        >
          Reflection
        </h1>
      </section>
      <section className="max-w-2xl mx-auto my-6 text-justify flex flex-col gap-8">
        <p className="text-indent">
          In the subject Presentation Skills, I have really got to understand the art and
          science behind the delivery of really effective and impactful presentations. It
          has been enlightening yet so practical to see that what is so crucial in all
          forms of communication and non-verbal cues for the clear articulation of ideas
          to an audience.
        </p>

        <p className="text-indent">
          One of the most important things I learned is that the content of a presentation
          must be structured logically, with a clear beginning, middle, and end. Having a
          well-thought-out structure helps ensure that the message is coherent and that
          the audience can follow the flow of ideas. This is something I previously
          overlooked, as I often focused more on the technicalities of the information
          rather than its delivery.
        </p>

        <p className="text-indent">
          I also found out the importance of knowing the audience. The interests, needs,
          and the level of knowledge of the audience can make a huge difference between a
          presentation that resonates and one that fails to connect. This is what my peers
          have also pointed out to me from the practice sessions: humor, storytelling, and
          relating to the audience can help make the message more memorable.
        </p>

        <p className="text-indent">
          Another important observation is how body language compliments verbal
          communication. Simple gestures like eye contact and posture combine to help the
          overall effective delivery of a presentation. I can see now that a solid
          speaker, using body language quite effectively, can command attention by giving
          a presentation, even in a scenario with a not necessarily well-polished script.
        </p>

        <p className="text-indent">
          Finally, I have come to appreciate the importance of practice. Confidence does
          not come from merely reading through the material once or twice but from
          repeated rehearsals. Each presentation session helped me refine my delivery,
          adjust my pacing, and become more comfortable in front of an audience.
        </p>

        <p className="text-indent">
          Overall, this topic has not only enhanced my technical presentation skills but
          also increased my confidence in public speaking. These skills will definitely be
          very helpful for me in the academic and professional world and I look forward to
          continuing to enhance them as I am exposed to more opportunities to present.
        </p>
      </section>
    </>
  );
}
