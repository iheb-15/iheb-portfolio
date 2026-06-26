import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { githubUsername, profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function GithubStats() {
  return (
    <section id="github" className="relative py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="06"
          label="Activité"
          title="GitHub Statistics"
          description="Mon activité de développement en temps réel, générée directement depuis mon profil GitHub."
        />

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-surface p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&title_color=00BFFF&icon_color=00BFFF&text_color=8B95A7&border_color=1A2433&hide_border=true`}
              alt="Statistiques GitHub"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-border bg-surface p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&title_color=00BFFF&text_color=8B95A7&border_color=1A2433&hide_border=true`}
              alt="Langages les plus utilisés"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-xl border border-border bg-surface p-4 overflow-hidden mb-8"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&background=00000000&ring=00BFFF&fire=00BFFF&currStreakLabel=00BFFF&sideLabels=8B95A7&currStreakNum=E8EDF5&sideNums=E8EDF5&dates=4A5568&border=1A2433&hide_border=true`}
            alt="Streak GitHub"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <div className="text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text font-medium text-sm hover:border-signal/60 hover:text-signal transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Voir le profil complet
          </a>
        </div>
      </div>
    </section>
  );
}
