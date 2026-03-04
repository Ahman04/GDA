import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientDots } from "@/components/ui/gradient-dots";

const openings = [
  {
    title: "Social Media Specialist",
    summary:
      "Plan and execute social campaigns, content calendars, and performance reporting across key platforms.",
    type: "Full-time",
    mode: "Hybrid",
    location: "Nairobi",
    apply: "mailto:hello@godigitalafrica.com?subject=Application%20-%20Social%20Media%20Specialist",
  },
  {
    title: "AI Solutions Specialist",
    summary:
      "Design and deploy AI workflows, automation systems, and practical AI solutions for client operations.",
    type: "Full-time",
    mode: "Hybrid",
    location: "Nairobi",
    apply: "mailto:hello@godigitalafrica.com?subject=Application%20-%20AI%20Solutions%20Specialist",
  },
];

const CareersPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-16">
      <GradientDots
        className="pointer-events-none opacity-100"
        duration={20}
        colorCycleDuration={6}
        dotSize={8}
        spacing={10}
      />

      <section className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
            Current Openings
          </h1>
          <p className="text-muted-foreground">
            We are currently hiring for Social Media and AI roles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {openings.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-border bg-card/95 p-6 shadow-sm backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {job.type}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80">
                  {job.mode}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {job.location}
                </span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">{job.title}</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">{job.summary}</p>
              <a
                href={job.apply}
                className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Apply Now
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
