import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquareText, Send, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motionEase } from "@/lib/motion";

type PromptKey =
  | "website"
  | "seo"
  | "demo"
  | "audit"
  | "locations"
  | "sales";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const promptOptions: { key: PromptKey; label: string }[] = [
  { key: "website", label: "I need a website" },
  { key: "seo", label: "I want SEO help" },
  { key: "demo", label: "Request a demo" },
  { key: "audit", label: "Technical audit" },
  { key: "locations", label: "Where do you operate?" },
  { key: "sales", label: "Talk to sales" },
];

const assistantReplies: Record<PromptKey, string> = {
  website:
    "We design and build responsive websites, e-commerce platforms, and custom software systems. If you share your business type and timeline, we can point you to the right delivery path.",
  seo:
    "We handle SEO, SEM, Google Maps visibility, content optimization, and growth campaigns. Tell me your market and current visibility challenge, and I will guide the next step.",
  demo:
    "We can arrange a guided demo for products like Linkly SaaS, Optirise AI, or SkillLink. Share which product you want to see and your team size.",
  audit:
    "Our technical audit flow helps identify infrastructure, UX, SEO, and performance gaps. If you have a live website or platform, send the URL in the request details.",
  locations:
    "Go Digital Africa supports organizations across Kenya, Ethiopia, Somalia, Dubai, and Canada, with regional digital growth and product delivery support.",
  sales:
    "Sales can help with consultations, demos, service matching, and enterprise projects. Share your company name, market, and what you want to achieve.",
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "I’m the Go Digital Africa assistant. I can help you find the right service, request a demo, or route you to sales.",
  },
];

const SALES_EMAIL = "sales@godigitalafrica.com";

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const quickPromptLabels = useMemo(() => promptOptions.map((item) => item.label), []);

  const handlePrompt = (key: PromptKey) => {
    const prompt = promptOptions.find((item) => item.key === key);
    if (!prompt) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: prompt.label },
      { role: "assistant", text: assistantReplies[key] },
    ]);

    if (key === "demo" || key === "audit" || key === "sales") {
      setLeadMode(true);
    }
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `AI Assistant Lead - ${leadForm.company || leadForm.name || "Website Inquiry"}`;
    const body =
      [
        `Name: ${leadForm.name || "-"}`,
        `Email: ${leadForm.email || "-"}`,
        `Company: ${leadForm.company || "-"}`,
        "",
        "Inquiry Details:",
        leadForm.details || "-",
      ].join("\n");

    window.open(buildGmailComposeUrl(subject, body), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-5 right-5 z-[83] inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_20px_50px_rgba(15,23,42,0.34)]"
        initial={{ opacity: 0, y: 18, scale: 0.92 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          boxShadow: [
            "0 20px 50px rgba(15,23,42,0.28)",
            "0 26px 56px rgba(34,211,238,0.24)",
            "0 20px 50px rgba(15,23,42,0.28)",
          ],
        }}
        transition={{
          opacity: { duration: 0.35, delay: 0.9 },
          y: { duration: 0.35, delay: 0.9, ease: motionEase },
          scale: { duration: 0.35, delay: 0.9, ease: motionEase },
          boxShadow: { duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Open AI assistant"
      >
        <motion.div
          animate={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative"
        >
          <Bot className="h-7 w-7 text-cyan-300" />
          <Sparkles className="absolute -right-3 -top-2 h-4 w-4 text-white" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: motionEase }}
            className="fixed bottom-24 right-5 z-[82] w-[min(92vw,390px)] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.24)]"
          >
            <div className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#081a2f,#0e2b45_58%,#0bc5ea)] px-5 py-4 text-white">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <MessageSquareText className="h-5 w-5 text-cyan-200" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200">AI Assistant</p>
                    <h3 className="mt-1 text-lg font-extrabold">Go Digital Africa</h3>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                  aria-label="Close AI assistant"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="relative mt-3 max-w-sm text-sm leading-6 text-slate-100/90">
                Ask about services, products, demos, audits, or regional support and I’ll guide you to the right next step.
              </p>
            </div>

            <div className="max-h-[70vh] overflow-y-auto bg-slate-50/70 p-4">
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "assistant"
                        ? "bg-white text-slate-700 shadow-sm"
                        : "ml-auto bg-slate-950 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {promptOptions.map((prompt) => (
                  <button
                    key={prompt.key}
                    type="button"
                    onClick={() => handlePrompt(prompt.key)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>

              <div className="mt-3 text-xs text-slate-400">
                Quick prompts:
                {" "}
                {quickPromptLabels.join(" • ")}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-slate-900">Lead Capture</h4>
                    <p className="text-xs text-slate-500">Use this to request follow-up from sales or product teams.</p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setLeadMode((current) => !current)}
                  >
                    {leadMode ? "Hide" : "Open"}
                  </Button>
                </div>

                <AnimatePresence initial={false}>
                  {leadMode && (
                    <motion.form
                      initial={{ opacity: 0, height: 0, y: 8 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 6 }}
                      transition={{ duration: 0.28, ease: motionEase }}
                      className="space-y-3 overflow-hidden"
                      onSubmit={handleLeadSubmit}
                    >
                      <Input
                        placeholder="Your name"
                        className="h-11 rounded-xl border-slate-200 bg-slate-50"
                        value={leadForm.name}
                        onChange={(event) => setLeadForm((current) => ({ ...current, name: event.target.value }))}
                      />
                      <Input
                        placeholder="Work email"
                        type="email"
                        className="h-11 rounded-xl border-slate-200 bg-slate-50"
                        value={leadForm.email}
                        onChange={(event) => setLeadForm((current) => ({ ...current, email: event.target.value }))}
                      />
                      <Input
                        placeholder="Company"
                        className="h-11 rounded-xl border-slate-200 bg-slate-50"
                        value={leadForm.company}
                        onChange={(event) => setLeadForm((current) => ({ ...current, company: event.target.value }))}
                      />
                      <Textarea
                        placeholder="What do you need help with?"
                        rows={4}
                        className="rounded-2xl border-slate-200 bg-slate-50"
                        value={leadForm.details}
                        onChange={(event) => setLeadForm((current) => ({ ...current, details: event.target.value }))}
                      />
                      <Button type="submit" className="w-full rounded-full">
                        Send to Email
                        <Send className="ml-1 h-4 w-4" />
                      </Button>
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

export default AIAssistant;
