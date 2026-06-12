import { FadeIn } from "@/components/ui/fade-in";

const values = [
  { title: "Excellence", text: "We pursue the highest standards in music and education." },
  { title: "Compassion", text: "We seek to bring comfort, encouragement, and healing through music." },
  { title: "Community", text: "We believe meaningful relationships create stronger communities." },
  { title: "Service", text: "We use our gifts and resources to positively impact others." },
  { title: "Growth", text: "We encourage individuals to discover their potential and continue learning." },
  { title: "Hope", text: "We strive to inspire hope and resilience through every performance and program." },
];

export function Mission() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">Mission &amp; Values</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Our purpose, values,
          <br />
          <span className="text-black/60">and the community we build</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Mission</p>
            <p className="max-w-2xl text-2xl font-light leading-relaxed text-black/80 md:text-3xl">
              Our mission is to pursue musical excellence while bringing healing,
              hope, and encouragement through music, education, and service.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Purpose</p>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-black/60">
              <p>
                Through high-quality performances and educational programs, we help
                individuals discover their gifts, develop confidence, and reach their
                potential. We also seek to use the power of music to encourage those
                facing loneliness and hardship, while contributing to the well-being
                of the communities we serve.
              </p>
              <p>
                We believe that music has the unique ability to enrich lives, connect
                people, and create stronger, more compassionate communities.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Commitment</p>
            <div className="max-w-2xl space-y-6">
              <p className="text-xl font-light leading-relaxed text-black/70 md:text-2xl">
                We strive for excellence in music, not as an end in itself, but as a
                means of uplifting people, inspiring hope, and strengthening
                communities.
              </p>
              <p className="font-serif text-lg italic text-black/80">
                That is the mission of NOEMA Ensemble.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Our Values</p></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/8">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 100}>
              <div className="bg-background p-10 md:p-14">
                <p className="mb-3 text-lg font-semibold">{v.title}</p>
                <p className="text-sm leading-relaxed text-black/70">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
