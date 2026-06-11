import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Mission", to: "/mission" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-black/15 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-8">
          <Link to="/">
            <img
              src="/noema-logo.png"
              alt="NOEMA Ensemble"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
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
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
