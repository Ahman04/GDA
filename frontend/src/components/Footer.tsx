import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import gdaLogo from "@/images/1695985224885-removebg-preview.png";
import { MotionSection } from "@/components/ui/motion-section";
import { fadeIn, fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20 11.9A8 8 0 0 0 6.4 6.2a7.9 7.9 0 0 0-1.2 8l-1.1 4 4.1-1.1A8 8 0 1 0 20 11.9Zm-8 6.6a6.6 6.6 0 0 1-3.4-.9l-.2-.1-2.4.6.6-2.3-.2-.2a6.6 6.6 0 1 1 5.6 2.9Zm3.6-4.9c-.2-.1-1.1-.6-1.3-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.1-.2.2-.4.1a5.4 5.4 0 0 1-2.7-2.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4l-.6-1.4c-.1-.3-.3-.2-.4-.2h-.4a.8.8 0 0 0-.5.2 2.3 2.3 0 0 0-.7 1.7c0 1 .7 2 1 2.4a7.4 7.4 0 0 0 2.9 2.6c1.7.7 1.7.5 2 .5a1.7 1.7 0 0 0 1.1-.8 1.4 1.4 0 0 0 .1-.8c0-.1-.2-.2-.4-.3Z"
    />
  </svg>
);

const socialLinks = [
  { Icon: Linkedin, hoverClass: "hover:text-sky-400 hover:bg-sky-400/20" },
  { Icon: Twitter, hoverClass: "hover:text-cyan-400 hover:bg-cyan-400/20" },
  { Icon: Facebook, hoverClass: "hover:text-blue-400 hover:bg-blue-400/20" },
  { Icon: Instagram, hoverClass: "hover:text-rose-400 hover:bg-rose-400/20" },
  { Icon: WhatsAppIcon, hoverClass: "hover:text-emerald-500 hover:bg-emerald-500/15", href: "https://wa.me/254720222249" },
];

const marketPresence = [
  { country: "Kenya", flag: "🇰🇪" },
  { country: "Ethiopia", flag: "🇪🇹" },
  { country: "Somalia", flag: "🇸🇴" },
  { country: "Ghana", flag: "🇬🇭" },
  { country: "Rwanda", flag: "🇷🇼" },
  { country: "Senegal", flag: "🇸🇳" },
  { country: "Nigeria", flag: "🇳🇬" },
  { country: "Tanzania", flag: "🇹🇿" },
  { country: "Djibouti", flag: "🇩🇯" },
  { country: "Dubai", flag: "🇦🇪" },
  { country: "Canada", flag: "🇨🇦" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 pt-16 pb-8">
      <MotionSection className="container mx-auto px-4 lg:px-8" amount={0.12} variants={fadeIn}>
        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={gdaLogo}
                alt="Go Digital Africa logo"
                className="h-20 w-auto object-contain"
              />
              <span className="font-bold text-lg">Go Digital <span className="text-primary">Africa</span></span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              The architect of digital success stories, helping businesses of every size thrive in the online landscape.
            </p>
            <div className="space-y-1.5 text-xs text-slate-600 mb-6">
              <p>www.godigitalafrica.com</p>
              <p>0700222249</p>
            </div>
            <div className="mb-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">Also Based In</p>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-2.5">
                {marketPresence.map((location) => (
                  <motion.div
                    key={location.country}
                    variants={fadeUp}
                    whileHover={hoverLift}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <span aria-hidden="true">{location.flag}</span>
                    <span>{location.country}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={staggerContainer} className="flex gap-3">
              {socialLinks.map(({ Icon, hoverClass, href }, i) => (
                <motion.a
                  key={i}
                  href={href ?? "#"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noreferrer" : undefined}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.08, rotate: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className={`w-9 h-9 rounded-full bg-slate-900/10 text-slate-700 flex items-center justify-center transition-colors ${hoverClass}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Careers", "Case Studies", "Insights", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Digital Strategy", "Web & Software Development", "SEO & PPC", "Social Media Marketing", "Content Creation"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-sm text-slate-600 mb-4">
              Subscribe for the latest in digital transformation and AI innovation.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="rounded-full border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm h-10"
              />
              <Button size="icon" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="border-t border-slate-300 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Go Digital Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-slate-500 hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </motion.div>
      </MotionSection>
    </footer>
  );
};

export default Footer;
