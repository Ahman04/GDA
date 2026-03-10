import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RainbowBordersButton } from "@/components/ui/rainbow-borders-button";
import gdaLogo from "@/images/1695985224885-removebg-preview.png";
import { fadeUp, motionEase, staggerContainer } from "@/lib/motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const useSolidNavbar = scrolled || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: motionEase }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidNavbar
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "border-b border-slate-200 bg-slate-100 shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
        <Link to="/" className="flex items-center">
          <div
            className={`relative flex h-14 w-24 items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 ${
              useSolidNavbar
                ? "border-slate-200/80 bg-white/92 shadow-sm"
                : "bg-transparent"
            }`}
          >
            <img
              src={gdaLogo}
              alt="Go Digital Africa logo"
              className={`h-full w-full scale-[1.42] object-contain ${
                useSolidNavbar
                  ? "brightness-[0.95] contrast-[1.05]"
                  : "brightness-[0.95] contrast-[1.05]"
              }`}
            />
          </div>
        </Link>
        </motion.div>

        {/* Desktop */}
        <motion.div
          className="hidden lg:flex items-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            aria-label="Home"
            title="Home"
            className={`transition-colors hover:text-primary ${
              useSolidNavbar ? "text-foreground/75" : "text-slate-800"
            }`}
            variants={fadeUp}
            whileHover={{ y: -2 }}
          >
            <Link to="/" className="relative inline-flex pb-1">
              Home
              {location.pathname === "/" ? (
                <motion.span
                  layoutId="active-nav-indicator"
                  className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 36 }}
                />
              ) : null}
            </Link>
          </motion.div>
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : useSolidNavbar
                    ? "text-foreground/75"
                    : "text-slate-800"
              }`}
              variants={fadeUp}
              whileHover={{ y: -2 }}
            >
              <Link to={link.to} className="relative inline-flex pb-1">
                {link.label}
                {location.pathname === link.to ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 36 }}
                  />
                ) : null}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
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
            <X className={useSolidNavbar ? "text-foreground" : "text-slate-900"} />
          ) : (
            <Menu className={useSolidNavbar ? "text-foreground" : "text-slate-900"} />
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
            <motion.div
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary py-2"
              variants={fadeUp}
            >
              <Link to="/" className="flex items-center gap-2">
                Home
              </Link>
            </motion.div>
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                variants={fadeUp}
              >
                <Link to={link.to}>{link.label}</Link>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <RainbowBordersButton
                to="/contact"
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
