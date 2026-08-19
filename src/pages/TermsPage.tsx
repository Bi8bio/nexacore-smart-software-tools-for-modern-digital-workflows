import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <div data-component="src/pages/TermsPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
            <p>Last updated: July 2026</p>
            <p>
              YIDAN CAO LLC provides online software tools, SaaS subscriptions, productivity resources, digital workflow solutions, cloud-based account access, and downloadable digital resources.
            </p>
            <p>
              Customers agree to use YIDAN CAO LLC services lawfully and may not misuse, resell, reverse engineer, abuse, disrupt, or attempt to gain unauthorized access to the service.
            </p>
            <p>
              Subscription fees are billed according to the selected plan. One-time digital products are charged at the time of purchase.
            </p>
            <p>
              All YIDAN CAO LLC products and services are delivered digitally. YIDAN CAO LLC does not sell or ship physical products.
            </p>
            <p>
              For support, contact{' '}
              <a href="mailto:hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello-yidancao@proton.me</a>.
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
