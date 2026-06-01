import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Check } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "noema.ensemble@gmail.com", href: "mailto:noema.ensemble@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1-917-688-9738", href: "tel:+19176889738" },
  { icon: MapPin, label: "Address", value: "11681 Trask Avenue, Garden Grove, CA 92843" },
];

export function Contact() {
  const [contactSent, setContactSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function handleContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactSent(true);
  }

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <>
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Contact Us</h1>
        <p className="text-lg text-muted-foreground">We&apos;d love to hear from you</p>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {contactInfo.map((item) => (
            <Card key={item.label} className="border border-border">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <item.icon className="mb-4 h-8 w-8" />
                <h3 className="mb-2 font-semibold">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
            Send a Message
          </h2>
          {contactSent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <Check className="mb-4 h-12 w-12" />
              <p className="text-lg font-medium">Thank you for reaching out!</p>
              <p className="text-muted-foreground">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleContact} className="space-y-5">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" required rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
            Stay Connected
          </h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to our newsletter for updates on events, programs, and ministry news.
          </p>
          {subscribed ? (
            <div className="flex flex-col items-center py-8">
              <Check className="mb-4 h-12 w-12" />
              <p className="text-lg font-medium">You&apos;ve been subscribed!</p>
              <p className="text-muted-foreground">Thank you for your interest.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="sub-first">First Name</Label>
                  <Input id="sub-first" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="sub-last">Last Name</Label>
                  <Input id="sub-last" required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="sub-email">Email</Label>
                <Input id="sub-email" type="email" required className="mt-1.5" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-6 text-xl font-bold">Follow Us</h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/noema.ensemble"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-8 w-8" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@Noema.ensemble"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <YoutubeIcon className="h-8 w-8" />
              <span className="text-sm">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
