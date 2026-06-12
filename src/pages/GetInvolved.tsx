import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { StudentForm } from "@/components/sections/StudentForm";
import { MusicianForm } from "@/components/sections/MusicianForm";
import { VolunteerForm } from "@/components/sections/VolunteerForm";
import { useLanguage } from "@/lib/i18n";

const oneTimeAmounts = [25, 50, 100];
const monthlyTierAmounts = [25, 50, 100];

export function GetInvolved() {
  const { t, dict } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [selectedTier, setSelectedTier] = useState(1);
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">{t("getInvolved.hero.label")}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          {t("getInvolved.hero.title1")}
          <br />
          <span className="text-black/60">{t("getInvolved.hero.title2")}</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("getInvolved.donate.label")}</p>
            <div className="max-w-xl">
              <p className="mb-10 text-base text-black/60">
                {t("getInvolved.donate.intro")}
              </p>

              <div className="mb-8 flex gap-4">
                {(["one-time", "monthly"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={cn(
                      "rounded-none border px-6 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300",
                      donationType === type ? "border-black bg-black text-white" : "border-black/20 text-black/70 hover:border-black/50"
                    )}
                  >
                    {type === "one-time" ? t("getInvolved.donate.oneTime") : t("getInvolved.donate.monthly")}
                  </button>
                ))}
              </div>

              {donationType === "one-time" ? (
                <div className="mb-8">
                  <div className="mb-4 flex flex-wrap gap-3">
                    {oneTimeAmounts.map((amount) => (
                      <button key={amount} onClick={() => setSelectedAmount(amount)} className={cn("rounded-none border px-8 py-3 text-sm font-medium transition-all duration-300", selectedAmount === amount ? "border-black bg-black text-white" : "border-black/20 text-black/70 hover:border-black/50")}>
                        ${amount}
                      </button>
                    ))}
                    <button onClick={() => setSelectedAmount("custom")} className={cn("rounded-none border px-8 py-3 text-sm font-medium transition-all duration-300", selectedAmount === "custom" ? "border-black bg-black text-white" : "border-black/20 text-black/70 hover:border-black/50")}>
                      {t("getInvolved.donate.custom")}
                    </button>
                  </div>
                  {selectedAmount === "custom" && (
                    <div className="max-w-xs">
                      <Label htmlFor="custom-amt" className="text-black/60">{t("getInvolved.donate.amountLabel")}</Label>
                      <Input id="custom-amt" type="number" min="1" placeholder={t("getInvolved.donate.amountPlaceholder")} className="mt-2 rounded-none border-black/20 bg-transparent text-black placeholder:text-black/35 focus:border-black" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-8 grid gap-6 sm:grid-cols-3">
                  {dict.getInvolved.donate.tiers.map((tierName, i) => (
                    <button key={i} onClick={() => setSelectedTier(i)} className={cn("bg-background p-6 text-center transition-all duration-300", selectedTier === i ? "ring-1 ring-black" : "hover:bg-black/5")}>
                      <p className="mb-1 text-sm font-semibold">{tierName}</p>
                      <p className="text-xl font-bold">${monthlyTierAmounts[i]}<span className="text-xs font-normal text-black/60">{t("getInvolved.donate.perMonth")}</span></p>
                    </button>
                  ))}
                </div>
              )}

              <div className="mb-8">
                <Label htmlFor="d-cat" className="text-black/60">{t("getInvolved.donate.category")}</Label>
                <select id="d-cat" className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
                  {dict.getInvolved.donate.categories.map((c, i) => <option key={i} value={i} className="bg-white">{c}</option>)}
                </select>
              </div>

              <Button disabled size="lg" className="w-full rounded-none border border-black/20 bg-transparent text-xs font-medium tracking-widest uppercase text-black/50">
                {t("getInvolved.donate.button")}
              </Button>
              <p className="mt-4 text-xs text-black/35">
                {t("getInvolved.donate.taxNote")}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="applications" className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">{t("getInvolved.applications.label")}</p>
            <div className="max-w-xl">
              <Tabs defaultValue="student">
                <TabsList className="mb-10 grid w-full grid-cols-3 bg-black/5">
                  <TabsTrigger value="student" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white text-xs tracking-widest uppercase">{t("getInvolved.applications.student")}</TabsTrigger>
                  <TabsTrigger value="musician" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white text-xs tracking-widest uppercase">{t("getInvolved.applications.musician")}</TabsTrigger>
                  <TabsTrigger value="volunteer" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white text-xs tracking-widest uppercase">{t("getInvolved.applications.volunteer")}</TabsTrigger>
                </TabsList>
                <TabsContent value="student"><StudentForm /></TabsContent>
                <TabsContent value="musician"><MusicianForm /></TabsContent>
                <TabsContent value="volunteer"><VolunteerForm /></TabsContent>
              </Tabs>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
