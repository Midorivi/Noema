import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

const locationOptions = ["CA", "NY", "Korea", "Other"];
const participationOptions = ["Performance", "Community Outreach", "Music Education Programs", "Music Ministry", "Special Events"];

export function MusicianForm() {
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <Check className="mb-4 h-10 w-10 text-white/60" />
        <p className="text-lg font-medium">Thank you!</p>
        <p className="text-sm text-white/50">Your application has been submitted. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-white/40">We welcome both music majors and non-music majors who share a passion for music, service, and community.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-first" className="text-white/60">First Name</Label><Input id="m-first" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="m-last" className="text-white/60">Last Name</Label><Input id="m-last" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-email" className="text-white/60">Email</Label><Input id="m-email" type="email" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="m-phone" className="text-white/60">Phone</Label><Input id="m-phone" type="tel" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <div>
        <Label htmlFor="m-loc" className="text-white/60">Location</Label>
        <select id="m-loc" required value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 flex h-10 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-white">
          <option value="" className="bg-black">Select</option>
          {locationOptions.map((opt) => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
        </select>
      </div>
      {location === "Other" && <div><Label htmlFor="m-loc-other" className="text-white/60">Specify</Label><Input id="m-loc-other" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>}
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-primary" className="text-white/60">Primary Instrument</Label><Input id="m-primary" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="m-secondary" className="text-white/60">Secondary Instrument</Label><Input id="m-secondary" className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-years" className="text-white/60">Years of Experience</Label><Input id="m-years" type="number" min="0" className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="m-school" className="text-white/60">School / Organization</Label><Input id="m-school" className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-white/60">Participation Interest</legend>
        <div className="space-y-3">
          {participationOptions.map((opt) => (
            <div key={opt} className="flex items-center gap-3">
              <Checkbox id={`m-p-${opt}`} className="border-white/30" />
              <Label htmlFor={`m-p-${opt}`} className="font-normal text-white/50">{opt}</Label>
            </div>
          ))}
        </div>
      </fieldset>
      <div><Label htmlFor="m-about" className="text-white/60">Tell us about yourself</Label><Textarea id="m-about" rows={3} className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      <div><Label htmlFor="m-why" className="text-white/60">Why join NOEMA Ensemble?</Label><Textarea id="m-why" required rows={3} className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      <Button type="submit" size="lg" className="w-full rounded-none border border-white bg-white text-xs font-medium tracking-widest uppercase text-black hover:bg-transparent hover:text-white transition-all duration-300">Submit Application</Button>
    </form>
  );
}
