import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../../apis/axiosInstance";
import { trackEvent } from "../../utils/analytics";

import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap,
  Mail,
  Phone,
  User,
  AtSign,
} from "lucide-react";

const interests = [
  "Web Development",
  "Mobile Apps",
  "AI Solutions",
  "WhatsApp Integration",
  "Automation",
  "UI/UX Design",
];

const features = [
  { icon: Globe, title: "Global Scale", sub: "Borderless Tech" },
  { icon: ShieldCheck, title: "Top Security", sub: "Audit Ready" },
  { icon: Zap, title: "Fast Delivery", sub: "Agile Sprints" },
];

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const displayInterests = [...interests, "Other"];

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Client-side Validation (Fixed the return statements here)
    if (formData.name.trim().length < 2) {
      setToast({ type: "error", message: "Name must be at least 2 characters" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setToast({ type: "error", message: "Please enter a valid email" });
      return;
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      setToast({ type: "error", message: "Please enter a valid phone number" });
      return;
    }
    if (selectedInterests.length === 0) {
      setToast({ type: "error", message: "Please select at least one interest" });
      return;
    }
    if (selectedInterests.includes("Other") && customInterest.trim() === "") {
      setToast({ type: "error", message: "Please describe your custom interest" });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        interests: selectedInterests,
        customInterest: selectedInterests.includes("Other") ? customInterest.trim() : undefined,
        message: formData.message.trim() || undefined,
      };

      await axiosInstance.post("/connection", payload);
      trackEvent(
        "Contact Form",
        "Submit",
        "Website Contact Form"
      );
      setToast({ type: "success", message: "Inquiry submitted successfully! We'll be in touch soon." });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedInterests([]);
      setCustomInterest("");
    } catch (err) {
      trackEvent(
        "Contact Form",
        "Failed",
        err?.response?.status?.toString() || "Unknown Error"
      );

      const msg =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";

      setToast({
        type: "error",
        message: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInterestToggle = (opt) => {
    if (selectedInterests.includes(opt)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== opt));
    } else {
      setSelectedInterests([...selectedInterests, opt]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full blur-[160px] radial-cyan opacity-60" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full blur-[160px] radial-cyan opacity-40" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center rounded-md px-4 py-2 backdrop-blur"
              style={{
                background: "oklch(0.65 0.20 250 / 0.18)",
                border: "1px solid oklch(0.65 0.20 250 / 0.35)",
              }}
            >
              <span
                className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase"
                style={{ color: "oklch(0.82 0.15 240)" }}
              >
                Connect With TechVers
              </span>
            </div>

            <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-foreground">
              Ready to Build Your{" "}
              <span className="text-gradient-cyan">Digital Vision?</span>
            </h2>

            <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Whether you're a startup or an enterprise, we bring your software
              ambitions to life with precision, performance, and security.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm hover:border-[oklch(0.65_0.20_250/0.5)] hover:bg-white/[0.04] transition-all"
                >
                  <f.icon
                    size={22}
                    style={{ color: "oklch(0.82 0.15 240)" }}
                    strokeWidth={1.8}
                  />
                  <div className="mt-5 font-display font-bold text-foreground">
                    {f.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {f.sub}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:hello@techvers.in"
                onClick={() =>
                  trackEvent(
                    "Contact",
                    "Email Click",
                    "hello@techvers.in"
                  )
                }
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 hover:border-[oklch(0.65_0.20_250/0.5)] hover:bg-white/[0.04] transition-all"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-lg"
                  style={{
                    background: "oklch(0.65 0.20 250 / 0.18)",
                    border: "1px solid oklch(0.65 0.20 250 / 0.3)",
                  }}
                >
                  <Mail size={18} style={{ color: "oklch(0.82 0.15 240)" }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    Official Mail
                  </div>
                  <div className="mt-1 font-display font-bold text-foreground text-sm">
                    hello@techvers.in
                  </div>
                </div>
              </a>
              <a
                href="tel:+919302826662"
                onClick={() =>
                  trackEvent(
                    "Contact",
                    "Phone Click",
                    "+919302826662"
                  )
                }
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 hover:border-[oklch(0.65_0.20_250/0.5)] hover:bg-white/[0.04] transition-all"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-lg"
                  style={{
                    background: "oklch(0.65 0.20 250 / 0.18)",
                    border: "1px solid oklch(0.65 0.20 250 / 0.3)",
                  }}
                >
                  <Phone size={18} style={{ color: "oklch(0.82 0.15 240)" }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    Direct Line
                  </div>
                  <div className="mt-1 font-display font-bold text-foreground text-sm">
                    +91 93028 26662
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-white/10 bg-[oklch(0.18_0.04_265/0.55)] p-6 sm:p-10 backdrop-blur-xl shadow-[0_30px_100px_-30px_oklch(0.65_0.20_250/0.4)]"
          >
            <div className="flex items-end gap-2">
              <h3 className="font-display text-3xl font-bold text-foreground">
                Send Message
              </h3>
            </div>
            <div
              className="mt-2 h-[3px] w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.82 0.15 240), oklch(0.65 0.20 250))",
              }}
            />

            {/* Name + Email + Phone */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                icon={User}
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              <Field
                label="Email"
                icon={AtSign}
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Phone"
                  icon={Phone}
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Interested In */}
            <div className="mt-7">
              <label className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-muted-foreground">
                Interested In
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {displayInterests.map((opt) => {
                  const active = selectedInterests.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleInterestToggle(opt)}
                      className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${active
                        ? "text-white shadow-[0_8px_24px_-6px_oklch(0.65_0.20_250/0.6)]"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                      style={
                        active
                          ? {
                            background:
                              "linear-gradient(135deg, oklch(0.65 0.20 250), oklch(0.55 0.22 265))",
                          }
                          : {
                            background: "oklch(0.22 0.04 265 / 0.6)",
                            border: "1px solid oklch(1 0 0 / 0.08)",
                          }
                      }
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {selectedInterests.includes("Other") && (
                  <motion.div
                    key="custom-interest-input" // <--- ADDED KEY HERE
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <input
                      type="text"
                      placeholder="Describe your interest..."
                      value={customInterest}
                      onChange={(e) => setCustomInterest(e.target.value)}
                      className="w-full rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[oklch(0.65_0.20_250/0.7)] focus:shadow-[0_0_0_4px_oklch(0.65_0.20_250/0.12)]"
                      style={{
                        background: "oklch(0.16 0.03 265 / 0.7)",
                        border: "1px solid oklch(1 0 0 / 0.08)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className="mt-7">
              <label className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your project goals..."
                className="mt-3 w-full resize-none rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[oklch(0.65_0.20_250/0.7)] focus:shadow-[0_0_0_4px_oklch(0.65_0.20_250/0.12)]"
                style={{
                  background: "oklch(0.16 0.03 265 / 0.7)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              />
            </div>

            <div className="mt-6">
              <AnimatePresence>
                {toast && (
                  <motion.div
                    key="toast-notification" // <--- ADDED KEY HERE
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl px-5 py-3.5 text-sm font-medium mb-4"
                    style={{
                      background:
                        toast.type === "success"
                          ? "oklch(0.35 0.10 155 / 0.4)"
                          : "oklch(0.35 0.18 25 / 0.4)",
                      border: `1px solid ${toast.type === "success"
                        ? "oklch(0.65 0.15 155 / 0.5)"
                        : "oklch(0.65 0.20 25 / 0.5)"
                        }`,
                      color:
                        toast.type === "success"
                          ? "oklch(0.85 0.12 155)"
                          : "oklch(0.85 0.15 25)",
                    }}
                  >
                    {toast.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() =>
                trackEvent(
                  "CTA",
                  "Click",
                  "Book Consultation"
                )
              }
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 disabled:pointer-events-none"
              style={{
                opacity: loading ? 0.7 : 1,
                background:
                  "linear-gradient(90deg, oklch(0.55 0.22 260), oklch(0.50 0.24 285))",
                boxShadow:
                  "0 20px 50px -15px oklch(0.55 0.22 265 / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.15)",
              }}
            >
              {loading ? "Sending..." : "Send Inquiry"}
              {!loading && (
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon: Icon, type = "text", placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-muted-foreground">
        {label}
      </label>
      <div className="relative mt-3">
        <Icon
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/70"
        />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl pl-11 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[oklch(0.65_0.20_250/0.7)] focus:shadow-[0_0_0_4px_oklch(0.65_0.20_250/0.12)]"
          style={{
            background: "oklch(0.16 0.03 265 / 0.7)",
            border: "1px solid oklch(1 0 0 / 0.08)",
          }}
        />
      </div>
    </div>
  );
}