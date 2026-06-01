import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

const interestOptions = [
  "Event Support", "Community Outreach", "Administrative Support",
  "Media & Photography", "Social Media", "Fundraising", "Hospitality", "Other",
];
const availabilityOptions = ["Weekdays", "Weekends", "Special Events Only"];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <Check className="mb-4 h-12 w-12" />
        <p className="text-lg font-medium">Thank you!</p>
        <p className="text-muted-foreground">Your application has been submitted. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-muted-foreground">
        Thank you for your willingness to serve. Volunteers play an important role
        in supporting our programs, events, and community outreach activities.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="v-first">First Name</Label>
          <Input id="v-first" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="v-last">Last Name</Label>
          <Input id="v-last" required className="mt-1.5" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="v-email">Email Address</Label>
          <Input id="v-email" type="email" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="v-phone">Phone Number</Label>
          <Input id="v-phone" type="tel" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="v-location">Location</Label>
        <Input id="v-location" className="mt-1.5" />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">Areas of Interest</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {interestOptions.map((option) => (
            <div key={option} className="flex items-center gap-3">
              <Checkbox id={`v-int-${option}`} />
              <Label htmlFor={`v-int-${option}`} className="font-normal">{option}</Label>
            </div>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="v-avail">Availability</Label>
        <select id="v-avail" required className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
          <option value="">Select availability</option>
          {availabilityOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <div>
        <Label htmlFor="v-why">Why would you like to volunteer with NOEMA Ensemble?</Label>
        <Textarea id="v-why" rows={3} className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="v-exp">Any relevant experience or skills?</Label>
        <Textarea id="v-exp" rows={3} className="mt-1.5" />
      </div>

      <Button type="submit" size="lg" className="w-full">Submit Application</Button>
    </form>
  );
}
