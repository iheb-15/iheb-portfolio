import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Branche ici un service d'envoi (Formspree, EmailJS, API backend...)
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="07"
          label="Contact"
          title="Travaillons ensemble"
          description="Une question, une opportunité de stage ou un projet de sécurité à discuter ? Mon canal de communication est ouvert."
        />

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center shrink-0">
                <Mail className="w-[18px] h-[18px] text-signal" />
              </div>
              <div>
                <p className="text-faint text-[12px] font-mono mb-0.5">EMAIL</p>
                <a href={`mailto:${profile.email}`} className="text-text text-sm hover:text-signal">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center shrink-0">
                <MapPin className="w-[18px] h-[18px] text-signal" />
              </div>
              <div>
                <p className="text-faint text-[12px] font-mono mb-0.5">LOCALISATION</p>
                <p className="text-text text-sm">{profile.location}</p>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-5 mt-2">
              <p className="font-mono text-[12px] text-muted leading-relaxed">
                <span className="text-success">✓</span> Réponse généralement sous 48h
                <br />
                <span className="text-success">✓</span> Ouvert aux stages, CDI et missions ponctuelles
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-surface p-6 sm:p-7 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-[12px] text-muted mb-2">
                NOM
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full bg-surface2 border border-border rounded-md px-4 py-3 text-sm text-text placeholder:text-faint focus:border-signal/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-[12px] text-muted mb-2">
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className="w-full bg-surface2 border border-border rounded-md px-4 py-3 text-sm text-text placeholder:text-faint focus:border-signal/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-[12px] text-muted mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full bg-surface2 border border-border rounded-md px-4 py-3 text-sm text-text placeholder:text-faint focus:border-signal/60 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-signal text-bg font-medium text-sm hover:bg-signal/90 transition-colors disabled:opacity-70"
            >
              {status === "idle" && (
                <>
                  <Send className="w-4 h-4" /> Envoyer le message
                </>
              )}
              {status === "sending" && "Envoi en cours..."}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Message envoyé
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
