import { Link } from 'react-router-dom'

export default function SuccessPage() {
  return (
    <div data-component="src/pages/SuccessPage.tsx" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="max-w-lg w-full text-center glass-card p-8 sm:p-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Payment Successful</h1>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
          Thank you for subscribing to YIDAN CAO LLC. Your online software access or digital product instructions will be sent to your email address. If you need help accessing your purchase, please contact support.
        </p>

        <p className="text-sm text-gray-400 mb-8">
          Support email:{' '}
          <a href="mailto:hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            hello-yidancao@proton.me
          </a>
        </p>

        <Link to="/" className="btn-primary">Return to Home</Link>
      </div>
    </div>
  )
}
