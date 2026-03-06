import { motion } from "framer-motion";
import { Compass, Building, Megaphone, RefreshCw } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: Compass,
    num: "01",
    tag: "Audit",
    title: "Technical Discovery",
    desc: "Deep-dive analysis of your digital landscape and growth opportunities",
    circleClass: "border-blue-300/70 bg-blue-50/90 group-hover:border-blue-500/70",
    iconClass: "text-blue-600",
    numClass: "text-blue-600",
    panelClass: "border-blue-200/80 bg-white/85 shadow-[0_18px_45px_rgba(59,130,246,0.12)]",
    tagClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: Building,
    num: "02",
    tag: "Plan",
    title: "Growth Architecture",
    desc: "Strategic blueprint for scalable digital infrastructure",
    circleClass: "border-emerald-300/70 bg-emerald-50/90 group-hover:border-emerald-500/70",
    iconClass: "text-emerald-600",
    numClass: "text-emerald-600",
    panelClass: "border-emerald-200/80 bg-white/85 shadow-[0_18px_45px_rgba(16,185,129,0.12)]",
    tagClass: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Megaphone,
    num: "03",
    tag: "Launch",
    title: "Omnichannel Execution",
    desc: "Coordinated deployment across all digital touchpoints",
    circleClass: "border-violet-300/70 bg-violet-50/90 group-hover:border-violet-500/70",
    iconClass: "text-violet-600",
    numClass: "text-violet-600",
    panelClass: "border-violet-200/80 bg-white/85 shadow-[0_18px_45px_rgba(139,92,246,0.12)]",
    tagClass: "bg-violet-100 text-violet-700",
  },
  {
    icon: RefreshCw,
    num: "04",
    tag: "Optimize",
    title: "Continuous Optimization",
    desc: "Data-driven iteration for sustained performance improvement",
    circleClass: "border-cyan-300/70 bg-cyan-50/90 group-hover:border-cyan-500/70",
    iconClass: "text-cyan-600",
    numClass: "text-cyan-600",
    panelClass: "border-cyan-200/80 bg-white/85 shadow-[0_18px_45px_rgba(6,182,212,0.12)]",
    tagClass: "bg-cyan-100 text-cyan-700",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-light-gray">
      <MotionSection className="container mx-auto px-4 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Growth <span className="gradient-text">Methodology</span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-10 hidden lg:block">
            <svg
              viewBox="0 0 1200 320"
              className="h-[340px] w-full"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="journeyPath" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.38)" />
                  <stop offset="35%" stopColor="rgba(16,185,129,0.45)" />
                  <stop offset="68%" stopColor="rgba(139,92,246,0.45)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.42)" />
                </linearGradient>
              </defs>
              <path
                d="M70 170C180 70 300 70 410 170S640 270 760 170 980 70 1130 165"
                fill="none"
                stroke="url(#journeyPath)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="10 14"
              />
            </svg>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            {steps.map((s) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                whileHover={hoverLift}
                className={`relative group lg:${s.num === "02" || s.num === "04" ? "pt-28" : "pt-6"}`}
              >
                <div className="relative mx-auto mb-5 flex w-fit flex-col items-center">
                  <span className={`mb-3 text-xs font-extrabold tracking-[0.35em] ${s.numClass}`}>{s.num}</span>
                <div className={`relative z-10 w-20 h-20 rounded-full border-2 flex items-center justify-center transition-colors shadow-[0_10px_30px_rgba(15,23,42,0.08)] ${s.circleClass}`}>
                  <s.icon className={`w-7 h-7 ${s.iconClass}`} />
                </div>
                </div>
                <div className={`rounded-[1.75rem] border p-6 text-center backdrop-blur-sm ${s.panelClass}`}>
                  <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] ${s.tagClass}`}>
                    {s.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default Process;
