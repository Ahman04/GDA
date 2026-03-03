import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Compass, Building, Megaphone, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Compass,
    num: "01",
    title: "Technical Discovery",
    desc: "Deep-dive analysis of your digital landscape and growth opportunities",
    circleClass: "border-blue-300/70 bg-blue-50/70 group-hover:border-blue-500/70",
    iconClass: "text-blue-600",
    numClass: "text-blue-600",
  },
  {
    icon: Building,
    num: "02",
    title: "Growth Architecture",
    desc: "Strategic blueprint for scalable digital infrastructure",
    circleClass: "border-emerald-300/70 bg-emerald-50/70 group-hover:border-emerald-500/70",
    iconClass: "text-emerald-600",
    numClass: "text-emerald-600",
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Omnichannel Execution",
    desc: "Coordinated deployment across all digital touchpoints",
    circleClass: "border-violet-300/70 bg-violet-50/70 group-hover:border-violet-500/70",
    iconClass: "text-violet-600",
    numClass: "text-violet-600",
  },
  {
    icon: RefreshCw,
    num: "04",
    title: "Continuous Optimization",
    desc: "Data-driven iteration for sustained performance improvement",
    circleClass: "border-cyan-300/70 bg-cyan-50/70 group-hover:border-cyan-500/70",
    iconClass: "text-cyan-600",
    numClass: "text-cyan-600",
  },
];

const Process = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="process" className="py-20 lg:py-28 bg-light-gray">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Growth <span className="gradient-text">Methodology</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center group">
                {/* Circle */}
                <div className={`relative z-10 w-16 h-16 mx-auto mb-5 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm ${s.circleClass}`}>
                  <s.icon className={`w-7 h-7 ${s.iconClass}`} />
                </div>
                <span className={`font-extrabold text-xs tracking-widest ${s.numClass}`}>{s.num}</span>
                <h3 className="font-bold text-foreground mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
