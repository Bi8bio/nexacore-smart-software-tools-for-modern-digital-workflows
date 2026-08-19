const STRIPE_URL = 'https://buy.stripe.com/eVq7sEcoy8x77qMcUb6wE0z'

export default function PaymentModule() {
  return (
    <section data-component="src/components/PaymentModule.tsx" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Custom Project Payment</h2>
          <p className="section-subheading mx-auto">Secure payment for custom software development, website development, maintenance, consulting, or project milestones. Please enter the agreed amount only.</p>
        </div>

        <div className="glass-card p-6 sm:p-10">
          {/* SECURE CHECKOUT */}
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase text-center mb-6">
            SECURE CHECKOUT
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center mb-8">
            You&apos;ll be redirected to Stripe&apos;s secure checkout to complete your payment. Please enter the agreed amount and follow the instructions to finish your payment.
          </p>

          {/* Button */}
          <div className="flex justify-center mb-6">
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm sm:text-base inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Proceed to Payment
            </a>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-600 text-center">
            Powered by Stripe. Your payment information is encrypted and securely processed.
          </p>
        </div>
      </div>
    </section>
  )
}
