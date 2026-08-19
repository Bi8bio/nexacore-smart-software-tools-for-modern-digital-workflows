import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { items, subtotal, itemCount, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div data-component="src/pages/CheckoutPage.tsx" className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center glass-card p-10 max-w-md">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">Your cart is empty</h2>
          <p className="text-sm text-gray-400 mb-6">Browse our software tools and add products to your cart.</p>
          <Link to="/products" className="btn-primary text-sm">Browse Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div data-component="src/pages/CheckoutPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Checkout</h1>

        {/* Order Summary */}
        <div className="glass-card p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-800/50">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">${(item.price * item.quantity).toLocaleString()}</span>
                  <button onClick={() => removeItem(item.id)} className="text-gray-600 hover:text-red-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-gray-400">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
            <span className="text-xl font-bold text-white">${subtotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Secure Checkout */}
        <div className="glass-card p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Secure Checkout</h2>
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-cyan-400 mb-1">Stripe Secure Checkout</p>
            <p className="text-xs text-gray-500 mb-4">You will be redirected to Stripe to complete your payment securely.</p>
            <a
              href="https://buy.stripe.com/eVq7sEcoy8x77qMcUb6wE0z"
              className="btn-primary w-full text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Proceed to Payment
            </a>
          </div>
        </div>

        {/* Legal */}
        <p className="text-xs text-gray-500 text-center mb-8 px-4">
          By completing your purchase, you acknowledge the{' '}
          <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">Terms of Service</Link> and{' '}
          <Link to="/refund-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Refund Policy</Link>.
          {' '}<Link to="/privacy-policy" className="text-cyan-400 hover:text-cyan-300 transition-colors">Privacy Policy</Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/products" className="btn-secondary text-sm px-8 py-3 text-center">Continue Shopping</Link>
        </div>
      </div>
    </div>
  )
}
