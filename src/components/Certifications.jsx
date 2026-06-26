import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          index="05"
          label="Validations"
          title="Certifications"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center rounded-xl border border-border bg-surface p-5 hover:border-signal/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-signal" />
              </div>
              <h3 className="font-display text-sm font-semibold text-text mb-1">
                {cert.name}
              </h3>
              <p className="text-faint text-[11px] mb-2 leading-tight">{cert.issuer}</p>
              <span
                className={`text-[10.5px] font-mono px-2 py-0.5 rounded ${
                  cert.status === "Obtenue"
                    ? "bg-success/10 text-success"
                    : "bg-signal/10 text-signal"
                }`}
              >
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
