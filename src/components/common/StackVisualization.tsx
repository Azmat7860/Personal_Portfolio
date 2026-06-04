"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cloud, Database, Monitor, Server } from "lucide-react";

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
    tier: "Database",
    code: "DB",
    icon: Database,
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    label: "Docker / AWS",
    tier: "Infrastructure",
    code: "OPS",
    icon: Cloud,
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export default function StackVisualization() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="surface-panel relative hidden w-full max-w-[392px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,210,255,0.12),transparent_40%),rgba(10,10,20,0.92)] p-5 lg:block">
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <div className="relative z-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-code)]">
              Live architecture
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-2xl font-semibold tracking-[-0.04em] text-white">
              Production Stack
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-secondary)]">
            Full stack
          </div>
        </div>

        <div className="space-y-3" aria-label="Technology stack visualization">
          {stackNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div key={node.label}>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <div className="relative flex size-16 shrink-0 items-center justify-center rounded-[1.35rem] border border-white/10 bg-[rgba(7,10,20,0.88)]">
                    <div
                      className={`absolute inset-1 rounded-[1rem] bg-gradient-to-br ${node.accent} opacity-25`}
                    />
                    <div className="relative flex flex-col items-center justify-center">
                      <Icon className="mb-1 size-4 text-white" />
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/90">
                        {node.code}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
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

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[var(--text-secondary)]">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            Modular frontend orchestration
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            Typed APIs and dependable services
          </div>
        </div>
      </div>
    </div>
  );
}
