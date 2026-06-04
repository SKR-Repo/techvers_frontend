import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Core Services" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1600;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(start + (to - start) * e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref} className="text-foreground">
      {v}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex items-center justify-center gap-4 py-10 px-6"
          >
            <div className="font-display text-5xl md:text-6xl font-black text-foreground leading-none">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground leading-tight max-w-[110px]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}