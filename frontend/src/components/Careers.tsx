import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="careers" className="py-20 lg:py-28 bg-primary/5">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight max-w-2xl mx-auto">
          Join the Future of <span className="gradient-text">Digital Africa</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          We're building the continent's most ambitious digital transformation team. If you're passionate about technology and Africa's future, we want to hear from you.
        </p>
        <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold">
          <Link to="/careers">
            View Open Positions <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Careers;
