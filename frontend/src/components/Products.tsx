import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link2, Brain, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    icon: Link2,
    name: "Linkly SaaS",
    version: "v3.2",
    tagline: "Social Media Orchestration & Performance Analytics",
    features: [
      "Multi-platform content scheduling",
      "Real-time performance dashboards",
      "AI-powered engagement insights",
    ],
    iconWrapClass: "bg-blue-100/80",
    iconClass: "text-blue-600",
    dotClass: "bg-blue-500",
  },
  {
    icon: Brain,
    name: "Optirise AI",
    version: "v2.0",
    tagline: "AI-Powered SEO Automation & Digital Visibility Engine",
    features: [
      "Automated keyword intelligence",
      "Content optimization engine",
      "Competitive analysis automation",
    ],
    iconWrapClass: "bg-violet-100/80",
    iconClass: "text-violet-600",
    dotClass: "bg-violet-500",
  },
  {
    icon: Users,
    name: "SkillLink",
    version: "v1.5",
    tagline: "African Technical Talent Infrastructure Marketplace",
    features: [
      "Verified developer profiles",
      "Smart skill-based matching",
      "Integrated project management",
    ],
    iconWrapClass: "bg-emerald-100/80",
    iconClass: "text-emerald-600",
    dotClass: "bg-emerald-500",
  },
];

const Products = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our AI Powered <span className="gradient-text">Digital Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proprietary platforms engineered for African markets and global scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="card-cyan-glow bg-card border border-border rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.iconWrapClass}`}>
                  <p.icon className={`w-6 h-6 ${p.iconClass}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{p.name}</h3>
                  <Badge variant="secondary" className="text-[10px] font-bold mt-0.5">
                    {p.version}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${p.dotClass}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/10">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
