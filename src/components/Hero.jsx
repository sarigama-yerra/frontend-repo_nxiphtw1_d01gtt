import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            Available for freelance • Based in Anywhere
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Alex Carter — Full‑Stack Engineer
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            I build delightful, scalable web products. I love great DX, clean code, and shipping fast.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="secondary">Contact Me</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
