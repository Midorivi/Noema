import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cross, Star, Heart, Users, Sun, Award } from "lucide-react";

const values = [
  { icon: Cross, title: "Faith", description: "We place God at the center of all ministry." },
  { icon: Star, title: "Excellence", description: "We pursue musical and personal growth." },
  { icon: Award, title: "Service", description: "We serve neighbors and communities through music." },
  { icon: Users, title: "Community", description: "We build a community that respects one another and grows together." },
  { icon: Heart, title: "Love", description: "We practice the love of Christ." },
  { icon: Sun, title: "Hope", description: "We deliver comfort and hope through music." },
];

const scriptures = [
  { text: "Do not fear, for I am with you.", ref: "Isaiah 41:10" },
  { text: "Come to me, all who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "I am gentle and humble in heart, and you will find rest for your souls.", ref: "Matthew 11:29" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord.", ref: "Ephesians 5:19" },
  { text: "Rejoice always. Pray continually. Give thanks in all circumstances.", ref: "1 Thessalonians 5:16-18" },
  { text: "Do not withhold good from those to whom it is due, when it is in your power to act.", ref: "Proverbs 3:27" },
  { text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", ref: "Matthew 7:7" },
  { text: "For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.", ref: "Matthew 7:8" },
  { text: "Love your neighbor as yourself.", ref: "Matthew 22:39" },
  { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", ref: "Colossians 3:23" },
  { text: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms.", ref: "1 Peter 4:10" },
];

export function Mission() {
  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Mission &amp; Vision
        </h1>
        <p className="text-lg text-muted-foreground">
          Our purpose, values, and the foundation we build upon
        </p>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            Mission Statement
          </h2>
          <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
            To glorify God by bringing together musicians and people of diverse
            backgrounds to serve communities through music, education, outreach,
            and acts of love.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We glorify God by serving communities through music, delivering courage
            and comfort to people, and sharing hope.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To become a Christ-centered music ministry community that transforms
            people&apos;s lives and communities through faith, music, and service.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">Our Purpose</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NOEMA Ensemble exists to open people&apos;s hearts through music and,
            with a prayerful heart, to become strength for them to move toward a
            brighter future, to heal the wounds of people&apos;s hearts, deliver
            comfort and hope, and serve the community.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border border-border">
                <CardContent className="p-8 text-center">
                  <value.icon className="mx-auto mb-4 h-8 w-8" />
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Scripture Foundation
          </h2>
          <Separator className="mb-12" />
          <div className="grid gap-8 md:grid-cols-2">
            {scriptures.map((verse) => (
              <blockquote key={verse.ref} className="border-l-2 border-foreground pl-6">
                <p className="mb-2 text-foreground italic leading-relaxed">
                  &ldquo;{verse.text}&rdquo;
                </p>
                <cite className="text-sm font-medium text-muted-foreground not-italic">
                  &mdash; {verse.ref}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
