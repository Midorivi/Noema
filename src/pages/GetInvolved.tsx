import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
const donationCategories = [
  "Music Education", "Community Outreach", "Concert Ministry",
  "Operational Support", "General (to all)", "Custom (specific)",
];

export function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [selectedTier, setSelectedTier] = useState("Partner");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Get Involved</h1>
        <p className="text-lg text-muted-foreground">
          Support our mission through giving, performing, or volunteering
        </p>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            Support Our Mission
          </h2>
          <p className="mb-10 text-muted-foreground">
            Your generosity helps us share hope, encouragement, and the love of
            Christ through music, education, and community outreach.
          </p>

          <div className="mb-8 flex gap-4">
            <button
              onClick={() => setDonationType("one-time")}
              className={cn(
                "rounded-md border px-6 py-2 text-sm font-medium transition-colors",
                donationType === "one-time"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-secondary"
              )}
            >
              One-Time
            </button>
            <button
              onClick={() => setDonationType("monthly")}
              className={cn(
                "rounded-md border px-6 py-2 text-sm font-medium transition-colors",
                donationType === "monthly"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:bg-secondary"
              )}
            >
              Monthly
            </button>
          </div>

          {donationType === "one-time" ? (
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap gap-3">
                {oneTimeAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={cn(
                      "rounded-md border px-8 py-3 text-sm font-medium transition-colors",
                      selectedAmount === amount
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:bg-secondary"
                    )}
                  >
                    ${amount}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedAmount("custom")}
                  className={cn(
                    "rounded-md border px-8 py-3 text-sm font-medium transition-colors",
                    selectedAmount === "custom"
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:bg-secondary"
                  )}
                >
                  Custom
                </button>
              </div>
              {selectedAmount === "custom" && (
                <div className="max-w-xs">
                  <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                  <Input id="custom-amount" type="number" min="1" placeholder="Enter amount" className="mt-1.5" />
                </div>
              )}
            </div>
          ) : (
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={cn(
                    "cursor-pointer border transition-colors",
                    selectedTier === tier.name ? "border-foreground" : "border-border"
                  )}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-1 font-semibold">{tier.name}</h3>
                    <p className="text-2xl font-bold">${tier.amount}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mb-8">
            <Label htmlFor="d-category">Donation Category</Label>
            <select id="d-category" className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {donationCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <Button disabled size="lg" className="w-full">
            Donate — Coming Soon
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Donations are tax-deductible to the extent allowed by law. (Pending 501(c)(3) approval)
          </p>
        </div>
      </section>

      <section id="applications" className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Applications
          </h2>
          <Tabs defaultValue="student">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="musician">Musician</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <StudentForm />
            </TabsContent>
            <TabsContent value="musician">
              <MusicianForm />
            </TabsContent>
            <TabsContent value="volunteer">
              <VolunteerForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
