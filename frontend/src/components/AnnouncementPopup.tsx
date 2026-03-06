import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, Send, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motionEase } from "@/lib/motion";

const DISMISS_KEY = "gda-announcement-dismissed";
const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const highlights = ["Kenya", "Ethiopia", "Somalia", "Dubai", "Canada"];

const AnnouncementPopup = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY) === "true") return;

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "true");
    }
    setVisible(false);
    setExpanded(false);
  };

  const openPopup = () => {
    setVisible(true);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(DISMISS_KEY);
    }
  };

  const handleInterestSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const details = String(formData.get("details") || "");
    const subject = `Announcement Interest - ${name || "Website Visitor"}`;
    const body =
      [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        "",
        "Interest Details:",
        details || "-",
      ].join("\n");

    window.open(buildGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={openPopup}
        className="fixed right-4 top-24 z-[79] inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.28)] backdrop-blur-md"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 1.1, ease: motionEase }}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <BellRing className="h-4 w-4 text-cyan-300" />
        Announcements
      </motion.button>

      <AnimatePresence>
        {visible && (
          <motion.aside
            initial={{ opacity: 0, y: 24, x: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, x: 16, scale: 0.96 }}
            transition={{ duration: 0.45, ease: motionEase }}
            className="fixed bottom-24 right-4 z-[80] w-[min(92vw,380px)]"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(236,254,255,0.92))] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.28)] backdrop-blur-xl">
              <motion.div
                className="pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-full bg-cyan-300/35 blur-3xl"
                animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.5, 0.35] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-blue-200/45 blur-3xl"
                animate={{ scale: [1.08, 0.94, 1.08], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_12px_28px_rgba(15,23,42,0.22)]"
                      animate={{ rotate: [0, -4, 4, 0] }}
                      transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <BellRing className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Announcement</p>
                      <h3 className="mt-1 text-lg font-extrabold text-slate-950">Expanding Digital Partnerships</h3>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full text-slate-500 hover:bg-white/80"
                    onClick={closePopup}
                    aria-label="Close announcement"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  We are actively onboarding organizations exploring growth across East Africa, the Gulf, and North America.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {highlights.map((item, index) => (
                    <motion.span
                      key={item}
                      className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.06, duration: 0.3 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <Button
                    className="rounded-full px-5"
                    onClick={() => setExpanded((current) => !current)}
                  >
                    {expanded ? "Hide Form" : "I'm Interested"}
                    <Sparkles className="ml-1 h-4 w-4" />
                  </Button>
                  <p className="text-xs font-medium text-slate-500">Quick note, and we will follow up.</p>
                </div>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.form
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 6 }}
                      transition={{ duration: 0.3, ease: motionEase }}
                      className="mt-5 space-y-3 overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white/75 p-4"
                      onSubmit={handleInterestSubmit}
                    >
                      <Input name="name" placeholder="Your name" className="h-11 rounded-xl border-slate-200 bg-white/90" />
                      <Input name="email" placeholder="Email address" type="email" className="h-11 rounded-xl border-slate-200 bg-white/90" />
                      <Textarea
                        name="details"
                        placeholder="Tell us what you are interested in"
                        rows={4}
                        className="rounded-2xl border-slate-200 bg-white/90"
                      />
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs text-slate-500">This message is for interest capture.</p>
                        <Button type="submit" className="rounded-full px-5">
                          Send Interest
                          <Send className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnnouncementPopup;
