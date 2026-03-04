import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientDots } from "@/components/ui/gradient-dots";

const TechnicalAuditPage = () => {
  return (
    <main className="relative min-h-screen bg-light-gray px-4 py-16 overflow-hidden">
      <GradientDots
        className="opacity-90 pointer-events-none"
        duration={20}
        colorCycleDuration={7}
        backgroundColor="hsl(var(--secondary))"
        dotSize={7}
        spacing={11}
      />
      <div className="absolute inset-0 bg-white/55 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl bg-white/85 px-5 py-4 shadow-sm backdrop-blur-[2px]">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Technical Audit</p>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
              Request Technical Audit
            </h1>
            <p className="text-slate-700 mt-2 font-medium">
              Share your current digital setup and goals. Our team will review and get back to you.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full px-5">
            <Link to="/">Back Home</Link>
          </Button>
        </div>

        <section className="rounded-2xl border border-slate-200/80 bg-white/92 p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-[2px]">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Work Email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Company Name" />
              <Input placeholder="Website URL" />
            </div>
            <Input placeholder="Primary challenge (SEO, infrastructure, performance, etc.)" />
            <Textarea
              rows={6}
              placeholder="Tell us about your current systems, target outcomes, and timeline..."
            />
            <Button className="w-full rounded-full h-11 bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Audit Request
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default TechnicalAuditPage;
