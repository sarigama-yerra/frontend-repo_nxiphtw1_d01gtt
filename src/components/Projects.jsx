import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";

const projects = [
  {
    title: "Realtime Collab Docs",
    description: "A Notion‑like editor with CRDT sync, comments, and AI assist.",
    tech: ["Next.js", "tRPC", "Postgres", "Tailwind"],
    image: "/projects/doc.png",
    href: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "SaaS analytics with embeddable charts and webhooks.",
    tech: ["React", "D3", "Prisma"],
    image: "/projects/analytics.png",
    href: "#"
  },
  {
    title: "Headless Commerce",
    description: "Modern storefront with server actions and payments.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    image: "/projects/commerce.png",
    href: "#"
  },
  {
    title: "Design System",
    description: "Accessible component library and tokens.",
    tech: ["Radix", "Storybook", "TypeScript"],
    image: "/projects/ds.png",
    href: "#"
  },
];

export default function Projects() {
  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Projects</h2>
          <p className="mt-2 text-white/70">A few things I've built recently.</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-3 shadow-xl shadow-black/20"
            >
              <div className="aspect-video overflow-hidden rounded-xl bg-slate-900">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
