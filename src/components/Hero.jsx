import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolioData";

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Scanline radar - signature visuelle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-signal/0 via-signal/[0.06] to-signal/0 animate-scan" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-md border border-success/30 bg-success/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="font-mono text-[11px] text-success tracking-wide">
              STATUS: DISPONIBLE POUR OPPORTUNITÉS
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-text mb-5">
            {profile.name}
          </h1>

          <div className="font-mono text-base sm:text-lg text-signal mb-5 h-7 flex items-center">
            <span className="text-muted mr-2">root@iheb:~$</span>
            <span>{typed}</span>
            <span className="w-[2px] h-5 bg-signal ml-1 animate-blink" />
          </div>

          <p className="text-muted text-base sm:text-lg max-w-xl mb-9 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors shadow-[0_0_24px_rgba(0,191,255,0.25)]"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text font-medium text-sm hover:border-signal/60 hover:text-signal transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-muted hover:text-signal hover:border-signal/60 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-muted hover:text-signal hover:border-signal/60 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative justify-self-center"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 animate-float">
            <div className="absolute inset-0 rounded-2xl border border-signal/30 rotate-6" />
            <div className="absolute inset-0 rounded-2xl border border-signal/15 -rotate-3" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-surface">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-panel rounded-lg px-3 py-2 font-mono text-[11px] text-success flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
              SCAN: 0 THREATS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
