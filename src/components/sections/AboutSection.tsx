"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import GradientText from "@/components/common/GradientText";
import SectionWrapper from "@/components/common/SectionWrapper";
import { personal } from "@/data/personal";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "BS", label: "CS Degree" },
  { value: "4", label: "Key Projects" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="section-kicker">About</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="surface-panel rounded-3xl border border-white/8 p-6 hover:border-[var(--border-accent)]"
              >
                <p className="font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-[-0.05em]">
                  <GradientText>
                    {/\d/.test(stat.value) ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </GradientText>
                </p>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="surface-panel mt-4 rounded-3xl border border-white/8 p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Status
            </p>
            <div className="space-y-3 font-mono text-sm text-[var(--text-secondary)]">
              {personal.statusLines.map((line, index) => (
                <div
                  key={line}
                  className={index !== 0 ? "border-t border-white/6 pt-3" : ""}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[38rem]">
          <p className="mb-3 font-[family-name:var(--font-outfit)] text-[clamp(1.5rem,2.5vw,2.35rem)] font-semibold tracking-[-0.04em] text-white">
            Professional Summary
          </p>
          <h2 className="section-heading">The Engineer Behind the Code</h2>
          <div className="mt-8 space-y-6 text-[1.04rem] leading-8 text-[var(--text-secondary)]">
            {personal.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
