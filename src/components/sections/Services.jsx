import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Code2,
  Wrench,
  MessageCircle,
  Sparkles,
  Bot,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: Smartphone,
    title: "Mobile & iOS Development",
    subtitle: "NATIVE-GRADE APPS FOR iOS, ANDROID & CROSS-PLATFORM.",
    desc: "We build buttery-smooth, performance-first mobile apps with delightful UX and features your users will love every single day.",
    tags: ["iOS / Swift", "Android / Kotlin", "React Native"],
    badge: "Native",
    stats: [
      { value: "120+", label: "Apps Shipped" },
      { value: "4.8★", label: "Avg Rating" },
    ],
    accent: "var(--cyan)",
    iconBg: "from-cyan-400 to-blue-500",
  },
  {
    icon: Code2,
    title: "Custom Website Design",
    subtitle: "BESPOKE WEBSITES THAT CAPTIVATE AND CONVERT.",
    desc: "Pixel-perfect design, blazing performance and conversion-tuned UX — bespoke websites built for lasting digital impact.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    badge: "Production Ready",
    stats: [
      { value: "300+", label: "Sites Built" },
      { value: "99", label: "Lighthouse" },
    ],
    accent: "oklch(0.70 0.18 260)",
    iconBg: "from-indigo-400 to-violet-500",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    subtitle: "MONITORING, SECURITY & PERFORMANCE — ALWAYS-ON.",
    desc: "Continuous monitoring, updates, security patches and performance tuning so your site stays flawless around the clock.",
    tags: ["Monitoring", "Security", "SEO"],
    badge: "24 / 7",
    stats: [
      { value: "99.99%", label: "Uptime" },
      { value: "<2h", label: "Response" },
    ],
    accent: "oklch(0.78 0.18 145)",
    iconBg: "from-emerald-400 to-teal-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Integration",
    subtitle: "AUTOMATE CONVERSATIONS ON THE #1 MESSAGING PLATFORM.",
    desc: "Connect with millions on WhatsApp — automate chats, qualify leads and scale engagement with the Official Cloud API.",
    tags: ["WhatsApp API", "Twilio", "CRM Sync"],
    badge: "Cloud API",
    stats: [
      { value: "10M+", label: "Messages" },
      { value: "60%", label: "Faster Reply" },
    ],
    accent: "oklch(0.78 0.17 155)",
    iconBg: "from-green-400 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    subtitle: "INTELLIGENT AUTOMATION & AI THAT TRANSFORMS BUSINESS.",
    desc: "Custom AI pipelines, RAG systems and LLM integrations that fundamentally transform how your business operates and scales.",
    tags: ["OpenAI", "LangChain", "RAG"],
    badge: "GenAI",
    stats: [
      { value: "70%", label: "Cost Cut" },
      { value: "50+", label: "AI Pipelines" },
    ],
    accent: "oklch(0.72 0.20 305)",
    iconBg: "from-fuchsia-400 to-purple-500",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    subtitle: "24/7 INTELLIGENT BOTS FOR SUPPORT, SALES & LEAD-GEN.",
    desc: "Custom GPT-powered chatbots that handle support, qualify leads and drive engagement around the clock — no humans required.",
    tags: ["GPT-4", "Claude", "Vector DB"],
    badge: "RAG",
    stats: [
      { value: "1M+", label: "Conversations" },
      { value: "92%", label: "Resolution" },
    ],
    accent: "oklch(0.74 0.18 35)",
    iconBg: "from-orange-400 to-amber-500",
  },
];

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  const Icon = s.icon;

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ "--accent": s.accent }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.16_0.035_255)] p-7 sm:p-8 transition-all duration-500 hover:border-[color:var(--accent)]/40 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_oklch(0.82_0.15_200/0.25)]"
    >
      {/* Hover dot-spotlight (follows cursor) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          backgroundImage:
            "radial-gradient(var(--accent) 1.1px, transparent 1.4px)",
          backgroundSize: "14px 14px",
          WebkitMaskImage: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, #000 0%, rgba(0,0,0,0.6) 35%, transparent 75%)`,
          maskImage: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, #000 0%, rgba(0,0,0,0.6) 35%, transparent 75%)`,
        }}
      />
      {/* Soft accent glow following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)`,
        }}
      />

      {/* Badge */}
      <div className="relative z-10 flex justify-end">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground">
          {s.badge}
        </span>
      </div>

      {/* Visual / number */}
      <div className="relative z-10 mt-6 flex items-center justify-center">
        <div className="relative">
          <div
            className="grid h-24 w-24 place-items-center rounded-2xl border border-white/10 bg-white/[0.02] transition-transform duration-500 group-hover:scale-105"
            style={{ boxShadow: `inset 0 0 40px -10px color-mix(in oklab, var(--accent) 30%, transparent)` }}
          >
            <Icon className="h-10 w-10" style={{ color: s.accent }} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-2 text-center">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "color-mix(in oklab, var(--accent) 70%, white 10%)" }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="relative z-10 mt-6">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {s.title}
        </h3>
        <p
          className="mt-3 font-mono text-[11px] uppercase tracking-wider"
          style={{ color: "color-mix(in oklab, var(--accent) 80%, white)" }}
        >
          {s.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {s.desc}
        </p>
      </div>

      {/* Tags */}
      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {s.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground"
          >
            <CheckCircle2 className="h-3 w-3" style={{ color: s.accent }} />
            {t}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
        {s.stats.map((st) => (
          <div
            key={st.label}
            className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
          >
            <div className="font-display text-lg font-bold text-foreground">
              {st.value}
            </div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              {st.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        type="button"
        className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[color:var(--accent)]/40 hover:bg-white/[0.06]"
      >
        Explore Service
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-background">
      <SectionHeader
        eyebrow="What We Build"
        title="Comprehensive"
        accent="Tech Services"
        description="End-to-end digital solutions — from mobile apps to AI automation — crafted with precision and cutting-edge technology."
      />

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}