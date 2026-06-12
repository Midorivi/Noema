import { FadeIn } from "@/components/ui/fade-in";
import { useLanguage } from "@/lib/i18n";

export function Mission() {
  const { t, dict } = useLanguage();

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">{t("mission.hero.label")}</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          {t("mission.hero.title1")}
          <br />
          <span className="text-black/60">{t("mission.hero.title2")}</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("mission.statement.label")}</p>
            <p className="max-w-2xl text-2xl font-light leading-relaxed text-black/80 md:text-3xl">
              {t("mission.statement.text")}
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("mission.purpose.label")}</p>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-black/60">
              <p>{t("mission.purpose.p1")}</p>
              <p>{t("mission.purpose.p2")}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("mission.commitment.label")}</p>
            <div className="max-w-2xl space-y-6">
              <p className="text-xl font-light leading-relaxed text-black/70 md:text-2xl">
                {t("mission.commitment.text")}
              </p>
              <p className="font-serif text-lg italic text-black/80">
                {t("mission.commitment.tagline")}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn><p className="mb-20 text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("mission.values.label")}</p></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/8">
          {dict.mission.values.items.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-background p-10 md:p-14">
                <p className="mb-3 text-lg font-semibold">{v.title}</p>
                <p className="text-sm leading-relaxed text-black/70">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
