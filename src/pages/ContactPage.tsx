import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div data-component="src/pages/ContactPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact YIDAN CAO LLC</h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
            Need help with your account, subscription, software access, billing, or digital product delivery? Contact the YIDAN CAO LLC support team.
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            Support email:{' '}
            <a href="mailto:hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              hello-yidancao@proton.me
            </a>
          </p>

          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold mb-2">Your message has been sent.</p>
              <p className="text-sm text-gray-400 mb-6">We will get back to you by email as soon as possible.</p>
              <button
                onClick={() => setSent(false)}
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors"
                  placeholder="hello-yidancao@proton.me"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
            </form>
          )}

          <p className="text-xs sm:text-sm text-gray-500 mt-8 pt-6 border-t border-gray-800">
            All support requests are handled online. YIDAN CAO LLC does not ship physical products.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
