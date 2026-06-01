import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold tracking-tight uppercase">
              NOEMA
            </h3>
            <p className="text-sm text-primary-foreground/70">
              A Christian music ministry where professionals and non-professionals
              come together to sing praises and serve the community through music.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Events", to: "/events" },
                { label: "Get Involved", to: "/get-involved" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a
                href="mailto:noema.ensemble@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Mail size={14} />
                noema.ensemble@gmail.com
              </a>
              <a
                href="tel:+19176889738"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Phone size={14} />
                +1-917-688-9738
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                11681 Trask Avenue, Garden Grove, CA 92843
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/noema.ensemble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Noema.ensemble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                aria-label="YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-xs text-primary-foreground/50">
          &copy; {new Date().getFullYear()} NOEMA Ensemble. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
