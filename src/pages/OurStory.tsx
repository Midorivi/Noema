import { FadeIn } from "@/components/ui/fade-in";

export function OurStory() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">About Us</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Our story
          <br />
          <span className="text-black/60">music that transforms lives</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Our Story</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-black/60">
              <p>
                NOEMA Ensemble was founded on the belief that music has the power to
                transform lives and bring people together.
              </p>
              <p>
                We believe that great music can do more than inspire admiration&mdash;it
                can give people courage, build confidence, and help them discover new
                possibilities. The experience of learning and performing together
                encourages personal growth, strengthens relationships, and connects
                people across generations and backgrounds.
              </p>
              <p>
                NOEMA Ensemble was created by individuals who share a love for music
                and a desire to use their talents to serve others. Beyond the stage, we
                are committed to education, service, and community engagement,
                expanding the positive impact that music can have in the world.
              </p>
              <p>
                Today, NOEMA Ensemble continues to grow as a community that shares
                healing, hope, and encouragement through music. We are committed to
                helping the next generation discover their potential, fostering
                meaningful connections, and creating opportunities for people to grow
                together.
              </p>
              <p className="text-black">
                As we look to the future, we aspire to continue bringing comfort,
                inspiration, and hope to more people through music while building a
                community where individuals can learn, serve, and thrive together.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
