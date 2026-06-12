import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Home() {
  const { t, dict } = useLanguage();

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center px-8 pt-16">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up">
            <img
              src="/noema-logo.png"
              alt={t("home.hero.logoAlt")}
              className="h-56 w-auto sm:h-64 md:h-72 lg:h-80"
            />
          </div>
          <div className="mt-10 h-px w-16 bg-black/20 animate-fade-in" style={{ animationDelay: "300ms" }} />
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-black/60 animate-fade-up" style={{ animationDelay: "400ms" }}>
            {t("home.hero.tagline")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Button asChild size="lg" className="h-12 rounded-none border border-black bg-black px-10 text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">
              <Link to="/get-involved">{t("home.hero.getInvolved")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-black/30 bg-transparent px-10 text-xs font-medium tracking-widest uppercase text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300">
              <Link to="/who-we-are">{t("home.hero.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("home.mission.label")}</p>
            <p className="text-2xl font-light leading-relaxed text-black/80 md:text-3xl">
              {t("home.mission.text")}
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("home.whatWeDo.label")}</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 divide-x divide-black/10">
          {dict.home.whatWeDo.items.map((item, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-background p-10 md:p-12">
                <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black/70">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("home.values.label")}</p>
        </FadeIn>
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {dict.home.values.items.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div>
                <p className="mb-2 text-sm font-semibold">{v.title}</p>
                <p className="text-xs text-black/60">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">{t("home.join.title")}</h2>
            <p className="mb-10 text-lg text-black/70">
              {t("home.join.text")}
            </p>
            <Button asChild size="lg" className="h-12 rounded-none border border-black bg-black px-10 text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">
              <Link to="/get-involved">
                {t("home.join.cta")} <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
