import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

const interestOptions = ["Event Support", "Community Outreach", "Administrative Support", "Media & Photography", "Social Media", "Fundraising", "Hospitality", "Other"];
const availabilityOptions = ["Weekdays", "Weekends", "Special Events Only"];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <Check className="mb-4 h-10 w-10 text-black/60" />
        <p className="text-lg font-medium">Thank you!</p>
        <p className="text-sm text-black/70">Your application has been submitted. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-black/60">Volunteers play an important role in supporting our programs, events, and community outreach activities.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="v-first" className="text-black/60">First Name</Label><Input id="v-first" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="v-last" className="text-black/60">Last Name</Label><Input id="v-last" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="v-email" className="text-black/60">Email</Label><Input id="v-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="v-phone" className="text-black/60">Phone</Label><Input id="v-phone" type="tel" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div><Label htmlFor="v-loc" className="text-black/60">Location</Label><Input id="v-loc" className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-black/60">Areas of Interest</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {interestOptions.map((opt) => (
            <div key={opt} className="flex items-center gap-3">
              <Checkbox id={`v-i-${opt}`} className="border-black/30" />
              <Label htmlFor={`v-i-${opt}`} className="font-normal text-black/70">{opt}</Label>
            </div>
          ))}
        </div>
      </fieldset>
      <div>
        <Label htmlFor="v-avail" className="text-black/60">Availability</Label>
        <select id="v-avail" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">Select</option>
          {availabilityOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      <div><Label htmlFor="v-why" className="text-black/60">Why volunteer with us?</Label><Textarea id="v-why" rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <div><Label htmlFor="v-exp" className="text-black/60">Relevant experience or skills?</Label><Textarea id="v-exp" rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <Button type="submit" size="lg" className="mt-2 w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">Submit Application</Button>
    </form>
  );
}
