import { useCart } from '@/context/CartContext'

const products = [
  {
    id: 'workflow-template-pack',
    name: 'Workflow Template Pack',
    price: 29,
    period: 'one-time',
    desc: 'A downloadable set of digital workflow templates, productivity resources, and ready-to-use business organization materials.',
    cta: 'Add to Cart',
    url: 'https://buy.stripe.com/4gM8wH0IA5hqdd7auA3ks02',
  },
  {
    id: 'onboarding-setup-guide',
    name: 'Onboarding & Setup Guide',
    price: 59,
    period: 'one-time',
    desc: 'A digital onboarding and setup resource package designed to help customers get started with YIDAN CAO LLC tools and organize their workflow more efficiently.',
    cta: 'Add to Cart',
    url: 'https://buy.stripe.com/14A00b76YbFO3CxfOU3ks03',
  },
]

export default function DigitalResources() {
  const { addItem } = useCart()

  return (
    <section data-component="src/components/DigitalResources.tsx" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Additional Digital Resources</h2>
          <p className="section-subheading mx-auto">One-time purchases to complement your subscription. All delivered digitally.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {products.map((p) => (
            <div key={p.id} className="glass-card p-6 sm:p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-300 sm:text-base leading-relaxed mb-5">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">${p.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{p.period}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    addItem({
                      id: p.id,
                      name: `YIDAN CAO LLC ${p.name}`,
                      price: p.price,
                      stripeUrl: p.url,
                    })
                  }}
                  className="btn-secondary w-full text-sm sm:text-base"
                >
                  {p.cta}
                </button>
                <a
                  href={p.url}
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
          All resources are delivered digitally. No physical products are shipped.
        </p>
      </div>
    </section>
  )
}
