import type { Plan } from '@/types'
import { useCart } from '@/context/CartContext'

interface PricingProps {
  plans: Plan[]
}

export default function Pricing({ plans }: PricingProps) {
  const { addItem } = useCart()

  return (
    <section data-component="src/components/Pricing.tsx" id="pricing" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Simple Online Software Plans</h2>
          <p className="section-subheading mx-auto">Choose the plan that fits your workflow. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`relative glass-card p-6 sm:p-8 flex flex-col ${p.highlight ? 'ring-2 ring-cyan-500/50 shadow-xl shadow-cyan-500/10' : ''}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-gray-950 text-xs font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-base sm:text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-300 sm:text-base mt-1">{p.desc}</p>
              <div className="mt-5 sm:mt-6 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 sm:gap-3 text-sm text-gray-200 sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    addItem({
                      id: `plan-${p.name.toLowerCase().replace(/\s+/g, '-')}`,
                      name: `YIDAN CAO LLC ${p.name}`,
                      price: parseFloat(p.price.replace('$', '')),
                      stripeUrl: p.stripeUrl,
                    })
                  }}
                  className={p.highlight ? 'btn-primary w-full text-sm sm:text-base' : 'btn-secondary w-full text-sm sm:text-base'}
                >
                  Add to Cart
                </button>
                <a
                  href={p.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-center text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  or buy now directly
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 sm:text-base mt-8 sm:mt-10">
          All plans are delivered digitally through online account access. No physical products are shipped.
        </p>
      </div>
    </section>
  )
}
