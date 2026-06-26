import { motion } from "framer-motion";
import { GraduationCap, Shield, Search, Terminal, Brain, Cloud } from "lucide-react";
import { about } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const interestIcons = {
  "Cybersécurité offensive": Shield,
  "Audit des systèmes d'information": Search,
  Pentest: Terminal,
  "IA appliquée à la sécurité": Brain,
  "Cloud Computing": Cloud,
};

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="01"
          label="Profil"
          title="À propos de moi"
        />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12">
          <div>
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-muted leading-relaxed mb-5 text-[15px]"
              >
                {p}
              </motion.p>
            ))}

            <div className="flex flex-wrap gap-2 mt-6">
              {about.interests.map((interest) => {
                const Icon = interestIcons[interest] || Shield;
                return (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-surface/60 text-[12px] font-mono text-signal"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {interest}
                  </span>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-panel rounded-xl p-6">
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted">
                <GraduationCap className="w-4 h-4 text-signal" />
                PARCOURS_ACADEMIQUE.log
              </div>
              <ol className="relative border-l border-border ml-2">
                {about.education.map((edu, i) => (
                  <li key={i} className="mb-8 last:mb-0 ml-5">
                    <span
                      className={`absolute -left-[7px] w-3 h-3 rounded-full border-2 ${
                        edu.status === "En cours"
                          ? "bg-signal border-signal"
                          : "bg-bg border-success"
                      }`}
                    />
                    <p className="font-mono text-[11px] text-faint mb-1">{edu.period}</p>
                    <h3 className="font-display text-base font-semibold text-text mb-1">
                      {edu.degree}
                    </h3>
                    <span
                      className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded ${
                        edu.status === "En cours"
                          ? "bg-signal/10 text-signal"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
