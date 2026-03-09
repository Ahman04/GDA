import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate, type Location } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motionEase } from "@/lib/motion";

const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const TechnicalAuditModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location } | undefined;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const closeModal = () => {
    const fallbackPath = state?.backgroundLocation
      ? `${state.backgroundLocation.pathname}${state.backgroundLocation.search}${state.backgroundLocation.hash}`
      : "/";

    navigate(fallbackPath, { replace: true });
  };

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
    closeModal();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-[linear-gradient(180deg,#f5fbff_0%,#ffffff_100%)] p-6 shadow-[0_30px_120px_rgba(15,23,42,0.35)] md:p-8"
        initial={{ opacity: 0, y: 22, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.32, ease: motionEase }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.1),transparent_30%)]" />

        <div className="relative">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Audit Request Form</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Request Technical Audit
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                Share your current setup, blockers, and goals. We will review the context and come back with the right audit direction.
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 rounded-full"
              onClick={closeModal}
              aria-label="Close audit request form"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="full_name" placeholder="Full Name" className="h-12 rounded-2xl border-slate-200 bg-white/95 px-4 shadow-sm" />
              <Input name="email" type="email" placeholder="Work Email" className="h-12 rounded-2xl border-slate-200 bg-white/95 px-4 shadow-sm" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="company" placeholder="Company Name" className="h-12 rounded-2xl border-slate-200 bg-white/95 px-4 shadow-sm" />
              <Input name="website" placeholder="Website URL" className="h-12 rounded-2xl border-slate-200 bg-white/95 px-4 shadow-sm" />
            </div>
            <Input
              name="challenge"
              placeholder="Primary challenge: SEO, performance, infrastructure, analytics, automation..."
              className="h-12 rounded-2xl border-slate-200 bg-white/95 px-4 shadow-sm"
            />
            <Textarea
              name="details"
              rows={7}
              placeholder="Describe your current systems, blockers, desired outcomes, and timeline."
              className="rounded-[1.5rem] border-slate-200 bg-white/95 px-4 py-3 shadow-sm"
            />

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500">
                Submitting opens a pre-filled email to <span className="font-semibold text-slate-700">{SALES_EMAIL}</span>.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="outline" className="rounded-full border-slate-300 px-6" onClick={closeModal}>
                  Cancel
                </Button>
                <Button className="rounded-full px-7 text-base font-semibold">
                  Submit Audit Request
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TechnicalAuditModal;
