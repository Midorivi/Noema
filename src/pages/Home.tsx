import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Heart, Calendar, Cross, Star, Users, Sun, Award, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Music,
    title: "Music Education",
    description: "Workshops, masterclasses, and training programs designed to develop musical talents and build ensemble experience.",
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Nursing home concerts, service events, and charity performances that deliver comfort and joy through music.",
  },
  {
    icon: Calendar,
    title: "Concert Ministry",
    description: "Seasonal concerts, mission tours, and community performances that share hope and love through music.",
  },
];

const values = [
  { icon: Cross, label: "Faith", description: "God at the center of all ministry" },
  { icon: Star, label: "Excellence", description: "Musical and personal growth" },
  { icon: Award, label: "Service", description: "Serving through music" },
  { icon: Users, label: "Community", description: "Growing together" },
  { icon: Heart, label: "Love", description: "Practicing Christ's love" },
  { icon: Sun, label: "Hope", description: "Comfort through music" },
];

export function Home() {
  return (
    <>
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-28 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          NOEMA Ensemble
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A Christian music ministry where professionals and non-professionals
          come together to sing praises and serve the community through music.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link to="/get-involved">Get Involved</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          To glorify God by bringing together musicians and people of diverse
          backgrounds to serve communities through music, education, outreach,
          and acts of love.
        </p>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What We Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="border border-border">
                <CardContent className="p-8">
                  <program.icon className="mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-xl font-semibold">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Values
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {values.map((value) => (
              <div key={value.label} className="flex flex-col items-center text-center">
                <value.icon className="mb-3 h-6 w-6" />
                <h3 className="mb-1 font-semibold">{value.label}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Join Our Community
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Whether you&apos;re a seasoned musician or just starting out, there&apos;s a
          place for you at NOEMA Ensemble.
        </p>
        <Button asChild size="lg" className="h-12 px-8 text-base">
          <Link to="/get-involved">
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </>
  );
}
