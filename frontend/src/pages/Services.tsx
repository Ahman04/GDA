import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const serviceTracks = [
  {
    title: "Visibility & Demand Generation",
    desc: "SEO, SEM, local discovery, Google Ads, and campaign systems built to increase qualified inbound demand.",
    points: ["Search visibility strategy", "Paid acquisition management", "Analytics and conversion tuning"],
    className: "border-blue-200/80 bg-blue-50/55",
  },
  {
    title: "Brand & Content Systems",
    desc: "Content, social media, and brand design programs that keep your message consistent across every touchpoint.",
    points: ["Social media management", "Content production pipelines", "Brand identity execution"],
    className: "border-violet-200/80 bg-violet-50/55",
  },
  {
    title: "Digital Platforms & Experience",
    desc: "Web and mobile products designed for speed, usability, and measurable business conversion.",
    points: ["Website design and development", "Mobile product delivery", "Performance-focused UX"],
    className: "border-emerald-200/80 bg-emerald-50/55",
  },
];

const engagementPoints = [
  "Discovery sprint and technical audit to define priorities fast",
  "Cross-channel execution model with clear ownership and reporting",
  "Continuous optimization loop driven by analytics and business outcomes",
];

const ServicesPage = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Services"
        title="Growth Systems Built for"
        highlight="Modern African Businesses"
        description="We combine strategy, marketing execution, brand systems, and digital product delivery into service lines that move revenue, visibility, and operational maturity forward."
        primaryCtaLabel="Talk to Our Team"
        primaryCtaTo="/contact"
        secondaryCtaLabel="Request Technical Audit"
        secondaryCtaTo="/technical-audit"
        stats={[
          { value: "9", label: "Core service lines" },
          { value: "15+", label: "Markets supported" },
          { value: "250+", label: "Projects delivered" },
        ]}
        panelTitle="A service stack designed for execution, not just strategy decks."
        panelCopy="Each engagement is structured to give you a clear roadmap, fast implementation, and ongoing optimization support once the core systems are live."
        panelPoints={engagementPoints}
      />
      <Services showViewAll={false} />
      <section className="bg-background py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Service Tracks</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Structured around the decisions your team actually needs to make
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Instead of selling isolated tactics, we organize engagements into focused tracks so your leadership team can see what will drive growth, what will be delivered, and how progress will be measured.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid gap-7 lg:grid-cols-3">
            {serviceTracks.map((track) => (
              <motion.div
                key={track.title}
                variants={fadeUp}
                whileHover={hoverLift}
                className={`rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${track.className}`}
              >
                <h3 className="text-xl font-extrabold text-foreground">{track.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{track.desc}</p>
                <div className="mt-6 space-y-3">
                  {track.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </section>
      <section className="bg-light-gray py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Engagement Model</p>
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  Bring us in for the roadmap, the rollout, or both
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                  Some clients need technical clarity before investing. Others need an execution partner immediately. We support both by starting with diagnostics and scaling into delivery once the priorities are clear.
                </p>
              </div>
              <div className="space-y-4">
                {engagementPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
                    {point}
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button asChild className="rounded-full px-6">
                    <Link to="/contact">Start a Conversation</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary/10">
                    <Link to="/technical-audit">
                      Get an Audit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionSection>
      </section>
      <Process />
      <Testimonials />
    </PageLayout>
  );
};

export default ServicesPage;
