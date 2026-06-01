import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink, ImageIcon } from "lucide-react";

const events = [
  {
    title: "East Coast Korean Camp Meeting Concert",
    status: "Registration Open",
  },
  {
    title: "Community Outreach Concert",
    status: "Registration Open",
    hasRegister: true,
  },
  {
    title: "Christmas Concert",
    date: "December 20th, 2026",
    location: "New York",
    description: "Seasonal concert commemorating the Christmas season",
    hasRegister: true,
  },
  {
    title: "Mission Concert Tours",
    description: "Mission concert programs that deliver a message of hope and love through music",
    hasRegister: true,
  },
];

export function Events() {
  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Events</h1>
        <p className="text-lg text-muted-foreground">
          Upcoming performances, concerts, and community gatherings
        </p>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.title} className="border border-border">
                <CardContent className="flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <Badge variant="secondary">{event.status ?? "Upcoming"}</Badge>
                    </div>
                    {event.date && (
                      <p className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </p>
                    )}
                    {event.location && (
                      <p className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                    )}
                  </div>
                  {event.hasRegister && (
                    <Button variant="outline" className="shrink-0">
                      Register
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            Photos &amp; Videos
          </h2>
          <p className="mb-8 text-muted-foreground">
            Follow our journey and watch our performances
          </p>
          <div className="mb-8">
            <a
              href="https://www.youtube.com/@Noema.ensemble"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              Visit our YouTube channel <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg border border-border bg-background"
              >
                <div className="flex flex-col items-center text-muted-foreground">
                  <ImageIcon className="mb-2 h-8 w-8" />
                  <span className="text-xs">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
