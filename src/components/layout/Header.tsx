import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const aboutLinks = [
  { label: "Who We Are", to: "/who-we-are" },
  { label: "Our Story", to: "/our-story" },
];

const navLinks = [
  { label: "Mission", to: "/mission" },
  { label: "Events", to: "/events" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();
  const aboutActive = aboutLinks.some((l) => location.pathname === l.to);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-black/15 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
          <Link to="/">
            <img
              src="/noema-logo.png"
              alt="NOEMA Ensemble"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                data-active={aboutActive}
                className={`nav-link relative flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  aboutActive ? "text-black" : "text-black/70 hover:text-black"
                }`}
              >
                About Us
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute left-1/2 top-full -translate-x-1/2 pt-5 transition-all duration-300 ${
                  aboutOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="flex w-44 flex-col border border-black/15 bg-white/95 backdrop-blur-md shadow-sm">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`border-b border-black/10 px-6 py-4 text-xs font-medium tracking-widest uppercase transition-colors duration-300 last:border-b-0 ${
                        location.pathname === link.to
                          ? "text-black"
                          : "text-black/60 hover:bg-black/5 hover:text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-active={location.pathname === link.to}
                className={`nav-link relative text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="ml-4 bg-black px-5 py-2 text-xs font-medium tracking-widest uppercase text-white transition-colors duration-300 hover:bg-black/80"
            >
              Donate
            </Link>
          </nav>

          <button
            className="text-black lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <nav className="flex h-full flex-col justify-center px-8">
          <div
            className={`border-b border-black/15 transition-all duration-500 ${
              mobileOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "0ms" : "0ms" }}
          >
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              aria-expanded={mobileAboutOpen}
              className={`flex w-full items-center justify-between py-5 text-2xl font-light tracking-wide ${
                aboutActive ? "text-black" : "text-black/60"
              }`}
            >
              About Us
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                mobileAboutOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col pb-5">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 pl-6 text-lg font-light tracking-wide transition-colors duration-300 ${
                        location.pathname === link.to ? "text-black" : "text-black/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`border-b border-black/15 py-5 text-2xl font-light tracking-wide transition-all duration-500 ${
                mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              } ${
                location.pathname === link.to
                  ? "text-black"
                  : "text-black/60"
              }`}
              style={{ transitionDelay: mobileOpen ? `${(i + 1) * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
