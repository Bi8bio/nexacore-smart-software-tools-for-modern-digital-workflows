import { Link } from 'react-router-dom'

export default function RefundPage() {
  return (
    <div data-component="src/pages/RefundPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Refund Policy</h1>
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
            <p>Last updated: July 2026</p>
            <p>
              YIDAN CAO LLC provides digital software access, SaaS subscriptions, and downloadable digital resources. Because our products are delivered digitally, customers may request a refund if they are unable to access the purchased service, were charged incorrectly, or experienced a technical issue that prevents use of the service.
            </p>
            <p>
              Refund requests can be sent to{' '}
              <a href="mailto:hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello-yidancao@proton.me</a>.
              Approved refunds will be processed back to the original payment method.
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
