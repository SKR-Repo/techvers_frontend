import { Phone, Mail, MapPin, Hexagon } from "lucide-react";

const company = [
  { label: "About Us", href: "#team" },
  { label: "Our Team", href: "#team" },
  { label: "Careers", href: "#" },
  { label: "Press Release", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { label: "Web Development", href: "#services" },
  { label: "Mobile App Development", href: "#services" },
  { label: "AI Solutions", href: "#services" },
  { label: "WhatsApp Integration", href: "#services" },
  { label: "Business Automation", href: "#services" },
  { label: "AI Chatbots", href: "#services" },
  { label: "Website Maintenance", href: "#services" },
];

const resources = [
  { label: "Portfolio", href: "#projects" },
  { label: "Hire Developers", href: "#contact" },
  { label: "Blog", href: "#" },
  { label: "Case Studies", href: "#projects" },
  { label: "Privacy Policy", href: "#" },
];

const offices = ["Bhopal", "Indore", "Ranchi", "Hyderabad", "Bangalore"];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* Top row: brand */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="grid h-12 w-12 place-items-center rounded-xl"
              style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" }}
            >
              <Hexagon size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-tight">TechVers</div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.82 0.15 200)" }}>
                Digital Innovation Studio
              </div>
            </div>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Engineering production-grade web, mobile, and AI platforms for forward-thinking businesses worldwide.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 md:grid-cols-12 py-14">
          <div className="md:col-span-3">
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">Company</div>
            <ul className="mt-5 space-y-3 text-sm">
              {company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-foreground hover:text-[oklch(0.82_0.15_200)] transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-foreground hover:text-[oklch(0.82_0.15_200)] transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">Resources</div>
            <ul className="mt-5 space-y-3 text-sm">
              {resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-foreground hover:text-[oklch(0.82_0.15_200)] transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">Contact</div>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-foreground">
                <Phone size={16} style={{ color: "oklch(0.82 0.15 200)" }} />
                +91 9302826662
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <Mail size={16} style={{ color: "oklch(0.82 0.15 200)" }} />
                hello@techvers.in
              </li>
            </ul>
            <div className="mt-7">
              <div className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                <MapPin size={16} style={{ color: "oklch(0.82 0.15 200)" }} />
                Global Offices
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {offices.map((o) => (
                  <span
                    key={o}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    <span style={{ color: "oklch(0.82 0.15 200)" }}>IN</span>&nbsp; {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <div>© {new Date().getFullYear()} TechVers — All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition">Cookie Policy</a>
            <a href="#" className="hover:text-foreground transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}