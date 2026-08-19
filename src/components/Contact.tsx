import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setSubmitting(false)
  }

  return (
    <section data-component="src/components/Contact.tsx" id="contact" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-heading">Contact YIDAN CAO LLC</h2>
          <p className="section-subheading mx-auto">Have questions about our software plans or digital services? Contact our support team for help.</p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Message Sent</h3>
              <p className="text-sm text-gray-400">We'll get back to you soon. You can also reach us at hello-yidancao@proton.me</p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 text-sm">Send Another Message</button>
            </div>
          ) : (
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                <input
                  id="name" type="text" required
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                <input
                  id="email" type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors text-sm sm:text-base"
                  placeholder="hello-yidancao@proton.me"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  id="message" rows={4} required
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full text-sm sm:text-base disabled:opacity-50">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
          {!submitted && (
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">Or email us directly at hello-yidancao@proton.me</p>
          )}
        </div>
      </div>
    </section>
  )
}
