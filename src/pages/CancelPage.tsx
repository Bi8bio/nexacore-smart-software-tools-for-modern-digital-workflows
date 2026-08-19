import { Link } from 'react-router-dom'

export default function CancelPage() {
  return (
    <div data-component="src/pages/CancelPage.tsx" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="max-w-lg w-full text-center glass-card p-8 sm:p-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Payment Canceled</h1>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
          Your payment was not completed. you can return to the pricing section and choose a plan or digital product again anytime.
        </p>

        <Link to="/#pricing" className="btn-primary">Back to Pricing</Link>
      </div>
    </div>
  )
}
