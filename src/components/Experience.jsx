import { motion } from "framer-motion";
import { Briefcase, Folder } from "lucide-react";
import { experiences } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="03"
          label="Parcours professionnel"
          title="Expérience"
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-14"
              >
                <div className="absolute left-0 top-0 hidden sm:flex w-10 h-10 rounded-full bg-surface border border-signal/40 items-center justify-center">
                  <Briefcase className="w-4 h-4 text-signal" />
                </div>

                <div className="rounded-xl border border-border bg-surface p-6 hover:border-signal/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-faint">{exp.period}</span>
                  </div>
                  <p className="text-signal text-sm font-medium mb-4">{exp.company}</p>

                  <div className="flex items-center gap-2 mb-3 font-mono text-[12px] text-muted">
                    <Folder className="w-3.5 h-3.5" />
                    Projet : <span className="text-text">{exp.project}</span>
                  </div>

                  <p className="text-muted text-[14px] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13.5px] text-muted">
                        <span className="text-signal mt-1.5 text-[10px]">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-1 rounded bg-signal/10 text-signal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
