import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.3em] uppercase text-white">
              NOEMA
            </p>
            <p className="text-sm leading-relaxed text-white/50">
              A Christian music ministry where professionals and non-professionals
              come together to sing praises and serve the community through music.
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Events", to: "/events" },
                { label: "Get Involved", to: "/get-involved" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Contact
            </p>
            <div className="flex flex-col gap-4 text-sm text-white/50">
              <a
                href="mailto:noema.ensemble@gmail.com"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-white"
              >
                <Mail size={14} className="shrink-0" />
                noema.ensemble@gmail.com
              </a>
              <a
                href="tel:+19176889738"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-white"
              >
                <Phone size={14} className="shrink-0" />
                +1-917-688-9738
              </a>
              <span className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                11681 Trask Avenue, Garden Grove, CA 92843
              </span>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Follow
            </p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/noema.ensemble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors duration-300 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@Noema.ensemble"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors duration-300 hover:text-white"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/15 pt-8 text-xs text-white/25">
          &copy; {new Date().getFullYear()} NOEMA Ensemble. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
