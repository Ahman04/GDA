import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, X } from "lucide-react";
import { fadeUp, hoverLift, motionEase, staggerContainer } from "@/lib/motion";

const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const products = [
  {
    name: "Linkly SaaS",
    version: "v3.2",
    tagline: "Social Media Orchestration & Performance Analytics",
    logoLabel: "Linkly Logo",
    features: [
      "Multi-platform content scheduling",
      "Real-time performance dashboards",
      "AI-powered engagement insights",
    ],
    cardClass: "border-blue-200/70 bg-white/80 shadow-[0_22px_60px_rgba(59,130,246,0.12)]",
    logoWrapClass: "border-blue-200 bg-blue-50/95 text-blue-700",
    dotClass: "bg-blue-500",
  },
  {
    name: "Optirise AI",
    version: "v2.0",
    tagline: "AI-Powered SEO Automation & Digital Visibility Engine",
    logoLabel: "Optirise Logo",
    features: [
      "Automated keyword intelligence",
      "Content optimization engine",
      "Competitive analysis automation",
    ],
    cardClass: "border-violet-200/70 bg-white/80 shadow-[0_22px_60px_rgba(139,92,246,0.12)]",
    logoWrapClass: "border-violet-200 bg-violet-50/95 text-violet-700",
    dotClass: "bg-violet-500",
  },
  {
    name: "SkillLink",
    version: "v1.5",
    tagline: "African Technical Talent Infrastructure Marketplace",
    logoLabel: "SkillLink Logo",
    features: [
      "Verified developer profiles",
      "Smart skill-based matching",
      "Integrated project management",
    ],
    cardClass: "border-emerald-200/70 bg-white/80 shadow-[0_22px_60px_rgba(16,185,129,0.12)]",
    logoWrapClass: "border-emerald-200 bg-emerald-50/95 text-emerald-700",
    dotClass: "bg-emerald-500",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleDemoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("full_name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const phone = String(formData.get("phone") || "");
    const product = String(formData.get("product") || selectedProduct || "");
    const details = String(formData.get("details") || "");
    const subject = `Demo Request - ${product || company || fullName || "Website Inquiry"}`;
    const body =
      [
        `Full Name: ${fullName || "-"}`,
        `Email: ${email || "-"}`,
        `Company: ${company || "-"}`,
        `Phone: ${phone || "-"}`,
        `Product: ${product || "-"}`,
        "",
        "Demo Request Details:",
        details || "-",
      ].join("\n");

    window.open(buildGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="products" className="py-20 lg:py-28 bg-background">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Products</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our AI Powered <span className="gradient-text">Digital Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Proprietary platforms engineered for African markets and global scale.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-8 md:grid-cols-3 md:items-start">
            {products.map((p, index) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={hoverLift}
                className={`card-cyan-glow rounded-[2rem] border p-7 md:p-8 flex flex-col backdrop-blur-sm ${p.cardClass} ${
                  index === 1 ? "md:-translate-y-4" : index === 2 ? "md:translate-y-3" : ""
                }`}
              >
                <div className="mb-6">
                  <div className={`flex h-20 w-24 items-center justify-center rounded-[1.4rem] border border-dashed text-sm font-extrabold uppercase tracking-[0.2em] ${p.logoWrapClass}`}>
                    {p.logoLabel}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-foreground">{p.name}</h3>
                    <Badge variant="secondary" className="text-[10px] font-bold mt-0.5">
                      {p.version}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{p.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${p.dotClass}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3">
                  <Button
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setSelectedProduct(p.name)}
                  >
                    Request a Demo
                  </Button>
                  <Button variant="outline" className="w-full rounded-full border-primary/30 bg-white/70 text-primary hover:bg-primary/10">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-[2rem] border border-white/20 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.28)] md:p-8"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: motionEase }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-primary text-sm font-semibold uppercase tracking-[0.22em]">Request a Demo</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-foreground">See {selectedProduct} in action</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                    Share your details and the use case you want to explore. We will follow up with a tailored walkthrough.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 rounded-full"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close request demo form"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form className="space-y-5" onSubmit={handleDemoSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="full_name" placeholder="Full Name" className="h-11 rounded-xl border-slate-200 bg-slate-50/70" />
                  <Input name="email" placeholder="Work Email" type="email" className="h-11 rounded-xl border-slate-200 bg-slate-50/70" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input name="company" placeholder="Company Name" className="h-11 rounded-xl border-slate-200 bg-slate-50/70" />
                  <Input name="phone" placeholder="Phone Number" className="h-11 rounded-xl border-slate-200 bg-slate-50/70" />
                </div>
                <Input name="product" value={selectedProduct} readOnly className="h-11 rounded-xl border-slate-200 bg-slate-100 font-medium text-slate-700" />
                <Textarea
                  name="details"
                  placeholder="Tell us what you want to see in the demo"
                  rows={5}
                  className="rounded-2xl border-slate-200 bg-slate-50/70"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-slate-300"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="rounded-full px-6">
                    Submit Request
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;
