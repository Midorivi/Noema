import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center px-8 pt-14 md:px-16 lg:px-24">
      <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60">Error</p>
      <h1 className="mb-4 text-8xl font-bold tracking-tight md:text-9xl">404</h1>
      <p className="mb-10 max-w-md text-lg text-black/70">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild size="lg" className="h-12 rounded-none border border-black bg-black px-10 text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">
        <Link to="/">Back to Home</Link>
      </Button>
    </section>
  );
}
