import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gdaLogo from "@/images/gdalogo.jpeg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div
            className={`relative h-10 w-10 overflow-hidden rounded-full border shadow-sm ${
              scrolled ? "border-border bg-secondary/60" : "border-primary/30 bg-white/90"
            }`}
          >
            <img
              src={gdaLogo}
              alt="Go Digital Africa logo"
              className="h-full w-full object-cover object-[50%_22%] scale-[1.8]"
            />
          </div>
          <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-foreground" : "text-deep-blue-foreground"}`}>
            Go Digital <span className="text-primary">Africa</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-deep-blue-foreground/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-deep-blue-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-deep-blue-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="btn-glow bg-primary text-primary-foreground rounded-full w-full mt-2">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
