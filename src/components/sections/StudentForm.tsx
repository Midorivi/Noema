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
        <Check className="mb-4 h-10 w-10 text-black/60" />
        <p className="text-lg font-medium">Thank you!</p>
        <p className="text-sm text-black/70">Your application has been submitted. We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[1px] bg-black/8">
      <div>
        <Label htmlFor="s-program" className="text-black/60">Program</Label>
        <select id="s-program" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">Select a program</option>
          {programOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-pfirst" className="text-black/60">Parent&apos;s First Name</Label><Input id="s-pfirst" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="s-plast" className="text-black/60">Parent&apos;s Last Name</Label><Input id="s-plast" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div><Label htmlFor="s-student" className="text-black/60">Student&apos;s Full Name</Label><Input id="s-student" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-instrument" className="text-black/60">Instrument</Label>
          <select id="s-instrument" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
            <option value="" className="bg-white">Select</option>
            {instrumentOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
          </select>
        </div>
        <div><Label htmlFor="s-duration" className="text-black/60">Duration of Learning</Label><Input id="s-duration" placeholder="e.g. 3 years" className="mt-2 rounded-none border-black/20 bg-transparent text-black placeholder:text-black/35 focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-phone" className="text-black/60">Phone Number</Label><Input id="s-phone" type="tel" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="s-email" className="text-black/60">Email Address</Label><Input id="s-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div>
        <Label htmlFor="s-location" className="text-black/60">Location</Label>
        <select id="s-location" required value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">Select location</option>
          {locationOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      {location === "Other" && <div><Label htmlFor="s-loc-other" className="text-black/60">Specify Location</Label><Input id="s-loc-other" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>}
      <Button type="submit" size="lg" className="w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">Submit Application</Button>
    </form>
  );
}
