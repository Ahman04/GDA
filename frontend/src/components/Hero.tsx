import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const stats = [
  { value: 12, suffix: "+", label: "Years of Innovation" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Markets Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const partners = ["Google", "Meta", "Microsoft", "AWS", "Oracle", "Shopify"];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-sm text-deep-blue-foreground/60 mt-1">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-deep-blue overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="hero-particle"
          style={{
            width: `${4 + i * 3}px`,
            height: `${4 + i * 3}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/80 via-deep-blue/50 to-deep-blue/90" />

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Enterprise-Grade Digital Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-deep-blue-foreground leading-tight mb-6 animate-fade-in-up">
            Leading Digital{" "}
            <span className="gradient-text">Transformation</span>{" "}
            Across Africa
          </h1>

          <p className="text-lg md:text-xl text-deep-blue-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: "0.2s" }}>
            We architect digital infrastructure, AI automation systems, and performance-driven ecosystems that power Africa's next generation of industry leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold">
              Start Your Digital Transformation
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-deep-blue-foreground/30 text-deep-blue-foreground hover:bg-deep-blue-foreground/10 hover:text-deep-blue-foreground">
              Request Technical Audit
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        {/* Partner logos */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-deep-blue-foreground/40 text-sm mb-6 uppercase tracking-widest font-medium">
            Trusted Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((p) => (
              <span
                key={p}
                className="grayscale-hover text-deep-blue-foreground/70 text-lg font-bold tracking-wide cursor-default select-none"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
