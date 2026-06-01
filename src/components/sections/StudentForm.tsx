import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const programOptions = [
  "Music Workshop", "Masterclass", "Beginner Training",
  "Seasonal Concert", "Community Outreach Concert", "Mission Trip Concert",
];
const instrumentOptions = ["Violin", "Cello", "Piano", "Voice"];
const locationOptions = ["CA", "NY", "Korea", "Other"];

export function StudentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("");

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
      <div>
        <Label htmlFor="s-program">Program</Label>
        <select id="s-program" required className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
          <option value="">Select a program</option>
          {programOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-pfirst">Parent&apos;s First Name</Label>
          <Input id="s-pfirst" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="s-plast">Parent&apos;s Last Name</Label>
          <Input id="s-plast" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="s-student">Student&apos;s Full Name</Label>
        <Input id="s-student" required className="mt-1.5" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-instrument">Instrument</Label>
          <select id="s-instrument" required className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="">Select instrument</option>
            {instrumentOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <Label htmlFor="s-duration">Duration of Learning</Label>
          <Input id="s-duration" placeholder="e.g. 3 years" className="mt-1.5" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-phone">Phone Number</Label>
          <Input id="s-phone" type="tel" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="s-email">Email Address</Label>
          <Input id="s-email" type="email" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="s-location">Location</Label>
        <select
          id="s-location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">Select location</option>
          {locationOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      {location === "Other" && (
        <div>
          <Label htmlFor="s-location-other">Specify Location</Label>
          <Input id="s-location-other" required className="mt-1.5" />
        </div>
      )}
      <Button type="submit" size="lg" className="w-full">Submit Application</Button>
    </form>
  );
}
