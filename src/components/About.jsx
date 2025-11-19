import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "tRPC",
  "Postgres",
  "Prisma",
  "TailwindCSS",
  "Radix UI",
  "Framer Motion",
];

export default function About() {
  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
          <p className="mt-3 max-w-3xl text-white/80">
            I'm a full‑stack engineer focused on delightful user experiences, strong foundations, and
            maintainable systems. I enjoy working across the stack, from design systems to data models.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/90 shadow-sm"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
