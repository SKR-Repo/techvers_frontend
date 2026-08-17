import { motion } from "framer-motion";
import { GrLinkedin } from "react-icons/gr";
import SectionHeader from "../sections/SectionHeader";
import { Badge, BadgeIcon } from "lucide-react";

const team = [
  {
    name: "Dr. Kapil Chaturvedi",
    role: "Technical Lead & AI Strategist",
    badge: "Lead Consultant",
    badgeColor: "oklch(0.78 0.18 155)",
    tags: ["Data Analyst", "Data Scientist", "Data Visualization"],
    img: "/images/team/img1.jpg",
    expertise: "10+ years"
  },
  {
    name: "Ayodhya Gupta",
    role: "Founder & Lead Engineer",
    badge: "Founder",
    badgeColor: "oklch(0.65 0.20 250)",
    tags: ["Strategy", "Full-Stack", "Architecture"],
    img: "/images/team/img2.jpeg",
    expertise: "4+ years"
  },  
  {
    name: "Shubham Rai",
    role: "Full-Stack AI Developer & Lead Manager",
    badge: "Director",
    badgeColor: "oklch(0.75 0.18 65)",
    tags: ["MERN", "Next.js", "DevOps"],
    img: "/images/team/img3.jpg",
    expertise: "3+ years"
  },
  {
    name: "Vansh Sahu",
    role: "Video-Editor",
    badge: "Video-Editor",
    badgeColor: "oklch(0.65 0.20 250)",
    tags: ["LLM", "RAG", "Automation"],
    img: "/images/team/img5.jpeg",
    expertise: "3+ years"
  },
  // {
  //   name: "Himanshu Chaurasia",
  //   role: "AI Engineering Lead",
  //   badge: "Director",
  //   badgeColor: "oklch(0.65 0.20 250)",
  //   tags: ["LLM", "RAG", "Automation"],
  //   img: "/images/team/img4.jpg",
  //   expertise: "10+ years"
  // },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet Our"
          accent="Expert Team"
          description="World-class talent united by a single mission — building the future of digital business."
        />

        <div className="mx-auto mt-16 max-w-7xl px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => {
            const tint = m.badgeColor.replace(")", " / 0.18)");
            return (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur transition hover:border-white/25"
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] z-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.badgeColor}, transparent)` }}
                />

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  {/* Role badge */}
                  <span
                    className="absolute left-5 top-5 rounded-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ background: m.badgeColor }}
                  >
                    {m.badge}
                  </span>

                  {/* Name & role overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl font-bold text-white drop-shadow">{m.name}</h3>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">{m.role}</div>
                  </div>
                </div>

                {/* Footer with tags + linkedin */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md px-2 py-1 font-mono text-[9px] uppercase tracking-widest"
                        style={{ background: tint, color: m.badgeColor }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition hover:text-[oklch(0.82_0.15_200)]"
                  >
                    <Badge size={14} /> Industry Expertise : {m.expertise}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}