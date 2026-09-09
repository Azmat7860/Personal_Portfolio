"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, Monitor, Server, Sparkles } from "lucide-react";

const stackNodes = [
  {
    label: "React / Next.js",
    tier: "Frontend",
    code: "UI",
    icon: Monitor,
    accent: "from-cyan-400 to-sky-500",
  },
  {
    label: "Node.js / NestJS",
    tier: "Backend",
    code: "API",
    icon: Server,
    accent: "from-sky-500 to-violet-500",
  },
  {
    label: "MongoDB / PostgreSQL",
    tier: "Databases",
    code: "DB",
    icon: Database,
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    label: "OpenAI / RAG / Agents",
    tier: "AI & Automation",
    code: "AI",
    icon: Sparkles,
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export default function StackVisualization() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="surface-panel relative w-full overflow-hidden rounded-[2rem] border border-[var(--border-default)] bg-[radial-gradient(circle_at_top,rgba(0,210,255,0.12),transparent_40%),var(--stack-panel)] p-4 xl:p-5">
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <div className="relative z-10">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-code)]">
              Core stack
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
              What I Build With
            </h3>
          </div>
          <div className="rounded-full border border-[var(--border-default)] bg-[var(--panel-soft)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-secondary)]">
            Full stack
          </div>
        </div>

        <div className="space-y-3" role="list" aria-label="Technology stack visualization">
          {stackNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div key={node.label} role="listitem">
                <motion.div
                  initial={false}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--panel-soft)] p-4 backdrop-blur-sm"
                >
                  <div className="relative flex size-16 shrink-0 items-center justify-center rounded-[1.35rem] border border-[var(--border-default)] bg-[var(--stack-node)]">
                    <div
                      className={`absolute inset-1 rounded-[1rem] bg-gradient-to-br ${node.accent} opacity-25`}
                    />
                    <div className="relative flex flex-col items-center justify-center">
                      <Icon className="mb-1 size-4 text-[var(--text-primary)]" />
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--text-primary)]/90">
                        {node.code}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--text-primary)]">
                      {node.label}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                      {node.tier}
                    </p>
                  </div>
                </motion.div>

                {index < stackNodes.length - 1 ? (
                  <div className="ml-8 flex h-6 items-center">
                    <div className="h-full w-px bg-[linear-gradient(180deg,rgba(0,210,255,0.8),rgba(139,92,246,0.15))]" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
