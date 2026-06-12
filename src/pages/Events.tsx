import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, ExternalLink } from "lucide-react";

const events = [
  { title: "East Coast Korean Camp Meeting Concert", status: "Registration Open" },
  { title: "Community Outreach Concert", status: "Registration Open", hasRegister: true },
  { title: "Holiday Concert", date: "December 20, 2026", location: "New York", description: "Seasonal concert celebrating the holiday season", hasRegister: true },
  { title: "Concert Tours", description: "Touring concert programs that deliver a message of hope and encouragement through music", hasRegister: true },
];

const educationPrograms = [
  {
    title: "Music Workshops",
    text: "A hands-on program designed to improve musical skills, build ensemble experience, and deepen musical understanding.",
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
];

const outreachPrograms = [
  { title: "Nursing Home Concerts", text: "A service activity that visits nursing homes and senior facilities to deliver comfort and joy through music." },
  { title: "Community Service Events", text: "Various service projects and sharing activities to serve and support the community." },
  { title: "Charity Performances", text: "Charity performance programs to support neighbors and organizations in need." },
];

export function Events() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">Events &amp; Programs</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Performances, education,
          <br />
          <span className="text-black/60">&amp; community outreach</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Upcoming Events</p></FadeIn>
        <div className="space-y-[1px] bg-black/8">
          {events.map((event, i) => (
            <FadeIn key={event.title} delay={i * 150}>
              <div className="flex flex-col justify-between gap-6 bg-background p-10 md:flex-row md:items-center md:p-14">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-baseline gap-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-xs tracking-wider text-black/50 uppercase">{event.status ?? "Upcoming"}</span>
                  </div>
                  {event.date && <p className="text-sm text-black/60">{event.date} &mdash; {event.location}</p>}
                  {event.description && <p className="mt-2 text-sm text-black/70">{event.description}</p>}
                </div>
                {event.hasRegister && (
                  <Button variant="outline" className="shrink-0 rounded-none border-black/30 text-xs tracking-widest uppercase hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                    Register
                  </Button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Music Education</p></FadeIn>
        <div className="space-y-[1px] bg-black/8">
          {educationPrograms.map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="flex flex-col justify-between gap-6 bg-background p-10 md:flex-row md:items-start md:p-14">
                <div className="max-w-2xl flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-4">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    {p.status && <span className="text-xs tracking-wider text-black/50 uppercase">{p.status}</span>}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-black/60">{p.text}</p>
                  <p className="text-xs text-black/50">{p.details}</p>
                </div>
                {p.hasApply && (
                  <Button asChild variant="outline" className="shrink-0 rounded-none border-black/30 text-xs tracking-widest uppercase hover:border-black hover:bg-black hover:text-white transition-all duration-300">
                    <Link to="/get-involved#applications">Apply <ArrowRight className="ml-2 h-3 w-3" /></Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Community Outreach</p></FadeIn>
        <div className="space-y-[1px] bg-black/8">
          {outreachPrograms.map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="flex items-start justify-between gap-6 bg-background p-10 md:p-14">
                <div className="max-w-2xl">
                  <h3 className="mb-3 text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-black/60">{p.text}</p>
                </div>
                <span className="shrink-0 text-xs tracking-wider text-black/50 uppercase">Upcoming</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Photos &amp; Videos</p>
            <div>
              <p className="mb-8 text-base text-black/60">Follow our journey and watch our performances.</p>
              <div className="mb-8 aspect-video w-full border border-black/15">
                <iframe
                  src="https://www.youtube.com/embed?listType=user_uploads&list=Noema.ensemble"
                  title="NOEMA Ensemble YouTube"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.youtube.com/@Noema.ensemble"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-black/60 underline underline-offset-4 transition-colors duration-300 hover:text-black"
              >
                Visit our YouTube channel <ExternalLink className="h-3 w-3" />
              </a>
              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex aspect-[4/3] items-center justify-center bg-background">
                    <span className="text-xs text-black/35">Coming soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
