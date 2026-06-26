import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";
import { nav, profile } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold text-text">
          <ShieldCheck className="w-5 h-5 text-signal" strokeWidth={2} />
          <span className="text-sm md:text-base">
            iheb<span className="text-signal">.</span>nguili
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px]">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative py-1 transition-colors ${
                  active === item.href ? "text-signal" : "text-muted hover:text-text"
                }`}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-signal"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cvPath}
          download
          className="hidden md:inline-flex items-center text-[13px] font-mono px-4 py-2 border border-signal/40 text-signal rounded-md hover:bg-signal/10 transition-colors"
        >
          CV
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text p-2"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-panel border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col px-5 py-4 gap-4 font-mono text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={active === item.href ? "text-signal" : "text-muted"}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex items-center text-signal border border-signal/40 rounded-md px-4 py-2"
                >
                  Télécharger CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
