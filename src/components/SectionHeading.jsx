import { motion } from "framer-motion";

export default function SectionHeading({ index, label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <div className="flex items-center gap-3 mb-3">
        {index && <span className="font-mono text-xs text-faint">{index}</span>}
        <span className="section-label">{label}</span>
        <span className="flex-1 h-px bg-border" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
