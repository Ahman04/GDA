import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronLeft, Radar, ShieldCheck, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientDots } from "@/components/ui/gradient-dots";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SALES_EMAIL = "sales@godigitalafrica.com";

const auditHighlights = [
  {
    title: "Technical Infrastructure",
    description: "We review hosting, performance bottlenecks, security posture, and deployment friction.",
    icon: ShieldCheck,
  },
  {
    title: "Search & Visibility",
    description: "We identify crawl, indexing, content, and local-discovery issues limiting your growth.",
    icon: Radar,
  },
  {
    title: "Systems & Workflow",
    description: "We surface gaps across analytics, tooling, automations, and team operating flow.",
    icon: Workflow,
  },
];

const auditDeliverables = [
  "Executive summary with the highest-priority issues",
  "Quick wins your team can implement immediately",
  "Technical roadmap organized by effort and impact",
  "Recommended next steps for growth, visibility, and platform stability",
];

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const TechnicalAuditPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("full_name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const website = String(formData.get("website") || "");
    const challenge = String(formData.get("challenge") || "");
    const details = String(formData.get("details") || "");
    const subject = `Technical Audit Request - ${company || fullName || "Website Inquiry"}`;
    const body = [
      `Full Name: ${fullName || "-"}`,
      `Work Email: ${email || "-"}`,
      `Company: ${company || "-"}`,
      `Website: ${website || "-"}`,
      `Primary Challenge: ${challenge || "-"}`,
      "",
      "Audit Context:",
      details || "-",
    ].join("\n");

    window.open(buildGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f4fbff_0%,#ffffff_45%,#f5f8fb_100%)] px-4 py-16">
      <GradientDots
        className="pointer-events-none opacity-75"
        duration={18}
        colorCycleDuration={6}
        backgroundColor="transparent"
        dotSize={6}
        spacing={14}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-cyan-100 bg-white/85 px-6 py-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-md md:flex-row md:items-end md:justify-between md:px-8"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Technical Audit</p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Find the bottlenecks slowing down your digital growth
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Share your current setup, business goals, and technical challenges. We will review your stack and come back with a focused audit path.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-slate-200 bg-white/90 px-6">
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <motion.section
            variants={fadeUp}
            className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.16)]"
          >
            <div className="relative p-7 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(160deg,rgba(2,6,23,0.98),rgba(8,47,73,0.78))]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  <CheckCircle2 className="h-4 w-4" />
                  What You Get
                </div>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight md:text-3xl">
                  A sharper view of what is blocking performance, visibility, and scale.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200/85">
                  This is designed for teams that need technical clarity before investing further in marketing, infrastructure, or product delivery.
                </p>

                <div className="mt-8 space-y-4">
                  {auditHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5 backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-200/80">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-[1.75rem] border border-cyan-300/15 bg-cyan-400/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Deliverables</p>
                  <div className="mt-4 space-y-3">
                    {auditDeliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-6 text-white/90">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur-md md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Audit Request Form</p>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-950 md:text-3xl">Tell us where the system is breaking down</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                The more context you share, the more useful our first response will be. Focus on visibility issues, performance concerns, tooling friction, or operational blockers.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="full_name" placeholder="Full Name" className="h-12 rounded-2xl border-slate-200 bg-white/90 px-4 shadow-sm" />
                <Input name="email" type="email" placeholder="Work Email" className="h-12 rounded-2xl border-slate-200 bg-white/90 px-4 shadow-sm" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="company" placeholder="Company Name" className="h-12 rounded-2xl border-slate-200 bg-white/90 px-4 shadow-sm" />
                <Input name="website" placeholder="Website URL" className="h-12 rounded-2xl border-slate-200 bg-white/90 px-4 shadow-sm" />
              </div>
              <Input
                name="challenge"
                placeholder="Primary challenge: SEO, performance, infrastructure, analytics, automation..."
                className="h-12 rounded-2xl border-slate-200 bg-white/90 px-4 shadow-sm"
              />
              <Textarea
                name="details"
                rows={8}
                placeholder="Describe your current setup, tools, blockers, desired outcomes, and any timeline constraints."
                className="rounded-[1.5rem] border-slate-200 bg-white/90 px-4 py-3 shadow-sm"
              />

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-500">
                  Submitting opens a pre-filled email to <span className="font-semibold text-slate-700">{SALES_EMAIL}</span>.
                </p>
                <Button className="h-12 rounded-full px-7 text-base font-semibold">
                  Submit Audit Request
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default TechnicalAuditPage;
