import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Chat',
    desc: 'WebSocket chat with FastAPI and React, themeable UI, typing indicators.',
    tags: ['FastAPI', 'React', 'WebSockets'],
    link: '#'
  },
  {
    title: 'E‑commerce API',
    desc: 'Secure product, cart, and order services with MongoDB and JWT.',
    tags: ['MongoDB', 'JWT', 'REST'],
    link: '#'
  },
  {
    title: 'Portfolio Engine',
    desc: 'Config‑driven portfolio builder with animations and Spline 3D.',
    tags: ['Framer Motion', 'Spline', 'Tailwind'],
    link: '#'
  }
]

function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Selected Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(400px_200px_at_20%_0%,rgba(59,130,246,0.2),transparent)]" />
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-blue-200/90 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xxs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-blue-100">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
