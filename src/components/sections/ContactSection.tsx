"use client";

import {
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  CircleAlert,
  CodeXml,
  Copy,
  Mail,
  Phone,
  SendHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import NoiseSurface from "@/components/common/NoiseSurface";
import SectionWrapper from "@/components/common/SectionWrapper";
import { personal } from "@/data/personal";

const contactCards = [
  {
    label: "Email",
    value: personal.email,
    action: "Click to copy",
    icon: Mail,
    href: `mailto:${personal.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/azmat-ullah-khan-289439237",
    action: "Open →",
    icon: BriefcaseBusiness,
    href: personal.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Azmat7860",
    action: "Open →",
    icon: CodeXml,
    href: personal.github,
  },
  {
    label: "Phone",
    value: personal.phone,
    action: "Call →",
    icon: Phone,
    href: `tel:${personal.phone}`,
  },
];

const responseHighlights = [
  {
    title: "Fast Response",
    text: "I usually reply within 24 hours for serious project and hiring conversations.",
  },
  {
    title: "Best Fit",
    text: "Great match for product teams building AI SaaS, dashboards, admin panels, and scalable APIs.",
  },
];

const initialFormState = {
  email: "",
  message: "",
  name: "",
  subject: "",
};

type ToastState = {
  text: string;
  title: string;
  type: "error" | "success";
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<ToastState | null>(null);
  const statusTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const isFormValid =
    Boolean(form.name.trim()) &&
    isEmailValid &&
    Boolean(form.subject.trim()) &&
    Boolean(form.message.trim());

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        window.clearTimeout(statusTimerRef.current);
      }

      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = (nextToast: ToastState) => {
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    setToast(nextToast);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 4500);
  };

  const resetStatusAfterSuccess = () => {
    if (statusTimerRef.current) {
      window.clearTimeout(statusTimerRef.current);
    }

    statusTimerRef.current = window.setTimeout(() => setStatus("idle"), 3500);
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (status !== "loading") {
      setStatus("idle");
    }
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      showToast({
        text: "Please complete all fields with a valid email address before sending.",
        title: "Missing details",
        type: "error",
      });
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.trim(),
          message: form.message.trim(),
          name: form.name.trim(),
          subject: form.subject.trim(),
        }),
      });

      const data = (await response.json()) as {
        confirmationSent?: boolean;
        error?: string;
        success?: boolean;
        warning?: string;
      };

      if (!response.ok || !data.success) {
        setStatus("error");
        showToast({
          text: data.error ?? "Unable to send message right now.",
          title: "Message not sent",
          type: "error",
        });
        return;
      }

      setStatus("success");
      setForm(initialFormState);
      resetStatusAfterSuccess();
      showToast({
        text:
          data.warning ??
          "Your message was received and a confirmation email has been sent.",
        title: data.confirmationSent === false ? "Message received" : "Message sent",
        type: "success",
      });
    } catch {
      setStatus("error");
      showToast({
        text: "Something went wrong while sending the message. Please try again.",
        title: "Network error",
        type: "error",
      });
    }
  };

  return (
    <SectionWrapper id="contact" className="overflow-hidden">
      <NoiseSurface className="opacity-[0.03]" />
      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className={`fixed left-4 right-4 top-4 z-[200] mx-auto flex w-[min(92vw,28rem)] gap-3 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-400/30 bg-emerald-950/80"
                : "border-red-400/30 bg-red-950/80"
            }`}
            role="status"
          >
            <div
              className={`mt-0.5 ${
                toast.type === "success" ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <CircleAlert className="size-5" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-white">{toast.title}</p>
              <p className="mt-1 text-sm leading-6 text-white/75">{toast.text}</p>
            </div>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => setToast(null)}
              className="self-start text-white/60 hover:text-white"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-[28rem] w-[70rem] max-w-full rounded-full bg-[radial-gradient(circle,rgba(0,210,255,0.08),rgba(139,92,246,0.06),transparent_70%)] blur-3xl" />
      <div className="container-shell relative z-10 grid gap-8 lg:items-start lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-heading">
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            Open for full-time roles, contract work, and remote product opportunities.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-6">
            <h3 className="text-base font-semibold text-white">Currently available for:</h3>
            <ul className="mt-4 space-y-3 text-[var(--text-secondary)]">
              {personal.currentlyAvailableFor.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="size-4 text-[var(--accent-cyan)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isEmail = card.label === "Email";
              const isExternal = card.href.startsWith("http");

              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -5 }}
                  className="surface-panel rounded-[1.5rem] border border-white/8 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-[var(--accent-cyan)]">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-4 font-[family-name:var(--font-outfit)] text-xl font-semibold">
                        {card.label}
                      </p>
                      <p className="mt-1 text-[var(--text-secondary)]">{card.value}</p>
                    </div>
                    {isEmail ? (
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white"
                      >
                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                        {copied ? "Copied!" : card.action}
                      </button>
                    ) : (
                      <a
                        href={card.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white"
                      >
                        {card.action}
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 self-start lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="surface-panel order-2 rounded-[1.5rem] border border-white/8 p-5"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-[var(--text-secondary)]">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleFieldChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 text-white outline-none focus:border-[var(--border-accent)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[var(--text-secondary)]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleFieldChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 text-white outline-none focus:border-[var(--border-accent)]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-[var(--text-secondary)]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleFieldChange}
                  placeholder="Project, role, or inquiry subject"
                  className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 text-white outline-none focus:border-[var(--border-accent)]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-[var(--text-secondary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleFieldChange}
                  placeholder="Tell me what you would like to build or discuss..."
                  className="thin-scrollbar w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-3 text-white outline-none focus:border-[var(--border-accent)]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || !isFormValid}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-black disabled:opacity-50"
                style={{
                  background:
                    status === "success" ? "#10B981" : "var(--gradient-accent)",
                }}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent ✓" : "Send Message"}
                <SendHorizontal className="size-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="surface-panel order-1 rounded-[2rem] border border-white/8 p-5 md:p-6"
          >
            <p className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-white">
              Why Reach Out
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {responseHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1.35rem] border border-[var(--border-accent)] bg-[rgba(0,210,255,0.05)] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-code)]">
                Preferred work
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Full-time engineering roles, contract product builds, analytics dashboards,
                AI-enabled workflows, and backend systems with strong role-based architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
