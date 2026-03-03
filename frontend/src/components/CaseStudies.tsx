import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, BarChart3, Zap } from "lucide-react";
import financialServicesImage from "@/images/Financial Services.png";
import telecommunicationImage from "@/images/telecommunication.png";
import retailEcommerceImage from "@/images/Retail & E-Commerce.png";

const cases = [
  {
    icon: TrendingUp,
    title: "Fintech Platform Scale-Up",
    industry: "Financial Services",
    desc: "Architected cloud infrastructure supporting 2M+ transactions monthly for a leading African fintech.",
    result: "340% growth in transaction volume",
    image: financialServicesImage,
    iconClass: "text-blue-400/80",
    overlayClass: "bg-blue-500/15",
    pillClass: "bg-blue-100 text-blue-700",
    industryClass: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Telecom Digital Ecosystem",
    industry: "Telecommunications",
    desc: "End-to-end digital marketing and customer acquisition platform for Pan-African telecom operator.",
    result: "150% increase in digital subscriptions",
    image: telecommunicationImage,
    iconClass: "text-emerald-400/80",
    overlayClass: "bg-emerald-500/15",
    pillClass: "bg-emerald-100 text-emerald-700",
    industryClass: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "E-Commerce AI Optimization",
    industry: "Retail & E-Commerce",
    desc: "AI-powered SEO and performance marketing engine driving 10x organic growth for cross-border retailer.",
    result: "10x organic traffic in 8 months",
    image: retailEcommerceImage,
    iconClass: "text-violet-400/80",
    overlayClass: "bg-violet-500/15",
    pillClass: "bg-violet-100 text-violet-700",
    industryClass: "text-violet-600",
  },
];

const CaseStudies = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-background">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Engineering <span className="gradient-text">Real Impact</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.title}
              className="card-lift group bg-card border border-border rounded-2xl overflow-hidden cursor-default"
            >
              {/* Thumbnail */}
              <div className="h-44 bg-gradient-to-br from-deep-blue to-deep-blue/80 flex items-center justify-center relative overflow-hidden">
                <img
                  src={c.image}
                  alt={`${c.title} case study`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-deep-blue/20" />
                {/* Hover overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${c.overlayClass}`}>
                  <span className="text-primary-foreground bg-primary rounded-full px-4 py-1.5 text-sm font-semibold shadow-lg">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.industryClass}`}>{c.industry}</span>
                <h3 className="font-bold text-foreground mt-1 mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 ${c.pillClass}`}>
                  <TrendingUp className="w-3 h-3" />
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
