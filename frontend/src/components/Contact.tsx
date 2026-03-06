import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocationMap } from "@/components/ui/expand-map";
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    className:
      "border-blue-200 bg-blue-50 text-blue-600 hover:border-blue-400 hover:text-blue-700 hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
    className:
      "border-pink-200 bg-pink-50 text-pink-600 hover:border-pink-400 hover:text-pink-700 hover:shadow-[0_0_22px_rgba(236,72,153,0.35)]",
  },
  {
    name: "X (Twitter)",
    href: "#",
    icon: Twitter,
    className:
      "border-slate-300 bg-slate-100 text-slate-700 hover:border-slate-500 hover:text-black hover:shadow-[0_0_22px_rgba(15,23,42,0.3)]",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
    className:
      "border-sky-200 bg-sky-50 text-sky-700 hover:border-sky-400 hover:text-sky-800 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)]",
  },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M16.5 3a5.6 5.6 0 0 0 3.1 3.1v3.2a8.7 8.7 0 0 1-3.1-1v6.2a6.5 6.5 0 1 1-6.5-6.5c.3 0 .7 0 1 .1v3.3a3.5 3.5 0 1 0 2.5 3.3V3h3z"
    />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Geometric bg pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <MotionSection className="relative container mx-auto px-4 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Go Digital Africa Kenya
          </h2>
          <p className="text-muted-foreground">Leading Digital Transformation & Marketing Agency</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="rounded-lg bg-secondary/50 border-border focus:border-primary" />
                <Input placeholder="Email Address" type="email" className="rounded-lg bg-secondary/50 border-border focus:border-primary" />
              </div>
              <Input placeholder="Company" className="rounded-lg bg-secondary/50 border-border focus:border-primary" />
              <Textarea placeholder="Tell us about your project..." rows={5} className="rounded-lg bg-secondary/50 border-border focus:border-primary" />
              <Button className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold">
                Send Message
              </Button>
            </form>

            <div className="mt-6 -mx-8 -mb-8 overflow-hidden rounded-b-2xl border-t border-border">
              <LocationMap
                className="w-full"
                location="Go Digital Africa, PRV4+4M, Westlands, Nairobi"
                coordinates="Westlands, Nairobi, Kenya"
                openExternalOnClick
                fullWidth
                compactHeight={230}
                edgeToEdge
                mapUrl="https://www.google.com/maps/search/?api=1&query=Go+Digital+Africa%2C+PRV4%2B4M%2C+Westlands%2C+Nairobi"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-cyan-100/80 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-cyan-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Call or WhatsApp Us</p>
                    <a href="tel:+254720222249" className="text-muted-foreground hover:text-primary transition-colors">
                      +254 720 222 249
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-rose-100/80 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-rose-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Email Us</p>
                    <a href="mailto:sales@godigitalafrica.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sales@godigitalafrica.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-sky-100/80 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-sky-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Website</p>
                    <a href="https://www.godigitalafrica.com" className="text-muted-foreground hover:text-primary transition-colors">
                      www.godigitalafrica.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-emerald-100/80 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">14 Ring Road, Parklands</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Follow Us
              </h3>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      title={social.name}
                      variants={fadeUp}
                      whileHover={hoverLift}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${social.className}`}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#"
                  aria-label="TikTok"
                  title="TikTok"
                  variants={fadeUp}
                  whileHover={hoverLift}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-gradient-to-br from-cyan-50 to-pink-50 text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-pink-300 hover:text-pink-600 hover:shadow-[0_0_22px_rgba(34,211,238,0.35)]"
                >
                  <TikTokIcon />
                </motion.a>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default Contact;
