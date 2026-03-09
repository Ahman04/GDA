import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BellRing, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { motionEase } from "@/lib/motion";
import announcementImage from "@/images/hero3.png";

const DISMISS_KEY = "gda-announcement-dismissed";
const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const highlights = [
  "Kenya",
  "Ethiopia",
  "Somalia",
  "Ghana",
  "Rwanda",
  "Senegal",
  "Nigeria",
  "Tanzania",
  "Djibouti",
  "Dubai",
  "Canada",
];

const announcementMoments = [
  "Entering new markets and need a sharper execution partner",
  "Fixing weak digital infrastructure before scaling campaigns",
  "Aligning marketing, technology, and operations into one system",
];

const AnnouncementPopup = () => {
  const [detailOpen, setDetailOpen] = useState(false);

  const closePopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "true");
    }
    setDetailOpen(false);
  };

  const openPopup = () => {
    setDetailOpen(true);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(DISMISS_KEY);
    }
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
        {detailOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-slate-950/72 px-3 py-3 backdrop-blur-md md:px-6 md:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDetailOpen(false)}
          >
            <motion.article
              className="relative mx-auto flex h-full max-h-[calc(100vh-1.5rem)] w-full max-w-[1500px] flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(2,6,23,0.98),rgba(7,20,34,0.98))] shadow-[0_30px_120px_rgba(15,23,42,0.45)] md:max-h-[calc(100vh-3rem)]"
              initial={{ opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.99 }}
              transition={{ duration: 0.35, ease: motionEase }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)]" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 h-11 w-11 rounded-full border border-white/10 bg-slate-950/45 text-white hover:bg-white/10"
                onClick={() => setDetailOpen(false)}
                aria-label="Close full announcement"
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="relative grid h-full min-h-0 lg:grid-cols-[1.18fr_0.82fr]">
                <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                  <img
                    src={announcementImage}
                    alt="Go Digital Africa expansion announcement"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.28)_32%,rgba(2,6,23,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8 lg:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-200">Announcement</p>
                    <h3 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                      Expanding Digital Partnerships Across Priority Markets
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200/88 md:text-base">
                      We are opening a new phase of partnership conversations for teams that need stronger execution across digital growth, technical delivery, and market expansion.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {highlights.slice(0, 8).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-h-0 overflow-y-auto p-6 text-white md:p-8 lg:p-10">
                  <div className="max-w-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why this matters</p>
                    <p className="mt-4 text-sm leading-7 text-slate-200/82 md:text-base">
                      We are opening more conversations with operators, brands, and institutions that need stronger digital execution across growth, platforms, and technical delivery.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-200/82 md:text-base">
                      This announcement is built around the strongest attention hooks for users: urgency, expansion pressure, weak digital systems, and a clear promise of execution clarity.
                    </p>

                    <div className="mt-8 space-y-3">
                      {announcementMoments.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/90">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[1.6rem] border border-cyan-300/15 bg-cyan-400/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Who this is for</p>
                      <div className="mt-4 space-y-3 text-sm leading-7 text-white/88">
                        <p>Growth-stage companies entering new regions and needing better digital execution.</p>
                        <p>Organizations with fragmented marketing, product, and technology workflows.</p>
                        <p>Teams that want clearer visibility into what is blocking scale and performance.</p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button
                        className="rounded-full px-5"
                        onClick={() => {
                          window.open(
                            buildGmailComposeUrl(
                              "Announcement Interest - Digital Partnerships",
                              "Hello Go Digital Africa,\n\nI am interested in learning more about the partnership announcement."
                            ),
                            "_blank",
                            "noopener,noreferrer"
                          );
                          closePopup();
                        }}
                      >
                        I'm Interested
                        <Sparkles className="ml-1 h-4 w-4" />
                      </Button>
                      <p className="text-xs font-medium text-slate-300/75">
                        This opens the interest form so the user can respond immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnnouncementPopup;
