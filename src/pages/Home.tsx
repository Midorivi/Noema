import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Faith", text: "God at the center of all ministry" },
  { title: "Excellence", text: "Musical and personal growth" },
  { title: "Service", text: "Serving through music" },
  { title: "Community", text: "Growing together" },
  { title: "Love", text: "Practicing Christ\u2019s love" },
  { title: "Hope", text: "Comfort through music" },
];

export function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-start justify-center px-8 pt-20 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-white/40 animate-fade-in">
            Music Ministry
          </p>
          <h1 className="mb-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl animate-fade-up">
            NOEMA
            <br />
            <span className="text-white/40">Ensemble</span>
          </h1>
          <p className="mb-12 max-w-xl text-lg leading-relaxed text-white/50 animate-fade-up" style={{ animationDelay: "200ms" }}>
            A Christian music ministry where professionals and non-professionals
            come together to sing praises and serve the community through music.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="h-12 rounded-none border border-white bg-white px-10 text-xs font-medium tracking-widest uppercase text-black hover:bg-transparent hover:text-white transition-all duration-300">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-white/30 bg-transparent px-10 text-xs font-medium tracking-widest uppercase text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Our Mission</p>
            <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
              To glorify God by bringing together musicians and people of diverse
              backgrounds to serve communities through music, education, outreach,
              and acts of love.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-white/40">What We Do</p>
        </FadeIn>
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {[
            { title: "Music Education", text: "Workshops, masterclasses, and training programs designed to develop musical talents and build ensemble experience." },
            { title: "Community Outreach", text: "Nursing home concerts, service events, and charity performances that deliver comfort and joy through music." },
            { title: "Concert Ministry", text: "Seasonal concerts, mission tours, and community performances that share hope and love through music." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 150}>
              <div className="bg-background p-10 md:p-12">
                <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Our Values</p>
        </FadeIn>
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 100}>
              <div>
                <p className="mb-2 text-sm font-semibold">{v.title}</p>
                <p className="text-xs text-white/40">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Join Our Community</h2>
            <p className="mb-10 text-lg text-white/50">
              Whether you&apos;re a seasoned musician or just starting out,
              there&apos;s a place for you at NOEMA Ensemble.
            </p>
            <Button asChild size="lg" className="h-12 rounded-none border border-white bg-white px-10 text-xs font-medium tracking-widest uppercase text-black hover:bg-transparent hover:text-white transition-all duration-300">
              <Link to="/get-involved">
                Apply Now <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
