import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/motion-section";
import { Lightbulb, Award, ShieldCheck, Users, Globe, Rocket } from "lucide-react";
import aboutImage from "@/images/About.webp";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const aboutTextVariants = {
  hidden: { opacity: 0, x: -120 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const aboutImageVariants = {
  hidden: { opacity: 0, x: 120 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Pioneering next-generation digital solutions",
    cardClass: "border-blue-200/90 border-t-[3px] border-t-blue-500 bg-slate-50/80 hover:border-blue-300",
    iconWrapClass: "bg-blue-100/80 group-hover:bg-blue-100",
    iconClass: "text-blue-600",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Delivering world-class outcomes consistently",
    cardClass: "border-emerald-200/90 border-t-[3px] border-t-emerald-500 bg-slate-50/80 hover:border-emerald-300",
    iconWrapClass: "bg-emerald-100/80 group-hover:bg-emerald-100",
    iconClass: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparent partnerships built on trust",
    cardClass: "border-amber-200/90 border-t-[3px] border-t-amber-500 bg-slate-50/80 hover:border-amber-300",
    iconWrapClass: "bg-amber-100/80 group-hover:bg-amber-100",
    iconClass: "text-amber-600",
  },
  {
    icon: Users,
    title: "Client Centric",
    desc: "Your success drives every decision we make",
    cardClass: "border-violet-200/90 border-t-[3px] border-t-violet-500 bg-slate-50/80 hover:border-violet-300",
    iconWrapClass: "bg-violet-100/80 group-hover:bg-violet-100",
    iconClass: "text-violet-600",
  },
  {
    icon: Globe,
    title: "Pan African Vision",
    desc: "Building digital bridges across the continent",
    cardClass: "border-rose-200/90 border-t-[3px] border-t-rose-500 bg-slate-50/80 hover:border-rose-300",
    iconWrapClass: "bg-rose-100/80 group-hover:bg-rose-100",
    iconClass: "text-rose-600",
  },
  {
    icon: Rocket,
    title: "Empowerment",
    desc: "Enabling organizations to scale with confidence",
    cardClass: "border-cyan-200/90 border-t-[3px] border-t-cyan-500 bg-slate-50/80 hover:border-cyan-300",
    iconWrapClass: "bg-cyan-100/80 group-hover:bg-cyan-100",
    iconClass: "text-cyan-600",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <MotionSection className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text */}
          <motion.div variants={aboutTextVariants}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              About <span className="gradient-text">Go Digital Africa</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GoDigital Africa is the architect of digital success stories, built on the belief that every business, regardless of size, deserves to thrive in the online landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We deliver data-driven digital strategy, SEO and SEM, social media campaigns, content creation, and analytics-led optimization for organizations across Africa and global markets.
            </p>
          </motion.div>

          {/* About image */}
          <motion.div variants={aboutImageVariants} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center border border-border overflow-hidden">
              <img
                src={aboutImage}
                alt="Digital Infrastructure — Powering Africa's Digital Future"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={hoverLift}
              className={`card-lift group rounded-2xl p-8 cursor-default border min-h-[280px] shadow-[0_6px_20px_hsl(216_30%_20%_/_0.05)] ${v.cardClass}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-[0_8px_20px_hsl(216_25%_20%_/_0.12)] ${v.iconWrapClass}`}
              >
                <v.icon className={`w-6 h-6 ${v.iconClass}`} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-3 leading-tight">{v.title}</h3>
              <p className="text-[1.05rem] leading-relaxed text-slate-600">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default About;
