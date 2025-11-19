import { motion } from "framer-motion";

const items = [
  { year: "2024", title: "Senior Engineer • Acme Inc.", desc: "Led platform team, delivered multi-region rollout.", side: "left" },
  { year: "2022", title: "Engineer • Startly", desc: "Built greenfield SaaS from 0→1.", side: "right" },
  { year: "2021", title: "B.Sc. Computer Science", desc: "Graduated with honors.", side: "left" },
  { year: "2019", title: "Internship • TechLab", desc: "First shipped feature in prod.", side: "right" },
];

export default function Timeline() {
  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Timeline</h2>
        <div className="relative mt-10">
          <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid items-start gap-6 md:grid-cols-2 ${it.side === 'left' ? '' : ''}`}
              >
                <div className={`order-1 md:order-${it.side === 'left' ? '1' : '2'}`}>
                  {it.side === 'left' ? (
                    <Card it={it} align="right" />
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
                <div className="order-2 hidden place-items-center md:grid">
                  <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white shadow-xl shadow-black/30 ring-1 ring-inset ring-white/15">
                    <span className="text-sm font-semibold">{it.year}</span>
                    <div className="absolute -z-10 h-16 w-16 rounded-full bg-blue-500/20 blur-xl" />
                  </div>
                </div>
                <div className={`order-3 md:order-${it.side === 'left' ? '3' : '1'}`}>
                  {it.side === 'right' ? (
                    <Card it={it} align="left" />
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ it, align }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-xl shadow-black/20 ${align === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}>
      <h3 className="text-lg font-semibold">{it.title}</h3>
      <p className="mt-1 text-white/70">{it.desc}</p>
    </div>
  );
}
