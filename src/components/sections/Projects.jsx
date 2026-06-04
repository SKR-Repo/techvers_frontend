import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    tag: "Mobile App", year: "2026",
    title: "Kat-Forever — E-Commerce App/Website",
    desc: "Full-featured iOS & Android shopping app with real-time inventory, payments, and personalized discovery.",
    stack: ["React.js", "React Native", "Node.js", "MongoDB", "Stripe/Razorpay"],
    img: "/images/projects/img1.png",
    link: "https://www.katforever.in/"
  },
  {
    tag: "EdTech Platform", year: "2025",
    title: "Clif.ai — Global Learning & Career Platform",
    desc: "AI-powered global learning platform guiding students from education to employment with personalized paths.",
    stack: ["React", "Node.js", "MySQL", "AI APIs"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
    link: "https://clif.ai/"
  },
  {
    tag: "Web App", year: "2026",
    title: "Incubation Master — SaaS Dashboard",
    desc: "Business intelligence dashboard with real-time analytics, custom KPIs, and team workflows.",
    stack: ["Next.js", "Python", "PostgreSQL", "OpenAI"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
    link: "https://www.incubationmasters.com/"
  },
  {
  tag: "LegalTech SaaS",
  year: "2025",
  title: "Get Your Lawyers — AI-Powered Legal Workflow Platform",
  desc: "Enterprise legal management platform helping law firms and legal teams manage litigation, contracts, case repositories, hearings, and compliance workflows through AI-powered automation.",
  stack: ["React", "Node.js", "AI", "Case Management", "Legal Workflow"],
  img: "/images/projects/img4.png",
  link: "https://www.getyourlawyers.com/"
},
  {
    tag: "AI + WhatsApp", year: "2024",
    title: "LeadBot — WhatsApp AI Agent",
    desc: "Intelligent WhatsApp automation bot handling 500+ daily conversations and qualification flows.",
    stack: ["Node.js", "Twilio API", "GPT-4", "Redis"],
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
    link: "https://leadbot.ai/"
  },
  {
    tag: "Legal Tech", year: "2024",
    title: "AI Legal Software — Enterprise Solution",
    desc: "AI-powered enterprise legal software for case management, automated drafting, and real-time court tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=900&auto=format&fit=crop",
    link: "https://www.legaltech.com/"
  },
  // {
  //   tag: "AI Chatbot", year: "2025",
  //   title: "NexusAI — Customer Support Bot",
  //   desc: "Enterprise-grade AI chatbot trained on company knowledge base, reducing support ticket volume by 70%.",
  //   stack: ["LangChain", "FastAPI", "Pinecone", "Claude API"],
  //   img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&auto=format&fit=crop",
  //   link: "https://nexusai.com/"
  // },
];

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-background">
      <SectionHeader
        eyebrow="What We've Built"
        title="Live"
        accent="Projects"
        description="Real products shipped to real users — built with care, code, and creativity."
      />

      <div className="mx-auto mt-16 max-w-7xl px-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur transition hover:border-[oklch(0.82_0.15_200/0.5)] hover:shadow-[0_24px_60px_-20px_oklch(0.65_0.20_250/0.35)]"
          >
            {/* Animated dot grid on hover */}
            <div className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200 / 0.25), transparent 60%)" }}
            />
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-contain grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 backdrop-blur"
                style={{ borderColor: "oklch(0.82 0.15 200 / 0.4)" }}>
                <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "oklch(0.82 0.15 200)" }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "oklch(0.82 0.15 200)" }}>Live</span>
              </div>
              <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <a href={p.link} target="_blank" className="absolute right-4 bottom-4 grid h-10 w-10 place-items-center rounded-full text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" }}>
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="relative p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "oklch(0.82 0.15 200)" }}>
                  {p.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-[oklch(0.82_0.15_200)]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#contact"
          className="btn-cyan inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5"
        >
          View All Projects <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}