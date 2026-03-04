import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GradientDots } from "@/components/ui/gradient-dots";

const TechnicalAuditPage = () => {
  return (
    <main className="relative min-h-screen bg-light-gray px-4 py-16 overflow-hidden">
      <GradientDots className="opacity-35 pointer-events-none" duration={20} colorCycleDuration={8} backgroundColor="hsl(var(--secondary))" />
      <div className="absolute inset-0 bg-light-gray/75 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Technical Audit</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Request Technical Audit</h1>
            <p className="text-muted-foreground mt-2">
              Share your current digital setup and goals. Our team will review and get back to you.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full px-5">
            <Link to="/">Back Home</Link>
          </Button>
        </div>

        <section className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
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
