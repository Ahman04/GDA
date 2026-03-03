import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LocationMap } from "@/components/ui/expand-map";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const companySnapshot = [
  { label: "Primary", value: "Nairobi, Kenya" },
  { label: "Founded", value: "2019" },
  { label: "Company Size", value: "51-200 employees" },
  { label: "LinkedIn Team", value: "28 associated members" },
];

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Geometric bg pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={sectionRef} className="scroll-reveal relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Engineer Your <span className="gradient-text">Next Stage</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
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
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-blue-100/80 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-muted-foreground text-sm">14 Ring Road, Westlands, Nairobi, Nairobi 00100, KE</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-emerald-100/80 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-muted-foreground text-sm">0700222249</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-rose-100/80 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-rose-600" />
                  </div>
                  <span className="text-muted-foreground text-sm">hello@godigitalafrica.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-cyan-100/80 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-cyan-600" />
                  </div>
                  <a href="https://www.godigitalafrica.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    www.godigitalafrica.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-violet-600" />
                Company Snapshot
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {companySnapshot.map((item) => (
                  <div key={item.label} className="bg-secondary/50 rounded-lg px-4 py-3 border border-border">
                    <span className="font-semibold text-foreground text-sm">{item.label}</span>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">Location Map</h3>
              <LocationMap
                className="mx-auto sm:mx-0"
                location="Go Digital Africa, PRV4+4M, Westlands, Nairobi"
                coordinates="Westlands, Nairobi, Kenya"
                openExternalOnClick
                mapUrl="https://www.google.com/maps/search/?api=1&query=Go+Digital+Africa%2C+PRV4%2B4M%2C+Westlands%2C+Nairobi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
