import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientDots } from "@/components/ui/gradient-dots";

const CareersPage = () => {
  return (
    <main className="relative min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden">
      <GradientDots className="opacity-35 pointer-events-none" duration={22} colorCycleDuration={9} />
      <div className="absolute inset-0 bg-background/70 pointer-events-none" />
      <section className="relative z-10 w-full max-w-xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm backdrop-blur-[2px]">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
          No jobs available at the moment.
        </h1>
        <p className="text-muted-foreground mb-8">
          Please check back later for future opportunities at Go Digital Africa.
        </p>
        <Button asChild className="rounded-full px-6">
          <Link to="/">Back to Home</Link>
        </Button>
      </section>
    </main>
  );
};

export default CareersPage;
