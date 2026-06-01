import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink } from "lucide-react";

const events = [
  { title: "East Coast Korean Camp Meeting Concert", status: "Registration Open" },
  { title: "Community Outreach Concert", status: "Registration Open", hasRegister: true },
  { title: "Christmas Concert", date: "December 20, 2026", location: "New York", description: "Seasonal concert commemorating the Christmas season", hasRegister: true },
  { title: "Mission Concert Tours", description: "Mission concert programs that deliver a message of hope and love through music", hasRegister: true },
];

export function Events() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-32 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/40 animate-fade-in">Events</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Performances, concerts,
          <br />
          <span className="text-white/40">&amp; community gatherings</span>
        </h1>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-white/40">Upcoming</p></FadeIn>
        <div className="space-y-px bg-white/10">
          {events.map((event, i) => (
            <FadeIn key={event.title} delay={i * 150}>
              <div className="flex flex-col justify-between gap-6 bg-background p-10 md:flex-row md:items-center md:p-14">
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-baseline gap-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-xs tracking-wider text-white/30 uppercase">{event.status ?? "Upcoming"}</span>
                  </div>
                  {event.date && <p className="text-sm text-white/40">{event.date} &mdash; {event.location}</p>}
                  {event.description && <p className="mt-2 text-sm text-white/50">{event.description}</p>}
                </div>
                {event.hasRegister && (
                  <Button variant="outline" className="shrink-0 rounded-none border-white/30 text-xs tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition-all duration-300">
                    Register
                  </Button>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">Photos &amp; Videos</p>
            <div>
              <p className="mb-8 text-base text-white/60">Follow our journey and watch our performances.</p>
              <div className="mb-8 aspect-video w-full border border-white/10">
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
                className="inline-flex items-center gap-3 text-sm text-white/60 underline underline-offset-4 transition-colors duration-300 hover:text-white"
              >
                Visit our YouTube channel <ExternalLink className="h-3 w-3" />
              </a>
              <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex aspect-[4/3] items-center justify-center bg-background">
                    <span className="text-xs text-white/20">Coming soon</span>
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
