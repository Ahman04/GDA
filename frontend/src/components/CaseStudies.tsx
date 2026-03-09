import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import rubisEnergyImage from "@/images/Rubis Energy.jpg";
import sidmsImage from "@/images/SIDMS.jpg";
import ecommerceImage from "@/images/ECOMERCE.jpg";
import { fadeUp, staggerContainer } from "@/lib/motion";

const cases = [
  {
    title: "Rubis Energy",
    industry: "Local SEO & Visibility",
    desc: "Nationwide Google Maps optimization strategy ensuring maximum digital visibility across their regional network.",
    image: rubisEnergyImage,
    accentClass: "from-blue-500/15 via-cyan-500/10 to-white",
    industryClass: "text-blue-600",
  },
  {
    title: "SIDMS",
    industry: "Government Systems",
    desc: "Centralized national information hub for the Somali Integrated Disaster Management System.",
    image: sidmsImage,
    accentClass: "from-emerald-500/15 via-lime-500/10 to-white",
    industryClass: "text-emerald-600",
  },
  {
    title: "Legacy Kenya",
    industry: "E-commerce & Heritage",
    desc: "Premium e-commerce platform integrated with high-velocity marketing to scale cultural commerce.",
    image: ecommerceImage,
    accentClass: "from-violet-500/15 via-rose-500/10 to-white",
    industryClass: "text-violet-600",
  },
];

type CaseStudiesProps = {
  showViewAll?: boolean;
};

const CaseStudies = ({ showViewAll = true }: CaseStudiesProps) => {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-background">
      <MotionSection className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={fadeUp}
          className="mb-14 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Engineering <span className="gradient-text">Real Impact</span>
            </h2>
          </div>
          {showViewAll ? (
            <Button asChild variant="outline" className="mx-auto rounded-full border-primary/30 bg-white/80 px-6 text-primary hover:bg-primary/10 md:mx-0">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          ) : null}
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="card-lift group bg-card border border-border rounded-2xl overflow-hidden cursor-default"
            >
              <div className={`relative flex h-52 items-end overflow-hidden bg-gradient-to-br ${c.accentClass} p-6`}>
                <motion.img
                  src={c.image}
                  alt={`${c.title} case study`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-transparent"
                  whileHover={{ opacity: 0.88 }}
                />
                <motion.div
                  className="absolute right-5 top-5 rounded-full border border-border/70 bg-white/80 px-3 py-1 text-xs font-bold text-foreground shadow-sm"
                  whileHover={{ y: -2, scale: 1.03 }}
                >
                  Case Study
                </motion.div>
              </div>
              <motion.div className="p-6" whileHover={{ y: -3 }}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${c.industryClass}`}>{c.industry}</span>
                <h3 className="font-bold text-foreground mt-1 mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default CaseStudies;
