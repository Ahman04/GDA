import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionSection } from "@/components/ui/motion-section";
import { fadeUp } from "@/lib/motion";

const Careers = () => {
  return (
    <section id="careers" className="py-20 lg:py-28 bg-primary/5">
      <MotionSection className="container mx-auto px-4 lg:px-8 text-center">
        <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</motion.p>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight max-w-2xl mx-auto">
          Join the Future of <span className="gradient-text">Digital Africa</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          We're building the continent's most ambitious digital transformation team. If you're passionate about technology and Africa's future, we want to hear from you.
        </motion.p>
        <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold">
          <Link to="/careers">
            View Open Positions <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default Careers;
