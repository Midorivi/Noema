import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function StudentForm() {
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
      <div>
        <Label htmlFor="s-program" className="text-black/60">{t("forms.student.program")}</Label>
        <select id="s-program" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">{t("forms.student.selectProgram")}</option>
          {dict.forms.student.programOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-pfirst" className="text-black/60">{t("forms.student.parentFirstName")}</Label><Input id="s-pfirst" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="s-plast" className="text-black/60">{t("forms.student.parentLastName")}</Label><Input id="s-plast" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div><Label htmlFor="s-student" className="text-black/60">{t("forms.student.studentFullName")}</Label><Input id="s-student" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-instrument" className="text-black/60">{t("forms.student.instrument")}</Label>
          <select id="s-instrument" required className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
            <option value="" className="bg-white">{t("forms.shared.select")}</option>
            {dict.forms.student.instrumentOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
          </select>
        </div>
        <div><Label htmlFor="s-duration" className="text-black/60">{t("forms.student.duration")}</Label><Input id="s-duration" placeholder={t("forms.student.durationPlaceholder")} className="mt-2 rounded-none border-black/20 bg-transparent text-black placeholder:text-black/35 focus:border-black" /></div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><Label htmlFor="s-phone" className="text-black/60">{t("forms.student.phoneNumber")}</Label><Input id="s-phone" type="tel" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
        <div><Label htmlFor="s-email" className="text-black/60">{t("forms.student.emailAddress")}</Label><Input id="s-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
      </div>
      <div>
        <Label htmlFor="s-location" className="text-black/60">{t("forms.shared.location")}</Label>
        <select id="s-location" required value={location} onChange={(e) => setLocation(e.target.value)} className="mt-2 flex h-10 w-full rounded-none border border-black/20 bg-transparent px-3 py-2 text-sm text-black outline-none focus:border-black">
          <option value="" className="bg-white">{t("forms.student.selectLocation")}</option>
          {dict.forms.shared.locationOptions.map((opt) => <option key={opt} value={opt} className="bg-white">{opt}</option>)}
        </select>
      </div>
      {location === otherLocation && <div><Label htmlFor="s-loc-other" className="text-black/60">{t("forms.student.specifyLocation")}</Label><Input id="s-loc-other" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>}
      <Button type="submit" size="lg" className="mt-2 w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">{t("forms.shared.submit")}</Button>
    </form>
  );
}
