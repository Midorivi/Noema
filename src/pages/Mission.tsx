import { FadeIn } from "@/components/ui/fade-in";

const values = [
  { title: "Faith", text: "We place God at the center of all ministry." },
  { title: "Excellence", text: "We pursue musical and personal growth." },
  { title: "Service", text: "We serve neighbors and communities through music." },
  { title: "Community", text: "We build a community that respects one another and grows together." },
  { title: "Love", text: "We practice the love of Christ." },
  { title: "Hope", text: "We deliver comfort and hope through music." },
];

const scriptures = [
  { text: "Do not fear, for I am with you.", ref: "Isaiah 41:10" },
  { text: "Come to me, all who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "I am gentle and humble in heart, and you will find rest for your souls.", ref: "Matthew 11:29" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord.", ref: "Ephesians 5:19" },
  { text: "Rejoice always. Pray continually. Give thanks in all circumstances.", ref: "1 Thessalonians 5:16\u201318" },
  { text: "Do not withhold good from those to whom it is due, when it is in your power to act.", ref: "Proverbs 3:27" },
  { text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", ref: "Matthew 7:7" },
  { text: "For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.", ref: "Matthew 7:8" },
  { text: "Love your neighbor as yourself.", ref: "Matthew 22:39" },
  { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", ref: "Colossians 3:23" },
  { text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God\u2019s grace in its various forms.", ref: "1 Peter 4:10" },
];

export function Mission() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-32 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">Mission &amp; Vision</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Our purpose, values,
          <br />
          <span className="text-black/60">and the foundation we build upon</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Mission</p>
            <p className="max-w-2xl text-2xl font-light leading-relaxed text-black/80 md:text-3xl">
              To glorify God by bringing together musicians and people of diverse
              backgrounds to serve communities through music, education, outreach,
              and acts of love.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Vision</p>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-black/70 md:text-2xl">
              To become a Christ-centered music ministry community that transforms
              people&apos;s lives and communities through faith, music, and service.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Purpose</p>
            <p className="max-w-2xl text-lg leading-relaxed text-black/60">
              NOEMA Ensemble exists to open people&apos;s hearts through music and,
              with a prayerful heart, to become strength for them to move toward a
              brighter future, to heal the wounds of people&apos;s hearts, deliver
              comfort and hope, and serve the community.
            </p>
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

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Scripture Foundation</p></FadeIn>
        <div className="grid gap-12 md:grid-cols-2">
          {scriptures.map((verse, i) => (
            <FadeIn key={verse.ref} delay={i * 80}>
              <blockquote className="border-l border-black/20 pl-8">
                <p className="mb-3 font-serif text-lg italic leading-relaxed text-black/70">
                  &ldquo;{verse.text}&rdquo;
                </p>
                <cite className="text-xs font-medium tracking-wider text-black/50 not-italic uppercase">
                  {verse.ref}
                </cite>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
