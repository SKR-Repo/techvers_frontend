import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, accent, description, align = "left" }) {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-8 bg-foreground/60" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          {eyebrow}
        </span>
      </motion.div>
      <div className="mt-5 grid gap-6 md:grid-cols-2 md:items-end">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-black leading-[1.02] tracking-tight"
        >
          {title} <span className="text-gradient-cyan">{accent}</span>
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted-foreground md:text-right max-w-md md:ml-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}