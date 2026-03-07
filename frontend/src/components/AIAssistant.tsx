import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronUp, Mail, MessageSquareText, Minus, Send, Sparkles, X } from "lucide-react";

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
  id: string;
  role: "assistant" | "user";
  text: string;
};

type FollowUpOption = {
  label: string;
  response: string;
  summary: string;
};

type FollowUpState = {
  key: PromptKey;
  question: string;
  options: FollowUpOption[];
};

const SALES_EMAIL = "sales@godigitalafrica.com";
const WHATSAPP_URL = "https://wa.me/254720222249";

const promptOptions: { key: PromptKey; label: string }[] = [
  { key: "website", label: "I need a website" },
  { key: "seo", label: "I want SEO help" },
  { key: "demo", label: "Request a demo" },
  { key: "audit", label: "Technical audit" },
  { key: "locations", label: "Where do you operate?" },
  { key: "sales", label: "Talk to sales" },
];

const promptReplies: Record<
  PromptKey,
  {
    intro: string;
    question?: string;
    leadMode?: boolean;
    options?: FollowUpOption[];
  }
> = {
  website: {
    intro:
      "We design websites, e-commerce experiences, and custom software systems built for growth and conversion.",
    question: "What kind of website are you planning right now?",
    options: [
      {
        label: "Corporate site",
        response: "A corporate site usually fits a strategy + UX + conversion-focused build. The next detail I need is your timeline and whether content is ready.",
        summary: "Interested in a corporate website build",
      },
      {
        label: "E-commerce",
        response: "For e-commerce, we should map products, payment flow, and marketing readiness. We can carry that into a scoping or audit conversation.",
        summary: "Interested in an e-commerce website",
      },
      {
        label: "Custom platform",
        response: "A custom platform usually needs discovery first, especially around users, workflows, and integrations. That is a good fit for a technical consultation.",
        summary: "Interested in a custom software platform",
      },
    ],
  },
  seo: {
    intro:
      "We handle SEO, SEM, maps visibility, performance content, and growth campaigns across African and global markets.",
    question: "What is the main visibility challenge you want to solve?",
    options: [
      {
        label: "More leads",
        response: "If the goal is more leads, we should look at search intent, landing pages, and paid/organic balance together.",
        summary: "Needs SEO support to generate more leads",
      },
      {
        label: "Local visibility",
        response: "Local visibility usually means Google Maps, location pages, reputation signals, and regional SEO structure.",
        summary: "Needs local SEO and maps visibility",
      },
      {
        label: "Rank nationally",
        response: "National ranking requires stronger content strategy, technical SEO, and authority building. We can guide that through a growth plan.",
        summary: "Needs broader national SEO growth",
      },
    ],
  },
  demo: {
    intro:
      "We can arrange a guided demo for Linkly SaaS, Optirise AI, or SkillLink based on the product and use case you want to explore.",
    question: "Which product would you like to see first?",
    leadMode: true,
    options: [
      {
        label: "Linkly SaaS",
        response: "Linkly is best for social orchestration, scheduling, and performance reporting. I have saved that as your demo interest.",
        summary: "Requested a Linkly SaaS demo",
      },
      {
        label: "Optirise AI",
        response: "Optirise AI is the right fit if you want SEO automation, content optimization, and visibility intelligence. I have saved that demo interest.",
        summary: "Requested an Optirise AI demo",
      },
      {
        label: "SkillLink",
        response: "SkillLink is aimed at talent infrastructure and matching workflows. I have saved that product interest for follow-up.",
        summary: "Requested a SkillLink demo",
      },
    ],
  },
  audit: {
    intro:
      "Our technical audit helps identify infrastructure, UX, SEO, and performance gaps before execution starts.",
    question: "What do you want audited first?",
    leadMode: true,
    options: [
      {
        label: "Website performance",
        response: "A website audit will focus on speed, UX friction, technical health, and conversion issues.",
        summary: "Needs a website performance audit",
      },
      {
        label: "SEO visibility",
        response: "An SEO audit will examine crawlability, on-page structure, content gaps, and search visibility issues.",
        summary: "Needs an SEO audit",
      },
      {
        label: "Full digital stack",
        response: "A full stack audit is the best route when the business needs both strategic and technical clarity before scaling.",
        summary: "Needs a full digital stack audit",
      },
    ],
  },
  locations: {
    intro:
      "Go Digital Africa supports organizations across Kenya, Ethiopia, Somalia, Dubai, and Canada. Our Nairobi office is at 14 Ring Road, Westlands, Nairobi, Kenya.",
  },
  sales: {
    intro:
      "Sales can help with consultations, service matching, enterprise engagements, and product fit conversations.",
    question: "What kind of discussion do you want next?",
    leadMode: true,
    options: [
      {
        label: "Consultation",
        response: "A consultation is the best starting point if you need service direction or project scoping.",
        summary: "Wants a consultation with sales",
      },
      {
        label: "Proposal",
        response: "If you need a proposal, the next useful inputs are your scope, market, and expected timeline.",
        summary: "Wants a proposal from sales",
      },
      {
        label: "Enterprise partnership",
        response: "For enterprise partnerships, we should route you toward a higher-touch sales follow-up with business context.",
        summary: "Interested in an enterprise partnership discussion",
      },
    ],
  },
};

const sectionGreetings: Record<string, string> = {
  home: "You’re on the homepage. I can guide you to services, demos, or sales.",
  about: "You’re viewing the company overview. Ask me about capabilities, locations, or delivery approach.",
  services: "You’re in the services section. I can help match your growth need to the right service line.",
  products: "You’re viewing products. I can help you compare Linkly, Optirise, and SkillLink.",
  process: "You’re in the methodology section. I can explain how discovery, planning, and execution fit together.",
  contact: "You’re near contact. I can help you route to sales, audit, or a product demo quickly.",
};

function buildGmailComposeUrl(subject: string, body: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function createMessage(role: "assistant" | "user", text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  };
}

function currentSectionKey() {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#", "");
  return hash || "home";
}

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [typing, setTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage("assistant", "I’m the Go Digital Africa assistant. I can help you find the right service, request a demo, or route you to sales."),
  ]);
  const [askedPrompts, setAskedPrompts] = useState<PromptKey[]>([]);
  const [sessionSummary, setSessionSummary] = useState<Partial<Record<PromptKey, string>>>({});
  const [activeFollowUp, setActiveFollowUp] = useState<FollowUpState | null>(null);
  const [sectionKey, setSectionKey] = useState("home");
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const openRef = useRef(open);
  const timeoutRef = useRef<number | null>(null);

  const quickPromptLabels = useMemo(() => promptOptions.map((item) => item.label), []);
  const greetingText = sectionGreetings[sectionKey] ?? sectionGreetings.home;

  useEffect(() => {
    openRef.current = open;
    if (open) {
      setUnreadCount(0);
    }
  }, [open]);

  useEffect(() => {
    const updateSection = () => setSectionKey(currentSectionKey());
    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const pushAssistantMessage = (text: string) => {
    setTyping(true);
    timeoutRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, createMessage("assistant", text)]);
      setTyping(false);
      if (!openRef.current) {
        setUnreadCount((count) => count + 1);
      }
    }, 550);
  };

  const openAssistant = () => {
    setOpen(true);
    setMinimized(false);
    setUnreadCount(0);
  };

  const closeAssistant = () => {
    setOpen(false);
    setMinimized(false);
  };

  const handlePrompt = (key: PromptKey) => {
    const prompt = promptOptions.find((item) => item.key === key);
    const reply = promptReplies[key];
    if (!prompt || !reply) return;

    setMessages((current) => [...current, createMessage("user", prompt.label)]);

    if (askedPrompts.includes(key)) {
      const remembered = sessionSummary[key];
      pushAssistantMessage(
        remembered
          ? `I already have this in session memory: ${remembered}. If you want, use the lead capture form below and I’ll help route it to sales.`
          : `We already covered ${prompt.label.toLowerCase()}. I can keep moving you toward a handoff or help you capture the request below.`
      );
      setLeadMode(reply.leadMode ?? leadMode);
      return;
    }

    setAskedPrompts((current) => [...current, key]);
    pushAssistantMessage(reply.intro);

    if (reply.question && reply.options) {
      window.setTimeout(() => {
        setActiveFollowUp({
          key,
          question: reply.question!,
          options: reply.options!,
        });
        pushAssistantMessage(reply.question!);
      }, 120);
    } else {
      setActiveFollowUp(null);
    }

    if (reply.leadMode) {
      setLeadMode(true);
    }
  };

  const handleFollowUpSelection = (option: FollowUpOption) => {
    if (!activeFollowUp) return;

    setMessages((current) => [...current, createMessage("user", option.label)]);
    setSessionSummary((current) => ({
      ...current,
      [activeFollowUp.key]: option.summary,
    }));
    setActiveFollowUp(null);
    pushAssistantMessage(option.response);
    setLeadMode(true);
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const memoryLines = Object.values(sessionSummary);
    const subject = `AI Assistant Lead - ${leadForm.company || leadForm.name || "Website Inquiry"}`;
    const body = [
      `Name: ${leadForm.name || "-"}`,
      `Email: ${leadForm.email || "-"}`,
      `Company: ${leadForm.company || "-"}`,
      "",
      "Session Memory:",
      ...(memoryLines.length ? memoryLines : ["-"]),
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
        onClick={openAssistant}
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
          {unreadCount > 0 && !open && (
            <span className="absolute -right-4 -top-4 inline-flex min-h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white">
              {unreadCount}
            </span>
          )}
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
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full text-white hover:bg-white/10"
                    onClick={() => setMinimized((current) => !current)}
                    aria-label={minimized ? "Maximize AI assistant" : "Minimize AI assistant"}
                  >
                    {minimized ? <ChevronUp className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full text-white hover:bg-white/10"
                    onClick={closeAssistant}
                    aria-label="Close AI assistant"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="relative mt-3 max-w-sm text-sm leading-6 text-slate-100/90">
                {greetingText}
              </p>
            </div>

            <AnimatePresence initial={false}>
              {!minimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: motionEase }}
                >
                  <div className="max-h-[70vh] overflow-y-auto bg-slate-50/70 p-4">
                    <div className="space-y-3">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                            message.role === "assistant"
                              ? "bg-white text-slate-700 shadow-sm"
                              : "ml-auto bg-slate-950 text-white"
                          }`}
                        >
                          {message.text}
                        </div>
                      ))}

                      {typing && (
                        <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:0.15s]" />
                          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 [animation-delay:0.3s]" />
                          Assistant is typing
                        </div>
                      )}
                    </div>

                    {Object.keys(sessionSummary).length > 0 && (
                      <div className="mt-4 rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-sm">
                        <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-slate-400">Session Memory</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {Object.entries(sessionSummary).map(([key, summary]) => (
                            <span
                              key={key}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                            >
                              {summary}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {promptOptions.map((prompt) => (
                        <button
                          key={prompt.key}
                          type="button"
                          onClick={() => handlePrompt(prompt.key)}
                          className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${
                            askedPrompts.includes(prompt.key)
                              ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                              : "border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:text-primary"
                          }`}
                        >
                          {prompt.label}
                        </button>
                      ))}
                    </div>

                    {activeFollowUp && (
                      <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">{activeFollowUp.question}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {activeFollowUp.options.map((option) => (
                            <button
                              key={option.label}
                              type="button"
                              onClick={() => handleFollowUpSelection(option)}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-primary/30 hover:text-primary"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-3 text-xs text-slate-400">
                      Quick prompts: {quickPromptLabels.join(" • ")}
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

                      <div className="mb-4 flex flex-wrap gap-2">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                        >
                          <MessageSquareText className="h-4 w-4" />
                          WhatsApp Sales
                        </a>
                        <a
                          href={buildGmailComposeUrl("Sales Inquiry", "Hello Go Digital Africa,")}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100"
                        >
                          <Mail className="h-4 w-4" />
                          Email Sales
                        </a>
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
