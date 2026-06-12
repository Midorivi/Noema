import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function MusicianForm() {
  const { t, dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <Check className="mb-4 h-10 w-10 text-black/60" />
        <p className="text-lg font-medium">{t("forms.shared.successTitle")}</p>
        <p className="text-sm text-black/70">{t("forms.shared.successText")}</p>
      </div>
    );
  }

  const otherLocation = dict.forms.shared.locationOptions[dict.forms.shared.locationOptions.length - 1];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-black/60">{t("forms.musician.intro")}</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-first" className="text-black/60">{t("forms.shared.firstName")}</Label><Input id="m-first" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="m-last" className="text-black/60">{t("forms.shared.lastName")}</Label><Input id="m-last" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-email" className="text-black/60">{t("forms.shared.email")}</Label><Input id="m-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="m-phone" className="text-black/60">{t("forms.shared.phone")}</Label><Input id="m-phone" type="tel" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div>
        <Label htmlFor="m-loc" className="text-black/60">{t("forms.shared.location")}</Label>
        <select id="m-loc" required value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">{t("forms.shared.select")}</option>
          {dict.forms.shared.locationOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      {location === otherLocation && <div><Label htmlFor="m-loc-other" className="text-black/60">{t("forms.musician.specify")}</Label><Input id="m-loc-other" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>}
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-primary" className="text-black/60">{t("forms.musician.primaryInstrument")}</Label><Input id="m-primary" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="m-secondary" className="text-black/60">{t("forms.musician.secondaryInstrument")}</Label><Input id="m-secondary" className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="m-years" className="text-black/60">{t("forms.musician.yearsOfExperience")}</Label><Input id="m-years" type="number" min="0" className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="m-school" className="text-black/60">{t("forms.musician.school")}</Label><Input id="m-school" className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-black/60">{t("forms.musician.participation")}</legend>
        <div className="space-y-3">
          {dict.forms.musician.participationOptions.map((opt, i) => (
            <div key={i} className="flex items-center gap-3">
              <Checkbox id={`m-p-${i}`} className="border-black/30" />
              <Label htmlFor={`m-p-${i}`} className="font-normal text-black/70">{opt}</Label>
            </div>
          ))}
        </div>
      </fieldset>
      <div><Label htmlFor="m-about" className="text-black/60">{t("forms.musician.about")}</Label><Textarea id="m-about" rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <div><Label htmlFor="m-why" className="text-black/60">{t("forms.musician.why")}</Label><Textarea id="m-why" required rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <Button type="submit" size="lg" className="mt-2 w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">{t("forms.shared.submit")}</Button>
    </form>
  );
}
