import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function VolunteerForm() {
  const { t, dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-black/60">{t("forms.volunteer.intro")}</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="v-first" className="text-black/60">{t("forms.shared.firstName")}</Label><Input id="v-first" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="v-last" className="text-black/60">{t("forms.shared.lastName")}</Label><Input id="v-last" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="v-email" className="text-black/60">{t("forms.shared.email")}</Label><Input id="v-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="v-phone" className="text-black/60">{t("forms.shared.phone")}</Label><Input id="v-phone" type="tel" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div><Label htmlFor="v-loc" className="text-black/60">{t("forms.shared.location")}</Label><Input id="v-loc" className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-black/60">{t("forms.volunteer.interests")}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {dict.forms.volunteer.interestOptions.map((opt, i) => (
            <div key={i} className="flex items-center gap-3">
              <Checkbox id={`v-i-${i}`} className="border-black/30" />
              <Label htmlFor={`v-i-${i}`} className="font-normal text-black/70">{opt}</Label>
            </div>
          ))}
        </div>
      </fieldset>
      <div>
        <Label htmlFor="v-avail" className="text-black/60">{t("forms.volunteer.availability")}</Label>
        <select id="v-avail" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">{t("forms.shared.select")}</option>
          {dict.forms.volunteer.availabilityOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      <div><Label htmlFor="v-why" className="text-black/60">{t("forms.volunteer.why")}</Label><Textarea id="v-why" rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <div><Label htmlFor="v-exp" className="text-black/60">{t("forms.volunteer.experience")}</Label><Textarea id="v-exp" rows={3} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <Button type="submit" size="lg" className="mt-2 w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">{t("forms.shared.submit")}</Button>
    </form>
  );
}
