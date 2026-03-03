import { useScrollReveal } from "@/hooks/useScrollReveal";
import webImage from "@/images/web.png";
import seoSemImage from "@/images/SEO & SEM.png";
import socialMediaImage from "@/images/Social Media.png";
import contentImage from "@/images/content.png";
import growthMarketingImage from "@/images/Digital marketing.png";
import mobileDevelopmentImage from "@/images/mobile.png";
import digitalStrategyImage from "@/images/digital.png";

const services = [
  {
    title: "Digital Strategy",
    desc: "Data-driven digital strategy aligned to your business goals and market opportunities.",
    image: digitalStrategyImage,
    cardClass: "border-blue-200/90 bg-blue-50/35 hover:border-blue-300",
  },
  {
    title: "Growth Marketing",
    desc: "Performance-led growth campaigns built to increase qualified traffic, leads, and revenue.",
    image: growthMarketingImage,
    cardClass: "border-indigo-200/90 bg-indigo-50/35 hover:border-indigo-300",
  },
  {
    title: "SEO & SEM",
    desc: "Search engine optimization and search engine marketing programs that increase visibility and qualified traffic.",
    image: seoSemImage,
    cardClass: "border-emerald-200/90 bg-emerald-50/35 hover:border-emerald-300",
  },
  {
    title: "Social Media Mastery",
    desc: "Strategic social media management and marketing campaigns to engage, connect, and convert your audience.",
    image: socialMediaImage,
    cardClass: "border-violet-200/90 bg-violet-50/35 hover:border-violet-300",
  },
  {
    title: "Web Design",
    desc: "Modern, conversion-focused website design experiences optimized for brand trust and usability.",
    image: webImage,
    cardClass: "border-amber-200/90 bg-amber-50/35 hover:border-amber-300",
  },
  {
    title: "Content Strategy",
    desc: "Structured content planning and storytelling frameworks that support long-term digital growth.",
    image: contentImage,
    cardClass: "border-rose-200/90 bg-rose-50/35 hover:border-rose-300",
  },
  {
    title: "Mobile Development",
    desc: "Scalable mobile app development for Android and iOS with reliable performance and clean UX.",
    image: mobileDevelopmentImage,
    cardClass: "border-cyan-200/90 bg-cyan-50/35 hover:border-cyan-300",
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
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-border/50 bg-background/70 shadow-sm">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
