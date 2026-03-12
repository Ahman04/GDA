import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import PageHero from "@/components/PageHero";
import PageLayout from "@/components/PageLayout";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import careersHeroImage from "@/images/careerimg.webp";

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
  const location = useLocation();

  useEffect(() => {
    // Support direct links to the openings section while preserving normal route scroll reset.
    if (location.hash === "#openings") {
      requestAnimationFrame(() => {
        document.getElementById("openings")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash]);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Careers"
        title="Join a Team Building"
        highlight="Digital Growth Infrastructure"
        description="We are building a team that combines strategy, execution, product thinking, and AI capability to help organizations across Africa grow with more clarity and speed."
        primaryCtaLabel="No Jobs Available Right Now"
        primaryCtaTo="/contact"
        secondaryCtaLabel="Contact Our Team"
        secondaryCtaTo="/contact"
        stats={[
          { value: "0", label: "Open roles now" },
          { value: "Hybrid", label: "Working model" },
          { value: "Nairobi", label: "Primary base" },
        ]}
        panelTitle="Build with a team focused on clarity, execution, and digital growth."
        panelCopy="The strongest candidates for us are not just specialists. They are operators who understand outcomes, communicate well, and can work across fast-moving client environments."
        panelPoints={culturePoints}
        panelImageSrc={careersHeroImage}
        panelImageAlt="Go Digital Africa careers"
        panelBadge="Careers"
      />

      {/* Keep the "no openings" state explicit so the page still works as a future hiring landing page. */}
      <section id="openings" className="bg-background py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Open Roles</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Current opportunities at Go Digital Africa</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              There are no active openings at the moment. You can still reach out if you want to share your profile for future consideration.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-slate-200 bg-card/95 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="mx-auto max-w-2xl">
              <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                No Open Positions
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-foreground">We are not actively hiring right now</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                If you would like to be considered for future opportunities, send your profile and a short introduction to our team and we can keep your details on file.
              </p>
              <Button asChild className="mt-6 rounded-full px-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@godigitalafrica.com&su=Future%20Career%20Interest%20-%20Go%20Digital%20Africa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Share Your Profile
                </a>
              </Button>
            </div>
          </motion.div>
        </MotionSection>
      </section>

      {/* Separate the standing hiring process from the current role availability. */}
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
