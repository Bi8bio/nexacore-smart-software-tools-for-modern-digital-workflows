import { Link } from 'react-router-dom'

const STRIPE_URL = 'https://buy.stripe.com/28E4grezq39idd746c3ks07'

export default function PaymentPage() {
  return (
    <div data-component="src/pages/PaymentPage.tsx" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="max-w-lg w-full glass-card p-8 sm:p-10">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
          Custom Project Payment
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 text-center">
          Secure payment for custom software development, website development, maintenance, consulting, or project milestones. Please enter the agreed amount only.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-800/50 mb-8" />

        {/* Section Title */}
        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase text-center mb-4">
          SECURE CHECKOUT
        </p>

        {/* Checkout Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-8 text-center">
          You&apos;ll be redirected to Stripe&apos;s secure checkout to complete your payment. Please enter the agreed amount and follow the instructions to finish your payment.
        </p>

        {/* Button */}
        <a
          href={STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-sm sm:text-base flex items-center justify-center gap-2 mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Proceed to Payment
        </a>

        {/* Footer */}
        <p className="text-xs text-gray-600 text-center">
          Powered by Stripe. Your payment information is encrypted and securely processed.
        </p>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Return to Home</Link>
        </div>
      </div>
    </div>
  )
}
