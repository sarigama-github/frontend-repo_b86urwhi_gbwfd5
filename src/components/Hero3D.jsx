import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm/0"
        >
          <p className="text-sm tracking-widest text-blue-300/80 uppercase mb-3">Portfolio of</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Prasad Jadhav
          </h1>
          <p className="mt-4 max-w-2xl text-blue-200/90 text-lg">
            Software Developer (B.E. Computer) crafting resilient web apps with React, FastAPI, and cloud-native workflows. I turn complex ideas into smooth, playful, interactive experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#stations" className="px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 transition">
              Enter Mission
            </a>
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Quick skill chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {['React','FastAPI','MongoDB','TypeScript','Tailwind','Docker','CI/CD'].map((s) => (
            <span key={s} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-100">{s}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-200/70 text-xs">
        <div className="animate-bounce">Scroll ↓</div>
      </div>
    </section>
  )
}

export default Hero3D
