import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const leaders = [
  "President / Founder",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Board Members",
];

export function About() {
  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">About Us</h1>
        <p className="text-lg text-muted-foreground">
          A community united by music, faith, and service
        </p>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">Who We Are</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
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
            <p className="font-medium text-foreground">
              To NOEMA Ensemble, music is not simply a performance. Music is our ministry,
              service, and calling to change the world.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">Our Story</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
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
            <p>
              Music majors and non-music majors come together, and through music, through
              performances and education, service and outreach, we seek to deliver comfort,
              courage, and new hope.
            </p>
            <p>
              As we live life, everyone faces moments when they are lonely, tired, and
              struggling. NOEMA Ensemble seeks to deliver the message, &ldquo;You are not
              alone,&rdquo; even in those moments. Through music, we want to share the
              fact that someone is praying for you, someone is cheering you on, and
              God&apos;s love is still with you.
            </p>
            <p>
              We believe that music can comfort people&apos;s hearts, heal wounds, and
              give strength to stand up again. NOEMA Ensemble seeks to become a music
              ministry community that delivers hope to the world and glorifies God through
              praise, service, and the power of community.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Leadership
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((role) => (
              <Card key={role} className="border border-border">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <Users className="mb-4 h-8 w-8 text-muted-foreground" />
                  <h3 className="mb-1 font-semibold">{role}</h3>
                  <p className="text-sm text-muted-foreground">Name TBD</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
