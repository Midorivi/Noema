import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const programOptions = ["Music Workshop", "Masterclass", "Beginner Training", "Seasonal Concert", "Community Outreach Concert", "Mission Trip Concert"];
const instrumentOptions = ["Violin", "Cello", "Piano", "Voice"];
const locationOptions = ["CA", "NY", "Korea", "Other"];

export function StudentForm() {
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
      <div>
        <Label htmlFor="s-program" className="text-white/60">Program</Label>
        <select id="s-program" required className="mt-2 flex h-10 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-white">
          <option value="" className="bg-black">Select a program</option>
          {programOptions.map((opt) => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-pfirst" className="text-white/60">Parent&apos;s First Name</Label><Input id="s-pfirst" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="s-plast" className="text-white/60">Parent&apos;s Last Name</Label><Input id="s-plast" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <div><Label htmlFor="s-student" className="text-white/60">Student&apos;s Full Name</Label><Input id="s-student" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-instrument" className="text-white/60">Instrument</Label>
          <select id="s-instrument" required className="mt-2 flex h-10 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-white">
            <option value="" className="bg-black">Select</option>
            {instrumentOptions.map((opt) => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
          </select>
        </div>
        <div><Label htmlFor="s-duration" className="text-white/60">Duration of Learning</Label><Input id="s-duration" placeholder="e.g. 3 years" className="mt-2 rounded-none border-white/20 bg-transparent text-white placeholder:text-white/20 focus:border-white" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-phone" className="text-white/60">Phone Number</Label><Input id="s-phone" type="tel" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
        <div><Label htmlFor="s-email" className="text-white/60">Email Address</Label><Input id="s-email" type="email" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>
      </div>
      <div>
        <Label htmlFor="s-location" className="text-white/60">Location</Label>
        <select id="s-location" required value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 flex h-10 w-full rounded-none border border-white/20 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-white">
          <option value="" className="bg-black">Select location</option>
          {locationOptions.map((opt) => <option key={opt} value={opt} className="bg-black">{opt}</option>)}
        </select>
      </div>
      {location === "Other" && <div><Label htmlFor="s-loc-other" className="text-white/60">Specify Location</Label><Input id="s-loc-other" required className="mt-2 rounded-none border-white/20 bg-transparent text-white focus:border-white" /></div>}
      <Button type="submit" size="lg" className="w-full rounded-none border border-white bg-white text-xs font-medium tracking-widest uppercase text-black hover:bg-transparent hover:text-white transition-all duration-300">Submit Application</Button>
    </form>
  );
}
