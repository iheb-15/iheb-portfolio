import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="04"
          label="Réalisations"
          title="Projets"
          description="Une sélection de projets personnels et académiques, entre développement, audit et sécurité offensive."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col rounded-xl border border-border bg-surface overflow-hidden hover:border-signal/50 transition-colors duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-surface2 to-bg flex items-center justify-center border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-fade opacity-60" />
                <FolderGit2 className="w-9 h-9 text-signal/70 relative z-10" />
                <span className="absolute top-3 right-3 text-[10.5px] font-mono px-2 py-0.5 rounded bg-bg/80 border border-border text-muted">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display text-base font-semibold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-[13.5px] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-surface2 border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-signal transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-signal transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
