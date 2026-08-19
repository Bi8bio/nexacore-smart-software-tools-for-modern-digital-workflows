import { Link } from 'react-router-dom'

export default function OrderSuccessPage() {
  return (
    <div data-component="src/pages/OrderSuccessPage.tsx" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="max-w-lg w-full text-center glass-card p-8 sm:p-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Payment Successful</h1>
        <p className="text-sm text-gray-400 mb-6">Thank You for Your Purchase</p>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
          Your payment has been successfully received.
        </p>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
          A payment confirmation will be sent to the email address you provided during checkout.
        </p>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
          If your purchase requires digital delivery or additional instructions, please check your email for further information.
        </p>

        <div className="border-t border-gray-800/50 pt-6 mb-8">
          <p className="text-sm text-gray-400 mb-2">Need Help?</p>
          <p className="text-sm text-gray-300">
            <a href="mailto:YIDAN CAO hello-yidancao@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">YIDAN CAO hello-yidancao@proton.me</a>
            <span className="text-gray-600 mx-2">|</span>
            <a href="tel:+16266559557" className="text-cyan-400 hover:text-cyan-300 transition-colors">626-655-9557</a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/products" className="btn-primary text-sm">Continue Shopping</Link>
          <Link to="/" className="btn-secondary text-sm">Return to Home</Link>
        </div>
      </div>
    </div>
  )
}
