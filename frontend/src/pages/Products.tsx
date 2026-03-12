import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";
import productsHeroImage from "@/images/AI.webp";

const productFitCardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const productUseCases = [
  {
    title: "Linkly SaaS",
    audience: "For teams running multi-channel content and performance reporting",
    outcome: "Brings scheduling, analytics, and engagement intelligence into one operating view.",
    className: "border-blue-200/80 bg-blue-50/55",
  },
  {
    title: "Optirise AI",
    audience: "For brands competing on search visibility and digital discoverability",
    outcome: "Accelerates keyword intelligence, optimization workflows, and content opportunity mapping.",
    className: "border-violet-200/80 bg-violet-50/55",
  },
  {
    title: "SkillLink",
    audience: "For organizations building distributed technical teams and delivery capacity",
    outcome: "Creates a more reliable pipeline for sourcing, matching, and managing technical talent.",
    className: "border-emerald-200/80 bg-emerald-50/55",
  },
  {
    title: "SwiftSkil",
    audience: "For teams that need faster workforce screening and talent-readiness decisions",
    outcome: "Helps operators validate skills quickly and reduce friction between sourcing, evaluation, and deployment.",
    className: "border-cyan-200/80 bg-cyan-50/55",
  },
  {
    title: "Nyumba Tek",
    audience: "For property and real estate teams managing units, tenants, and operations",
    outcome: "Creates better operational control across property workflows, communication, and visibility.",
    className: "border-amber-200/80 bg-amber-50/55",
  },
  {
    title: "WatanStay Boka",
    audience: "For hospitality operators handling bookings, guest journeys, and service operations",
    outcome: "Improves reservation flow, guest coordination, and hospitality execution in one platform.",
    className: "border-rose-200/80 bg-rose-50/55",
  },
  {
    title: "URBANOVA",
    audience: "For urban projects, community-facing initiatives, and digital city operations",
    outcome: "Supports planning, service coordination, and digital engagement around urban innovation work.",
    className: "border-slate-200/80 bg-slate-50/55",
  },
];

const productSignals = [
  "Built for operational speed, not just product demos",
  "Designed around African market realities and distributed teams",
  "Structured for demos, onboarding, and enterprise conversations",
];

const ProductsPage = () => {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Products"
        title="Platform Products Designed to"
        highlight="Support Digital Scale"
        description="Our product suite extends beyond marketing delivery into operational tooling, search intelligence, and digital talent infrastructure for growth-focused teams."
        primaryCtaLabel="Request a Product Demo"
        primaryCtaTo="/contact"
        secondaryCtaLabel="Talk to Sales"
        secondaryCtaTo="/contact"
        stats={[
          { value: "7", label: "Active product lines" },
          { value: "AI", label: "Workflow-enabled tooling" },
          { value: "B2B", label: "Built for teams and operators" },
        ]}
        panelTitle="Operational products built to turn strategy into repeatable systems."
        panelCopy="These platforms are meant to help clients move faster after strategy is defined, whether that means managing content, improving search operations, or expanding technical delivery capacity."
        panelPoints={productSignals}
        panelImageSrc={productsHeroImage}
        panelImageAlt="AI-powered product ecosystem"
        panelBadge="Product Ecosystem"
      />
      {/* Reuse the interactive product rail as a full catalog by disabling the homepage CTA wrapper. */}
      <Products showViewAll={false} />
      <section className="bg-light-gray py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Product Fit</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Each product is tied to a clear business operating problem
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The product line is intentionally focused. Each platform solves a specific operational gap and creates a stronger bridge between your growth plan and day-to-day execution.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {productUseCases.map((item, index) => (
              <motion.div
                key={item.title}
                variants={productFitCardVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={hoverLift}
                className={`rounded-[2rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${item.className}`}
              >
                <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-foreground/80">{item.audience}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.outcome}</p>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </section>
      <section className="bg-background py-20 lg:py-24">
        <MotionSection className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeUp} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Demo Flow</p>
                <h2 className="text-3xl font-extrabold md:text-4xl">
                  Interested in one platform or comparing the full stack?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200/85">
                  We can walk your team through a single product, recommend the right fit based on your use case, or show how the platforms can support a broader digital growth program.
                </p>
              </div>
              <div className="space-y-4">
                {productSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/85">
                    {signal}
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <motion.div
                    animate={{
                      scale: [1, 1.018, 1],
                      boxShadow: [
                        "0 0 0 rgba(34,211,238,0)",
                        "0 0 0.85rem rgba(34,211,238,0.18)",
                        "0 0 0 rgba(34,211,238,0)",
                      ],
                    }}
                    transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Button asChild className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                      <Link to="/contact">Request a Demo</Link>
                    </Button>
                  </motion.div>
                  <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                    <Link to="/services">
                      Explore Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionSection>
      </section>
      <Testimonials />
    </PageLayout>
  );
};

export default ProductsPage;
