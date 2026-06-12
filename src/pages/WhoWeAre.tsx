import { FadeIn } from "@/components/ui/fade-in";

const leaders = ["President / Founder", "Vice President", "Secretary", "Treasurer", "Board Members"];

export function WhoWeAre() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">About Us</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Who we are
          <br />
          <span className="text-black/60">a community united by music</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Who We Are</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-black/60">
              <p>
                NOEMA Ensemble is a nonprofit arts community dedicated to pursuing
                musical excellence while using music to connect people and strengthen
                communities.
              </p>
              <p>
                We believe that high-quality music has the power to inspire, encourage,
                and create meaningful change in people&apos;s lives. For this reason, we
                strive for excellence in performance, education, and every artistic
                endeavor we undertake.
              </p>
              <p>
                However, our purpose goes beyond presenting outstanding performances.
                We believe music can bring hope and comfort, foster meaningful
                relationships, and contribute to healthier and more connected
                communities.
              </p>
              <p>
                NOEMA Ensemble brings together music majors and non-music majors,
                students and adults, and individuals from diverse backgrounds who share
                a passion for learning, growing, and serving together. Through
                performances, music education, community service, and outreach
                programs, we seek to make a positive impact on the lives of others.
              </p>
              <p className="text-black">
                To us, music is more than a performance. It is a powerful tool for
                uplifting people, sharing hope, and building stronger communities.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Leadership</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-black/8">
          {leaders.map((role, i) => (
            <FadeIn key={role} delay={i * 100}>
              <div className="bg-background p-8">
                <p className="mb-2 text-sm font-semibold">{role}</p>
                <p className="text-xs text-black/50">Name TBD</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
