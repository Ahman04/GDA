import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import { RainbowBordersButton } from "@/components/ui/rainbow-borders-button";
import gdaLogo from "@/images/1695985224885-removebg-preview.png";
import { fadeUp, motionEase, staggerContainer } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Careers", href: "#careers" },
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
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: motionEase }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4 lg:px-8">
        <motion.a href="#" className="flex items-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
          <div
            className={`relative h-16 w-36 overflow-hidden ${
              scrolled ? "drop-shadow-sm" : ""
            }`}
          >
            <img
              src={gdaLogo}
              alt="Go Digital Africa logo"
              className="h-full w-full scale-[1.7] object-contain"
            />
          </div>
        </motion.a>

        {/* Desktop */}
        <motion.div
          className="hidden lg:flex items-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.a
            href="#"
            aria-label="Home"
            title="Home"
            className={`transition-colors hover:text-primary ${
              scrolled ? "text-foreground/70" : "text-deep-blue-foreground/70"
            }`}
            variants={fadeUp}
            whileHover={{ y: -2 }}
          >
            <Home className="h-4 w-4" />
          </motion.a>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-deep-blue-foreground/70"
              }`}
              variants={fadeUp}
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <RainbowBordersButton href="#contact" className="h-10 min-w-[140px] rounded-full px-6">
              Get Started
            </RainbowBordersButton>
          </motion.div>
        </motion.div>

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
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: motionEase }}
          >
          <motion.div
            className="container mx-auto px-4 py-4 flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary py-2"
              onClick={() => setMobileOpen(false)}
              variants={fadeUp}
            >
              <Home className="h-4 w-4" />
              Home
            </motion.a>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
                variants={fadeUp}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div variants={fadeUp}>
              <RainbowBordersButton
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full rounded-full"
              >
                Get Started
              </RainbowBordersButton>
            </motion.div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
