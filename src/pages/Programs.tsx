import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, BookOpen, Headphones, ArrowRight, Heart, Users, Gift } from "lucide-react";

const educationPrograms = [
  {
    icon: Music,
    title: "Music Workshops",
    description: "A hands-on program designed to improve musical skills, build ensemble experience, and expand understanding of Christian music.",
    details: ["Instrument section practice", "Ensemble training", "Musical communication", "Performance preparation"],
    status: "Upcoming in 2027",
  },
  {
    icon: BookOpen,
    title: "Masterclasses",
    description: "An educational program where participants deeply study performance techniques, musical interpretation, and stage experience under the guidance of professional musicians.",
    details: ["Summer / Winter program"],
    status: "Upcoming in 2027",
  },
  {
    icon: Headphones,
    title: "Beginner Training",
    description: "A program where beginners with no musical experience can easily participate and learn basic music knowledge and performance skills.",
    details: ["Available through Zoom"],
    hasApply: true,
  },
];

const outreachPrograms = [
  {
    icon: Heart,
    title: "Nursing Home Concerts",
    description: "A service activity that visits nursing homes and senior facilities to deliver comfort and joy through music.",
  },
  {
    icon: Users,
    title: "Community Service Events",
    description: "Various service projects and sharing activities to serve and support the community.",
  },
  {
    icon: Gift,
    title: "Charity Performances",
    description: "Charity performance programs to support neighbors and organizations in need.",
  },
];

export function Programs() {
  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Programs</h1>
        <p className="text-lg text-muted-foreground">
          Music education and community outreach programs
        </p>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
            Music Education
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {educationPrograms.map((program) => (
              <Card key={program.title} className="flex flex-col border border-border">
                <CardContent className="flex flex-1 flex-col p-8">
                  <program.icon className="mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-xl font-semibold">{program.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{program.description}</p>
                  {program.status && (
                    <Badge variant="secondary" className="mb-4 w-fit">{program.status}</Badge>
                  )}
                  <ul className="mb-6 space-y-1">
                    {program.details.map((detail) => (
                      <li key={detail} className="text-sm text-muted-foreground">
                        &bull; {detail}
                      </li>
                    ))}
                  </ul>
                  {program.hasApply && (
                    <Button asChild variant="outline" className="mt-auto">
                      <Link to="/get-involved#applications">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
            Community Outreach
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {outreachPrograms.map((program) => (
              <Card key={program.title} className="border border-border">
                <CardContent className="p-8">
                  <program.icon className="mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-xl font-semibold">{program.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{program.description}</p>
                  <Badge variant="secondary">Upcoming</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
