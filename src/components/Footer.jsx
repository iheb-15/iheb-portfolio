import { Mail, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-sm text-text">
          <ShieldCheck className="w-4 h-4 text-signal" />
          {profile.name}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-signal transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-signal transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted hover:text-signal transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="font-mono text-[11.5px] text-faint">
          © {new Date().getFullYear()} — Conçu &amp; sécurisé par {profile.name.split(" ")[0]}
        </p>
      </div>
    </footer>
  );
}
