"use client";

import {
  Check,
  CheckCircle2,
  CircleAlert,
  Copy,
  ExternalLink,
  Mail,
  Phone,
  SendHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/BrandIcons";
import SectionWrapper from "@/components/common/SectionWrapper";
import Tooltip from "@/components/common/Tooltip";
import { personal } from "@/data/personal";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    type: "copy",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/azmat-ullah-khan",
    href: personal.linkedin,
    icon: LinkedInIcon,
    type: "external",
  },
  {
    label: "GitHub",
    value: "github.com/Azmat7860",
    href: personal.github,
    icon: GitHubIcon,
    type: "external",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    icon: Phone,
    type: "phone",
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

function RequiredLabel({
  children,
  htmlFor,
}: {
  children: string;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex min-w-0 flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)]"
    >
      <span>{children}</span>
      <span
        className="rounded-full border border-[rgba(0,212,255,0.22)] bg-[rgba(0,212,255,0.08)] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[var(--accent-cyan)]"
        aria-hidden="true"
      >
        Required
      </span>
    </label>
  );
}

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<ToastState | null>(null);
  const statusTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const isSending = status === "loading";
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
    if (!isSending) {
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
        text: "Your message was received and a confirmation email has been sent.",
        title: "Message sent",
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
      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 22 }}
            className={`fixed right-4 top-20 z-[200] flex w-[min(92vw,27rem)] gap-3 rounded-xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-150 sm:top-4 ${
              toast.type === "success"
                ? "border-emerald-400/30 bg-emerald-950/90 text-white"
                : "border-red-400/30 bg-red-950/90 text-white"
            }`}
            role="status"
            aria-live="polite"
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
            <Tooltip label="Dismiss notification">
              <button
                type="button"
                aria-label="Dismiss notification"
                onClick={() => setToast(null)}
                className="self-start text-white/60 transition-colors duration-150 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </Tooltip>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="container-shell relative z-10 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8">
        <div className="min-w-0 max-w-2xl">
          <p className="section-kicker">Contact</p>
          <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,8vw,3rem)] font-bold leading-tight tracking-normal text-[var(--text-primary)] md:text-5xl">
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:leading-8 md:text-lg">
            Open for full-time roles, contract work, and remote product opportunities.
          </p>

          <div className="mt-8 min-w-0 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--panel-muted)] p-2 sm:p-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isEmail = item.type === "copy";
              const isExternal = item.type === "external";
              const isLinked = isExternal || item.type === "phone";
              const actionTooltip = isExternal
                ? `Open ${item.label}`
                : item.type === "phone"
                  ? `Call ${item.value}`
                  : "";
              const rowContent = (
                <>
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,212,255,0.08)] text-[var(--accent-cyan)] sm:size-10">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1 overflow-hidden">
                    <span className="block text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-sm text-[var(--text-secondary)] transition-colors duration-150 group-hover:text-[var(--text-primary)] sm:text-base">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              if (isLinked) {
                return (
                  <Tooltip
                    key={item.label}
                    label={actionTooltip}
                    side="bottom"
                    className="flex w-full min-w-0 max-w-full"
                  >
                    <a
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex min-w-0 w-full max-w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-3 transition-colors duration-150 hover:bg-[var(--panel-soft)] sm:gap-4 sm:px-3"
                    >
                      {rowContent}
                      {isExternal ? (
                        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] transition-all duration-150 group-hover:border-[var(--border-accent)] group-hover:text-[var(--accent-cyan)] sm:size-9">
                          <ExternalLink className="size-4" />
                        </span>
                      ) : null}
                    </a>
                  </Tooltip>
                );
              }

              return (
                <div
                  key={item.label}
                  className="group flex min-w-0 w-full max-w-full items-center gap-3 rounded-lg px-2 py-3 transition-colors duration-150 hover:bg-[var(--panel-soft)] sm:gap-4 sm:px-3"
                >
                  {rowContent}
                  {isEmail ? (
                    <Tooltip label={copied ? "Copied" : "Copy email"} side="bottom">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] transition-all duration-150 hover:border-[var(--border-accent)] hover:text-[var(--text-primary)] sm:size-9"
                        aria-label="Copy email"
                      >
                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                      </button>
                    </Tooltip>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={false}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
          className="min-w-0 max-w-full rounded-xl border border-[var(--border-default)] bg-[var(--form-surface)] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.28)] sm:p-5 md:p-6"
        >
          <form className="min-w-0 space-y-4" onSubmit={handleSubmit}>
            <div className="min-w-0">
              <RequiredLabel htmlFor="name">Full Name</RequiredLabel>
              <input
                id="name"
                name="name"
                required
                disabled={isSending}
                value={form.name}
                onChange={handleFieldChange}
                placeholder="Your full name"
                className="box-border w-full min-w-0 max-w-full rounded-lg border border-[var(--border-default)] bg-[var(--input-bg)] px-3 py-3 text-[var(--text-primary)] outline-none transition-all duration-150 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[rgba(0,212,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>
            <div className="min-w-0">
              <RequiredLabel htmlFor="email">Email Address</RequiredLabel>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSending}
                value={form.email}
                onChange={handleFieldChange}
                placeholder="you@example.com"
                className="box-border w-full min-w-0 max-w-full rounded-lg border border-[var(--border-default)] bg-[var(--input-bg)] px-3 py-3 text-[var(--text-primary)] outline-none transition-all duration-150 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[rgba(0,212,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>
            <div className="min-w-0">
              <RequiredLabel htmlFor="subject">Subject</RequiredLabel>
              <input
                id="subject"
                name="subject"
                required
                disabled={isSending}
                value={form.subject}
                onChange={handleFieldChange}
                placeholder="Project, role, or inquiry subject"
                className="box-border w-full min-w-0 max-w-full rounded-lg border border-[var(--border-default)] bg-[var(--input-bg)] px-3 py-3 text-[var(--text-primary)] outline-none transition-all duration-150 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[rgba(0,212,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>
            <div className="min-w-0">
              <RequiredLabel htmlFor="message">Message</RequiredLabel>
              <textarea
                id="message"
                name="message"
                required
                disabled={isSending}
                rows={4}
                value={form.message}
                onChange={handleFieldChange}
                placeholder="Tell me what you would like to build or discuss..."
                className="thin-scrollbar box-border w-full min-w-0 max-w-full resize-none rounded-lg border border-[var(--border-default)] bg-[var(--input-bg)] px-3 py-3 text-[var(--text-primary)] outline-none transition-all duration-150 placeholder:text-[var(--text-muted)] focus:border-[var(--accent-cyan)] focus:ring-2 focus:ring-[rgba(0,212,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
              />
            </div>

            <Tooltip
              className="flex w-full min-w-0 max-w-full"
              label={
                isSending
                  ? "Sending your message"
                  : isFormValid
                    ? "Send your message"
                    : "Complete all required fields"
              }
            >
              <button
                type="submit"
                disabled={isSending || !isFormValid}
                className="inline-flex w-full min-w-0 max-w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium text-[var(--cta-ink)] shadow-[0_0_28px_rgba(0,212,255,0.14)] transition-all duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  background: status === "success" ? "#10B981" : "var(--gradient-accent)",
                }}
              >
                {isSending ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                <SendHorizontal className="size-4 shrink-0" />
              </button>
            </Tooltip>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
