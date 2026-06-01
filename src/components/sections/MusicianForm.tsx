import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

const locationOptions = ["CA", "NY", "Korea", "Other"];
const participationOptions = [
  "Performance", "Community Outreach", "Music Education Programs",
  "Music Ministry", "Special Events",
];

export function MusicianForm() {
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
      <p className="text-sm text-muted-foreground">
        Thank you for your interest in joining NOEMA Ensemble. We welcome both music
        majors and non-music majors who share a passion for music, service, and community.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="m-first">First Name</Label>
          <Input id="m-first" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="m-last">Last Name</Label>
          <Input id="m-last" required className="mt-1.5" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="m-email">Email Address</Label>
          <Input id="m-email" type="email" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="m-phone">Phone Number</Label>
          <Input id="m-phone" type="tel" required className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="m-location">Location</Label>
        <select
          id="m-location"
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
          <Label htmlFor="m-location-other">Specify Location</Label>
          <Input id="m-location-other" required className="mt-1.5" />
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="m-primary">Primary Instrument</Label>
          <Input id="m-primary" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="m-secondary">Secondary Instrument (optional)</Label>
          <Input id="m-secondary" className="mt-1.5" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="m-years">Years of Musical Experience</Label>
          <Input id="m-years" type="number" min="0" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="m-school">Past or Current School / Organization</Label>
          <Input id="m-school" className="mt-1.5" />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">Participation Interest</legend>
        <div className="space-y-3">
          {participationOptions.map((option) => (
            <div key={option} className="flex items-center gap-3">
              <Checkbox id={`m-part-${option}`} />
              <Label htmlFor={`m-part-${option}`} className="font-normal">{option}</Label>
            </div>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="m-about">Tell us about yourself</Label>
        <Textarea id="m-about" rows={3} className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="m-why">Why would you like to join NOEMA Ensemble?</Label>
        <Textarea id="m-why" required rows={3} className="mt-1.5" />
      </div>

      <Button type="submit" size="lg" className="w-full">Submit Application</Button>
    </form>
  );
}
