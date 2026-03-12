import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

type PageHeroStat = {
  value: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaTo: string;
  secondaryCtaLabel: string;
  secondaryCtaTo: string;
  stats: PageHeroStat[];
  panelTitle: string;
  panelCopy: string;
  panelPoints: string[];
  panelImageSrc?: string;
  panelImageAlt?: string;
  panelBadge?: string;
};

const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  primaryCtaLabel,
  primaryCtaTo,
  secondaryCtaLabel,
  secondaryCtaTo,
  stats,
  panelTitle,
  panelCopy,
  panelPoints,
  panelImageSrc,
  panelImageAlt,
  panelBadge = "Go Digital Africa",
}: PageHeroProps) => {
  const location = useLocation();
  const primaryState = primaryCtaTo === "/technical-audit" ? { backgroundLocation: location } : undefined;
  const secondaryState = secondaryCtaTo === "/technical-audit" ? { backgroundLocation: location } : undefined;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),linear-gradient(180deg,#f8fcff_0%,#ffffff_55%,#f4f8fb_100%)] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <MotionSection className="container relative mx-auto px-4 lg:px-8" variants={staggerContainer}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(460px,0.92fr)] xl:grid-cols-[minmax(0,1.02fr)_minmax(520px,0.98fr)]">
          <div>
            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              {title} <span className="gradient-text">{highlight}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {description}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-7 text-base font-semibold">
                <Link to={primaryCtaTo} state={primaryState}>
                  {primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-primary/30 bg-white/80 px-7 text-base text-primary hover:bg-primary/10">
                <Link to={secondaryCtaTo} state={secondaryState}>{secondaryCtaLabel}</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-border/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                  <div className="text-3xl font-extrabold text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 blur-3xl" />
            {panelImageSrc ? (
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_26px_80px_rgba(15,23,42,0.18)]">
                <motion.img
                  src={panelImageSrc}
                  alt={panelImageAlt || panelTitle}
                  className="h-[560px] w-full object-cover object-center lg:h-[600px]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 46vw, 100vw"
                  animate={{
                    scale: [1.02, 1.06, 1.02],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.18)_34%,rgba(15,23,42,0.68)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <motion.div
                    className="mb-5 inline-flex rounded-full border border-white/20 bg-slate-950/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {panelBadge}
                  </motion.div>
                  <h2 className="max-w-lg text-2xl font-extrabold leading-tight drop-shadow-[0_4px_16px_rgba(15,23,42,0.45)] md:text-[2rem]">
                    {panelTitle}
                  </h2>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_26px_80px_rgba(15,23,42,0.18)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(6,182,212,0.2))]" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {panelBadge}
                  </div>
                  <h2 className="text-2xl font-extrabold leading-tight">{panelTitle}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-200/85">{panelCopy}</p>
                  <div className="mt-8 space-y-3">
                    {panelPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                        <span className="text-sm leading-6 text-white/90">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </MotionSection>
    </section>
  );
};

export default PageHero;
