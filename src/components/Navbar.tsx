import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "TURBO", href: "#turbo-squad" },
    { label: "POPSI Naturals", href: "#popsi-naturals" },
    { label: "Our Story", href: "#our-story" },
    { label: "Waitlist", href: "#waitlist" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-frosted bg-background/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 font-display text-xl font-bold text-foreground">
          <Zap className="w-5 h-5 text-primary" />
          TURBO Beverages
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Join the Waitlist →
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-frosted bg-background/95 border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center gap-1 px-5 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold"
          >
            Join the Waitlist →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
