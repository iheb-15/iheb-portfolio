import { motion } from "framer-motion";
import {
  ShieldAlert,
  ClipboardCheck,
  Cloud,
  Code2,
  BrainCircuit,
} from "lucide-react";
import { skillGroups } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const icons = {
  cybersecurity: ShieldAlert,
  audit: ClipboardCheck,
  cloud: Cloud,
  programming: Code2,
  ai: BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="02"
          label="Compétences"
          title="Stack technique"
          description="Un socle technique construit autour de trois piliers : la sécurité offensive, la gouvernance des risques, et le développement pour automatiser l'un comme l'autre."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.id];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative rounded-xl border border-border bg-surface p-6 hover:border-signal/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center group-hover:bg-signal/20 transition-colors">
                    <Icon className="w-5 h-5 text-signal" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text">
                    {group.title}
                  </h3>
                </div>
                <p className="text-muted text-[13px] mb-5 leading-relaxed">
                  {group.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11.5px] font-mono px-2.5 py-1 rounded-md bg-surface2 border border-border text-muted group-hover:text-text transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
