import { useCart } from '@/context/CartContext'

const FULL_BUNDLE_URL = 'https://buy.stripe.com/dRm3cnfDu11a4GBgSY3ks06'

export default function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, removeItem, updateQty, clearCart, toggleCart } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => toggleCart(false)}
        />
      )}

      {/* Drawer */}
      <div
        data-component="src/components/CartDrawer.tsx"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-gray-950 border-l border-gray-800/50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800/50">
            <h2 className="text-lg font-semibold text-white">
              Your Cart {itemCount > 0 && <span className="text-cyan-400">({itemCount})</span>}
            </h2>
            <button
              onClick={() => toggleCart(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-3">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800/50">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.name}</p>
                      <p className="text-sm text-cyan-400 mt-0.5">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="text-sm text-white w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 p-1 text-gray-500 hover:text-red-400 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-800/50 px-5 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Subtotal</span>
                <span className="text-lg font-bold text-white">${subtotal.toFixed(2)}</span>
              </div>
              <a
                href={FULL_BUNDLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Proceed to Checkout
              </a>
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-gray-300 transition-colors py-1"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
