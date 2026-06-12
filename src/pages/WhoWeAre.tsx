import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/lib/i18n";

export function WhoWeAre() {
  const { t, dict } = useLanguage();

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">{t("whoWeAre.hero.label")}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          {t("whoWeAre.hero.title1")}
          <br />
          <span className="text-black/60">{t("whoWeAre.hero.title2")}</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("whoWeAre.body.label")}</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-black/60">
              {dict.whoWeAre.body.paragraphs.map((paragraph, i, arr) => (
                <p key={i} className={i === arr.length - 1 ? "text-black" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <p className="mb-16 text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("whoWeAre.leadership.label")}</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-black/8">
          {dict.whoWeAre.leadership.roles.map((role, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-background p-8">
                <p className="mb-2 text-sm font-semibold">{role}</p>
                <p className="text-xs text-black/50">{t("whoWeAre.leadership.nameTbd")}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
