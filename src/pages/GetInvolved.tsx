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

const oneTimeAmounts = [25, 50, 100];
const monthlyTiers = [
  { name: "Supporter", amount: 25 },
  { name: "Partner", amount: 50 },
  { name: "Patron", amount: 100 },
];
const donationCategories = ["Music Education", "Community Outreach", "Concert Ministry", "Operational Support", "General (to all)", "Custom (specific)"];

export function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [selectedTier, setSelectedTier] = useState("Partner");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-32 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-white/40 animate-fade-in">Get Involved</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          Support our mission
          <br />
          <span className="text-white/40">through giving &amp; service</span>
        </h1>
      </section>

      <section className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">Donate</p>
            <div className="max-w-xl">
              <p className="mb-10 text-base text-white/60">
                Your generosity helps us share hope, encouragement, and the love of
                Christ through music, education, and community outreach.
              </p>

              <div className="mb-8 flex gap-4">
                {(["one-time", "monthly"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={cn(
                      "rounded-none border px-6 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300",
                      donationType === type ? "border-white bg-white text-black" : "border-white/20 text-white/50 hover:border-white/50"
                    )}
                  >
                    {type === "one-time" ? "One-Time" : "Monthly"}
                  </button>
                ))}
              </div>

              {donationType === "one-time" ? (
                <div className="mb-8">
                  <div className="mb-4 flex flex-wrap gap-3">
                    {oneTimeAmounts.map((amount) => (
                      <button key={amount} onClick={() => setSelectedAmount(amount)} className={cn("rounded-none border px-8 py-3 text-sm font-medium transition-all duration-300", selectedAmount === amount ? "border-white bg-white text-black" : "border-white/20 text-white/50 hover:border-white/50")}>
                        ${amount}
                      </button>
                    ))}
                    <button onClick={() => setSelectedAmount("custom")} className={cn("rounded-none border px-8 py-3 text-sm font-medium transition-all duration-300", selectedAmount === "custom" ? "border-white bg-white text-black" : "border-white/20 text-white/50 hover:border-white/50")}>
                      Custom
                    </button>
                  </div>
                  {selectedAmount === "custom" && (
                    <div className="max-w-xs">
                      <Label htmlFor="custom-amt" className="text-white/60">Amount ($)</Label>
                      <Input id="custom-amt" type="number" min="1" placeholder="Enter amount" className="mt-2 rounded-none border-white/20 bg-transparent text-white placeholder:text-white/20 focus:border-white" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-8 grid gap-px bg-white/10 sm:grid-cols-3">
                  {monthlyTiers.map((tier) => (
                    <button key={tier.name} onClick={() => setSelectedTier(tier.name)} className={cn("bg-background p-6 text-center transition-all duration-300", selectedTier === tier.name ? "ring-1 ring-white" : "hover:bg-white/5")}>
                      <p className="mb-1 text-sm font-semibold">{tier.name}</p>
                      <p className="text-xl font-bold">${tier.amount}<span className="text-xs font-normal text-white/40">/mo</span></p>
                    </button>
                  ))}
                </div>
              )}

              <div className="mb-8">
                <Label htmlFor="d-cat" className="text-white/60">Category</Label>
                <select id="d-cat" className="mt-2 flex h-10 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-white">
                  {donationCategories.map((c) => <option key={c} value={c} className="bg-black">{c}</option>)}
                </select>
              </div>

              <Button disabled size="lg" className="w-full rounded-none border border-white/20 bg-transparent text-xs font-medium tracking-widest uppercase text-white/30">
                Donate &mdash; Coming Soon
              </Button>
              <p className="mt-4 text-xs text-white/20">
                Donations are tax-deductible to the extent allowed by law. (Pending 501(c)(3) approval)
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="applications" className="border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/40">Applications</p>
            <div className="max-w-xl">
              <Tabs defaultValue="student">
                <TabsList className="mb-10 grid w-full grid-cols-3 bg-white/5">
                  <TabsTrigger value="student" className="rounded-none data-[state=active]:bg-white data-[state=active]:text-black text-xs tracking-widest uppercase">Student</TabsTrigger>
                  <TabsTrigger value="musician" className="rounded-none data-[state=active]:bg-white data-[state=active]:text-black text-xs tracking-widest uppercase">Musician</TabsTrigger>
                  <TabsTrigger value="volunteer" className="rounded-none data-[state=active]:bg-white data-[state=active]:text-black text-xs tracking-widest uppercase">Volunteer</TabsTrigger>
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
