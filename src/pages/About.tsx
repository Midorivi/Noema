import { FadeIn } from "@/components/ui/fade-in";

const leaders = ["President / Founder", "Vice President", "Secretary", "Treasurer", "Board Members"];

export function About() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-32 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/40 animate-fade-in">About Us</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          A community united
          <br />
          <span className="text-white/40">by music, faith, and service</span>
        </h1>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">Who We Are</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-white/60">
              <p>
                NOEMA Ensemble is a music ministry organization operated for religious and
                educational purposes. We are a community where music majors and non-music
                majors come together to praise God, serve neighbors, and deliver a positive
                influence to society through music.
              </p>
              <p>
                NOEMA Ensemble was founded on the belief that music is a precious gift given
                by God and a powerful tool that connects people with people and heals hearts.
                Through education, performances, service, and various community activities,
                we help individuals develop their musical talents, grow in faith, and share
                their received gifts with neighbors.
              </p>
              <p>
                Through community performances, music education programs, charitable
                activities, and various outreach ministries, we seek to deliver hope and
                love and achieve unity beyond generations and cultures. Our goal is not
                simply to perform music, but to deliver vitality and comfort to
                people&apos;s lives through music, allow them to experience healing and
                restoration, and glorify God by practicing service.
              </p>
              <p className="text-white">
                To NOEMA Ensemble, music is not simply a performance. Music is our ministry,
                service, and calling to change the world.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">Our Story</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-white/60">
              <p>
                Noema Ensemble was founded to unite musicians of all backgrounds in using
                music as a tool for service, community engagement, and Christian ministry.
              </p>
              <p>
                NOEMA Ensemble began with the vision of reinterpreting the deep faith value
                of hymns in a modern and popular musical language and sharing it with more
                people. We believe that music can go beyond simple artistic activity and
                become a tool that connects people, builds community, and serves as a tool
                of service and ministry.
              </p>
              <p className="font-serif text-xl italic text-white/80">
                &ldquo;You are not alone.&rdquo;
              </p>
              <p>
                As we live life, everyone faces moments when they are lonely, tired, and
                struggling. NOEMA Ensemble seeks to deliver that message even in those
                moments. Through music, we want to share the fact that someone is praying
                for you, someone is cheering you on, and God&apos;s love is still with you.
              </p>
              <p>
                We believe that music can comfort people&apos;s hearts, heal wounds, and
                give strength to stand up again.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Leadership</p>
        </FadeIn>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {leaders.map((role, i) => (
            <FadeIn key={role} delay={i * 100}>
              <div className="bg-background p-8">
                <p className="mb-2 text-sm font-semibold">{role}</p>
                <p className="text-xs text-white/30">Name TBD</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
