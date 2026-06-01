import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function Programs() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-32 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/40 animate-fade-in">Programs</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Music education
          <br />
          <span className="text-white/40">&amp; community outreach</span>
        </h1>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Music Education</p></FadeIn>
        <div className="space-y-px bg-white/10">
          {[
            {
              title: "Music Workshops",
              text: "A hands-on program designed to improve musical skills, build ensemble experience, and expand understanding of Christian music.",
              details: "Instrument section practice \u00b7 Ensemble training \u00b7 Musical communication \u00b7 Performance preparation",
              status: "Upcoming in 2027",
            },
            {
              title: "Masterclasses",
              text: "An educational program where participants deeply study performance techniques, musical interpretation, and stage experience under the guidance of professional musicians.",
              details: "Summer / Winter program",
              status: "Upcoming in 2027",
            },
            {
              title: "Beginner Training",
              text: "A program where beginners with no musical experience can easily participate and learn basic music knowledge and performance skills.",
              details: "Available through Zoom",
              hasApply: true,
            },
          ].map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="flex flex-col justify-between gap-6 bg-background p-10 md:flex-row md:items-start md:p-14">
                <div className="max-w-2xl flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-4">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    {p.status && <span className="text-xs tracking-wider text-white/30 uppercase">{p.status}</span>}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-white/60">{p.text}</p>
                  <p className="text-xs text-white/30">{p.details}</p>
                </div>
                {p.hasApply && (
                  <Button asChild variant="outline" className="shrink-0 rounded-none border-white/30 text-xs tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition-all duration-300">
                    <Link to="/get-involved#applications">Apply <ArrowRight className="ml-2 h-3 w-3" /></Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Community Outreach</p></FadeIn>
        <div className="space-y-px bg-white/10">
          {[
            { title: "Nursing Home Concerts", text: "A service activity that visits nursing homes and senior facilities to deliver comfort and joy through music." },
            { title: "Community Service Events", text: "Various service projects and sharing activities to serve and support the community." },
            { title: "Charity Performances", text: "Charity performance programs to support neighbors and organizations in need." },
          ].map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="flex items-start justify-between gap-6 bg-background p-10 md:p-14">
                <div className="max-w-2xl">
                  <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
                <span className="shrink-0 text-xs tracking-wider text-white/30 uppercase">Upcoming</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
