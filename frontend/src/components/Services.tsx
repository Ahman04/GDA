import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code, Search, Share2, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Digital Strategy, Web & Software Development",
    desc: "Data-driven strategy plus web and custom software delivery aligned to your business goals.",
    cardClass: "border-blue-200/90 bg-blue-50/35 hover:border-blue-300",
    iconWrapClass: "bg-blue-100/80 group-hover:bg-blue-100",
    iconClass: "text-blue-600",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    desc: "Search engine optimization and search engine marketing programs that increase visibility and qualified traffic.",
    cardClass: "border-emerald-200/90 bg-emerald-50/35 hover:border-emerald-300",
    iconWrapClass: "bg-emerald-100/80 group-hover:bg-emerald-100",
    iconClass: "text-emerald-600",
  },
  {
    icon: Share2,
    title: "Social Media Mastery",
    desc: "Strategic social media management and marketing campaigns to engage, connect, and convert your audience.",
    cardClass: "border-violet-200/90 bg-violet-50/35 hover:border-violet-300",
    iconWrapClass: "bg-violet-100/80 group-hover:bg-violet-100",
    iconClass: "text-violet-600",
  },
  {
    icon: Palette,
    title: "Content, Analytics & Creative",
    desc: "Compelling content creation, design support, and analytics insights that drive continual digital growth.",
    cardClass: "border-rose-200/90 bg-rose-50/35 hover:border-rose-300",
    iconWrapClass: "bg-rose-100/80 group-hover:bg-rose-100",
    iconClass: "text-rose-600",
  },
];

const Services = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-20 lg:py-28 bg-light-gray">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Digital <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`card-lift group rounded-xl p-6 text-center cursor-default border ${s.cardClass}`}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-5 transition-colors ${s.iconWrapClass}`}>
                <s.icon className={`w-7 h-7 ${s.iconClass}`} />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
