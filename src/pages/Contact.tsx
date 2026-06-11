import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin, Check } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function Contact() {
  const [contactSent, setContactSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function handleContact(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setContactSent(true); }
  function handleSubscribe(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubscribed(true); }

  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end px-8 pb-20 pt-28 md:px-16 lg:px-24">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-black/60 animate-fade-in">Contact</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-up">
          We&apos;d love
          <br />
          <span className="text-black/60">to hear from you</span>
        </h1>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid md:grid-cols-3 divide-x divide-black/10">
            {[
              { icon: Mail, label: "Email", value: "noema.ensemble@gmail.com", href: "mailto:noema.ensemble@gmail.com" },
              { icon: Phone, label: "Phone", value: "+1-917-688-9738", href: "tel:+19176889738" },
              { icon: MapPin, label: "Address", value: "11681 Trask Avenue, Garden Grove, CA 92843" },
            ].map((item) => (
              <div key={item.label} className="bg-background p-10 md:p-14">
                <item.icon className="mb-6 h-5 w-5 text-black/60" />
                <p className="mb-2 text-xs font-medium tracking-widest uppercase text-black/60">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-black/70 underline underline-offset-4 transition-colors hover:text-black">{item.value}</a>
                ) : (
                  <p className="text-sm text-black/70">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Message</p>
            <div className="max-w-xl">
              {contactSent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <Check className="mb-4 h-10 w-10 text-black/60" />
                  <p className="text-lg font-medium">Thank you for reaching out!</p>
                  <p className="text-sm text-black/70">We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-[1px] bg-black/8">
                  <div><Label htmlFor="c-name" className="text-black/60">Name</Label><Input id="c-name" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  <div><Label htmlFor="c-email" className="text-black/60">Email</Label><Input id="c-email" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  <div><Label htmlFor="c-subject" className="text-black/60">Subject</Label><Input id="c-subject" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  <div><Label htmlFor="c-msg" className="text-black/60">Message</Label><Textarea id="c-msg" required rows={5} className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  <Button type="submit" size="lg" className="w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-32 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Subscribe</p>
            <div className="max-w-xl">
              <p className="mb-8 text-base text-black/60">Stay connected with updates on events, programs, and ministry news.</p>
              {subscribed ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <Check className="mb-4 h-10 w-10 text-black/60" />
                  <p className="text-lg font-medium">Subscribed!</p>
                  <p className="text-sm text-black/70">Thank you for your interest.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-[1px] bg-black/8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div><Label htmlFor="sub-f" className="text-black/60">First Name</Label><Input id="sub-f" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                    <div><Label htmlFor="sub-l" className="text-black/60">Last Name</Label><Input id="sub-l" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  </div>
                  <div><Label htmlFor="sub-e" className="text-black/60">Email</Label><Input id="sub-e" type="email" required className="mt-2 rounded-none border-black/20 bg-transparent text-black focus:border-black" /></div>
                  <Button type="submit" size="lg" className="w-full rounded-none border border-black bg-black text-xs font-medium tracking-widest uppercase text-white hover:bg-transparent hover:text-black transition-all duration-300">Subscribe</Button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-black/15 px-8 py-20 md:px-16 lg:px-24">
        <FadeIn>
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-black/60">Follow</p>
            <div className="flex gap-8">
              <a href="https://instagram.com/noema.ensemble" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-black/60 transition-colors duration-300 hover:text-black">
                <InstagramIcon /> Instagram
              </a>
              <a href="https://www.youtube.com/@Noema.ensemble" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-black/60 transition-colors duration-300 hover:text-black">
                <YoutubeIcon /> YouTube
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
