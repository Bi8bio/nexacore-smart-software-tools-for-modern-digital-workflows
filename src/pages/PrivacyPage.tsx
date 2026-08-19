import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <div data-component="src/pages/PrivacyPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
            <p>Last updated: July 2026</p>
            <p>
              YIDAN CAO LLC may collect basic customer information such as name, email address, billing details, account information, and support messages. This information is used to provide online software access, manage subscriptions, process digital product orders, respond to support requests, and improve our services.
            </p>
            <p>
              Payment information is processed securely through Stripe. YIDAN CAO LLC does not store full credit card details on the website.
            </p>
            <p>
              Customers may contact{' '}
              <a href="mailto:hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello-yidancao@proton.me</a>{' '}
              for privacy-related questions.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
