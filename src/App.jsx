import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <div id="projects"><Projects /></div>
        <div id="timeline"><Timeline /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Alex Carter. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
