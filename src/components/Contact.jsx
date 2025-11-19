import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    if (form.name.length < 2 || form.message.length < 10) {
      setStatus({ type: "error", msg: "Please provide a valid name and a longer message." });
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      await res.json();
      setStatus({ type: "success", msg: "Thanks! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Get in touch
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:ring-blue-500"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:ring-blue-500"
              placeholder="Tell me about your project..."
            />
          </Field>
          <div className="flex items-center gap-3">
            <Button size="lg" type="submit">Send message</Button>
            {status && (
              <span className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">{label}</span>
      {children}
    </label>
  );
}
