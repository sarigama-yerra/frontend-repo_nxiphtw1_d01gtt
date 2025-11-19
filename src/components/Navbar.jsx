import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-white"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md shadow-cyan-500/30" />
          <span className="font-semibold">Alex Carter</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#timeline" className="hover:text-white transition">Timeline</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu"><Menu size={22} /></button>
      </div>
    </header>
  );
}
