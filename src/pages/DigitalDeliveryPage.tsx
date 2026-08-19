import { Link } from 'react-router-dom'

export default function DigitalDeliveryPage() {
  return (
    <div data-component="src/pages/DigitalDeliveryPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Digital Delivery Policy</h1>
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
            <p>Last updated: July 2026</p>
            <p>
              YIDAN CAO LLC provides online software tools, SaaS subscriptions, digital workflow resources, productivity solutions, cloud-based account access, and downloadable digital resources. All products and services are delivered digitally through online accounts, email instructions, downloadable access, or subscription-based software access.
            </p>
            <p>
              YIDAN CAO LLC does not sell or ship physical products.
            </p>
            <p>
              Customers receive access instructions by email or through their online account after successful payment. If a customer has trouble accessing the service, they may contact{' '}
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
