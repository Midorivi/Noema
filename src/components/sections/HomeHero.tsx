import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          NOEMA Ensemble
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl leading-relaxed">
          A Christian music ministry where professionals and non-professionals come together to sing praises and serve the community through music.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/get-involved">Get Involved</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
