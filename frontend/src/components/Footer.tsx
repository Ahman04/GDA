import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import gdaLogo from "@/images/1695985224885-removebg-preview.png";

const socialLinks = [
  { Icon: Linkedin, hoverClass: "hover:text-sky-400 hover:bg-sky-400/20" },
  { Icon: Twitter, hoverClass: "hover:text-cyan-400 hover:bg-cyan-400/20" },
  { Icon: Facebook, hoverClass: "hover:text-blue-400 hover:bg-blue-400/20" },
  { Icon: Instagram, hoverClass: "hover:text-rose-400 hover:bg-rose-400/20" },
]; 

const marketPresence = [
  { country: "Kenya", flag: "🇰🇪" },
  { country: "Ethiopia", flag: "🇪🇹" },
  { country: "Somalia", flag: "🇸🇴" },
  { country: "Dubai", flag: "🇦🇪" },
  { country: "Canada", flag: "🇨🇦" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
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
              <div className="flex flex-wrap gap-2.5">
                {marketPresence.map((location) => (
                  <div
                    key={location.country}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <span aria-hidden="true">{location.flag}</span>
                    <span>{location.country}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, hoverClass }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-9 h-9 rounded-full bg-slate-900/10 text-slate-700 flex items-center justify-center transition-colors ${hoverClass}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Careers", "Case Studies", "Insights", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["Digital Strategy", "Web & Software Development", "SEO & PPC", "Social Media Marketing", "Content Creation"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
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
          </div>
        </div>

        <div className="border-t border-slate-300 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Go Digital Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-xs text-slate-500 hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
