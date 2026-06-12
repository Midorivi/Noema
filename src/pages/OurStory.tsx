import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/lib/i18n";

export function OurStory() {
  const { t, dict } = useLanguage();

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">{t("ourStory.hero.label")}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          {t("ourStory.hero.title1")}
          <br />
          <span className="text-black/60">{t("ourStory.hero.title2")}</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("ourStory.body.label")}</p>
            <div className="max-w-2xl space-y-6 text-base leading-relaxed text-black/60">
              {dict.ourStory.body.paragraphs.map((paragraph, i, arr) => (
                <p key={i} className={i === arr.length - 1 ? "text-black" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
