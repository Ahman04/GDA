import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocationMap } from "@/components/ui/expand-map";
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";
import contactBackground from "@/images/contact page.jpg";

const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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
  {
    name: "WhatsApp",
    href: "https://wa.me/254720222249",
    icon: function WhatsAppIcon() {
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 11.9A8 8 0 0 0 6.4 6.2a7.9 7.9 0 0 0-1.2 8l-1.1 4 4.1-1.1A8 8 0 1 0 20 11.9Zm-8 6.6a6.6 6.6 0 0 1-3.4-.9l-.2-.1-2.4.6.6-2.3-.2-.2a6.6 6.6 0 1 1 5.6 2.9Zm3.6-4.9c-.2-.1-1.1-.6-1.3-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.1-.2.2-.4.1a5.4 5.4 0 0 1-2.7-2.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4l-.6-1.4c-.1-.3-.3-.2-.4-.2h-.4a.8.8 0 0 0-.5.2 2.3 2.3 0 0 0-.7 1.7c0 1 .7 2 1 2.4a7.4 7.4 0 0 0 2.9 2.6c1.7.7 1.7.5 2 .5a1.7 1.7 0 0 0 1.1-.8 1.4 1.4 0 0 0 .1-.8c0-.1-.2-.2-.4-.3Z"
          />
        </svg>
      );
    },
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-600 hover:border-emerald-400 hover:text-emerald-700 hover:shadow-[0_0_22px_rgba(34,197,94,0.35)]",
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
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const details = String(formData.get("details") || "");
    const subject = `Contact Form - ${company || name || "Website Inquiry"}`;
    const body =
      [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Company: ${company || "-"}`,
        "",
        "Project Details:",
        details || "-",
      ].join("\n");

    window.open(buildGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-14 lg:min-h-[calc(100svh-6rem)] lg:py-8 lg:flex lg:items-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-[0.88] scale-[1.02]"
        style={{ backgroundImage: `url(${contactBackground})` }}
        animate={{ scale: [1.02, 1.06, 1.02], x: [0, -10, 0], y: [0, -6, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,34,0.7)_0%,rgba(10,31,48,0.54)_22%,rgba(255,255,255,0.08)_48%,rgba(7,20,34,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(34,211,238,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_28%)]" />

      {/* Geometric bg pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <MotionSection className="relative container mx-auto px-4 lg:px-8" triggerOnView={false}>
        <motion.div variants={fadeUp} className="mb-8 text-center lg:mb-7">
          <div className="mx-auto inline-block rounded-full border border-white/18 bg-slate-950/38 px-4 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.2)] backdrop-blur-md">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Contact Us</p>
          </div>
          <h2 className="mb-3 mt-4 text-3xl font-extrabold text-cyan-50 drop-shadow-[0_4px_24px_rgba(15,23,42,0.8)] md:text-4xl">
            Go Digital Africa Kenya
          </h2>
          <p className="mx-auto max-w-2xl rounded-full border border-white/14 bg-slate-950/28 px-5 py-2.5 text-cyan-100/95 shadow-[0_12px_40px_rgba(15,23,42,0.18)] backdrop-blur-md">
            Leading Digital Transformation & Marketing Agency
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Form */}
          <motion.div variants={fadeUp} transition={{ delay: 0.08 }} className="rounded-2xl border border-white/35 bg-white/88 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-md lg:p-7">
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your Name" className="rounded-lg border-white/45 bg-white/78 text-slate-900 placeholder:text-slate-500 focus:border-primary" />
                <Input name="email" placeholder="Email Address" type="email" className="rounded-lg border-white/45 bg-white/78 text-slate-900 placeholder:text-slate-500 focus:border-primary" />
              </div>
              <Input name="company" placeholder="Company" className="rounded-lg border-white/45 bg-white/78 text-slate-900 placeholder:text-slate-500 focus:border-primary" />
              <Textarea name="details" placeholder="Tell us about your project..." rows={4} className="rounded-lg border-white/45 bg-white/78 text-slate-900 placeholder:text-slate-500 focus:border-primary" />
              <Button className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold">
                Send Message
              </Button>
            </form>

            <div className="mt-5 -mx-6 -mb-6 overflow-hidden rounded-b-2xl border-t border-white/30 lg:-mx-7 lg:-mb-7">
              <LocationMap
                className="w-full"
                location="Go Digital Africa, PRV4+4M, Westlands, Nairobi"
                coordinates="Westlands, Nairobi, Kenya"
                openExternalOnClick
                fullWidth
                compactHeight={170}
                edgeToEdge
                mapUrl="https://www.google.com/maps/search/?api=1&query=Go+Digital+Africa%2C+PRV4%2B4M%2C+Westlands%2C+Nairobi"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} transition={{ delay: 0.18 }} className="space-y-6 rounded-2xl border border-white/18 bg-slate-950/40 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-md lg:p-7">
            <div>
              <h3 className="font-bold text-cyan-50 mb-4 text-lg">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-cyan-100/80 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-cyan-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-cyan-50">Call or WhatsApp Us</p>
                    <a href="https://wa.me/254720222249" target="_blank" rel="noreferrer" className="text-slate-200/85 hover:text-cyan-300 transition-colors">
                      +254 720 222 249
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-rose-100/80 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-rose-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-cyan-50">Email Us</p>
                    <a
                      href={buildGmailComposeUrl("Website Inquiry", "Hello Go Digital Africa,")}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200/85 hover:text-cyan-300 transition-colors"
                    >
                      {SALES_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-sky-100/80 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-sky-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-cyan-50">Website</p>
                    <a href="https://www.godigitalafrica.com" className="text-slate-200/85 hover:text-cyan-300 transition-colors">
                      www.godigitalafrica.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-emerald-100/80 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-cyan-50">Visit Us</p>
                    <p className="text-slate-200/85">14 Ring Road, Westlands</p>
                    <p className="text-slate-200/85">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-cyan-50 mb-4 text-lg">
                Follow Us
              </h3>
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith("https://") ? "_blank" : undefined}
                      rel={social.href.startsWith("https://") ? "noreferrer" : undefined}
                      aria-label={social.name}
                      title={social.name}
                      variants={fadeUp}
                      whileHover={{ y: -6, scale: 1.08, rotate: -6 }}
                      whileTap={{ scale: 0.96 }}
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
                  whileHover={{ y: -6, scale: 1.08, rotate: 6 }}
                  whileTap={{ scale: 0.96 }}
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
