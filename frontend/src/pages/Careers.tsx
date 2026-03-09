import { motion } from "framer-motion";

import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const openings = [
  {
    title: "Social Media Specialist",
    summary:
      "Plan and execute social campaigns, content calendars, and performance reporting across key platforms.",
    type: "Full-time",
    mode: "Hybrid",
    location: "Nairobi",
    apply: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@godigitalafrica.com&su=Application%20-%20Social%20Media%20Specialist",
  },
  {
    title: "AI Solutions Specialist",
    summary:
      "Design and deploy AI workflows, automation systems, and practical AI solutions for client operations.",
    type: "Full-time",
    mode: "Hybrid",
    location: "Nairobi",
    apply: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@godigitalafrica.com&su=Application%20-%20AI%20Solutions%20Specialist",
  },
];

const culturePoints = [
  "Work on digital transformation projects that shape real operating outcomes.",
  "Collaborate across strategy, execution, design, product, and AI delivery.",
  "Build for African markets with clients spanning multiple industries and regions.",
];

const hiringSteps = [
  "Initial review of your profile and portfolio or supporting work.",
  "Practical conversation around your craft, thinking, and delivery approach.",
  "Final alignment on role scope, fit, and start plan.",
];

const CareersPage = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Join a Team Building"
        highlight="Digital Growth Infrastructure"
        description="We are building a team that combines strategy, execution, product thinking, and AI capability to help organizations across Africa grow with more clarity and speed."
        primaryCtaLabel="Apply for Open Roles"
        primaryCtaTo="/careers#openings"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaTo="/contact"
        stats={[
          { value: "2", label: "Open roles now" },
          { value: "Hybrid", label: "Working model" },
          { value: "Nairobi", label: "Primary base" },
        ]}
        panelTitle="We hire for people who can think clearly, execute reliably, and keep improving."
        panelCopy="The strongest candidates for us are not just specialists. They are operators who understand outcomes, communicate well, and can work across fast-moving client environments."
        panelPoints={culturePoints}
      />

      <section id="openings" className="bg-background py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Open Roles</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Current opportunities at Go Digital Africa</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              We are hiring selectively for roles that strengthen our delivery quality and expand what we can build for clients.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
            {openings.map((job) => (
              <motion.article
                key={job.title}
                variants={fadeUp}
                whileHover={hoverLift}
                className="rounded-[2rem] border border-border bg-card/95 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{job.type}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/80">{job.mode}</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">{job.location}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">{job.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{job.summary}</p>
                <Button asChild className="mt-6 rounded-full px-6">
                  <a href={job.apply} target="_blank" rel="noreferrer">
                    Apply Now
                  </a>
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </MotionSection>
      </section>

      <section className="bg-light-gray py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="grid gap-8 rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">How We Hire</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">A straightforward process focused on fit and execution</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                We keep the hiring process simple. The goal is to understand how you think, how you work, and where you can contribute most effectively.
              </p>
            </div>
            <div className="space-y-4">
              {hiringSteps.map((step) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
                  {step}
                </div>
              ))}
            </div>
          </motion.div>
        </MotionSection>
      </section>
    </PageLayout>
  );
};

export default CareersPage;
