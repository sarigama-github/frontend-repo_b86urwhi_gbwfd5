import { motion } from 'framer-motion'
import { Map, Landmark, Trophy, Code2, GraduationCap, Mail, Github, Linkedin } from 'lucide-react'

const stops = [
  {
    id: 'about',
    title: 'About Me',
    icon: <Landmark className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-400',
    content: 'BE in Computer Engineering. I build interactive, performant web apps with a strong focus on DX and clean architecture.'
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <Code2 className="w-5 h-5" />,
    color: 'from-violet-500 to-fuchsia-400',
    content: 'React, FastAPI, Node, MongoDB, Tailwind, TypeScript, Docker, AWS, GitHub Actions, REST, WebSockets.'
  },
  {
    id: 'journey',
    title: 'Journey',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-400',
    content: 'From fundamentals to full-stack projects: delivering polished UX and reliable backend services.'
  },
  {
    id: 'achievements',
    title: 'Highlights',
    icon: <Trophy className="w-5 h-5" />,
    color: 'from-amber-500 to-orange-400',
    content: 'Shipped multiple apps, automated deployments, and optimized load times by focusing on core web vitals.'
  },
]

function StopCard({ stop, index }) {
  return (
    <motion.div
      id={stop.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.05 }}
      className="relative bg-slate-900/60 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-md"
    >
      <div className={`absolute -left-4 top-8 h-3 w-3 rounded-full bg-gradient-to-r ${stop.color} shadow-[0_0_20px_rgba(59,130,246,0.6)]`} />
      <div className="flex items-center gap-3 mb-2 text-blue-100">
        <div className={`p-2 rounded-xl bg-gradient-to-r ${stop.color} text-white`}>{stop.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold">{stop.title}</h3>
      </div>
      <p className="text-blue-200/90 text-sm sm:text-base leading-relaxed">{stop.content}</p>
    </motion.div>
  )
}

function MetroMap() {
  return (
    <section id="stations" className="relative py-20 bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_20%_20%,rgba(37,99,235,0.08),transparent),radial-gradient(600px_400px_at_80%_20%,rgba(236,72,153,0.08),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <Map className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold">Hyperloop Journey</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/40 via-fuchsia-400/40 to-emerald-400/40 -translate-x-1/2 rounded-full" />

          {stops.map((s, i) => (
            <div key={s.id} className={`relative ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:translate-y-12'}`}>
              <StopCard stop={s} index={i} />
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <a href="#contact" className="group flex items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Mail className="w-5 h-5 text-blue-300" />
            <span className="text-blue-100 group-hover:text-white transition">Get in touch</span>
          </a>
          <div className="flex gap-3">
            <a href="https://github.com/" target="_blank" className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/" target="_blank" className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetroMap
