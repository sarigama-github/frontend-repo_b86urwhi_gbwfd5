import { Send } from 'lucide-react'

function FooterContact() {
  return (
    <footer id="contact" className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Let’s build something</h3>
            <p className="text-blue-200/90">Have an idea or a role in mind? I’m open to freelance and full‑time opportunities.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="grid sm:grid-cols-3 gap-3">
            <input placeholder="Your email" className="sm:col-span-1 px-4 py-2 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 ring-blue-500/50 text-sm" />
            <input placeholder="Quick message" className="sm:col-span-1 px-4 py-2 rounded-xl bg-white/10 border border-white/10 outline-none focus:ring-2 ring-blue-500/50 text-sm" />
            <button className="sm:col-span-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white transition">
              <Send className="w-4 h-4" /> Send
            </button>
          </form>
        </div>
        <div className="mt-8 text-sm text-blue-300/70">
          © {new Date().getFullYear()} Prasad Jadhav. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterContact
