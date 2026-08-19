import { useState } from 'react'
import type { FAQItem } from '@/types'

const faqs: FAQItem[] = [
  {
    q: 'Do you ship physical products?',
    a: 'No. YIDAN CAO LLC provides online software access, SaaS subscriptions, and digital workflow resources only. No physical products are shipped.',
  },
  {
    q: 'How do I receive access after payment?',
    a: 'After successful payment, customers receive access instructions by email or through their online account.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes. Customers can manage, upgrade, or cancel their subscription by contacting support.',
  },
  {
    q: 'What does YIDAN CAO LLC provide?',
    a: 'YIDAN CAO LLC provides online software tools, SaaS subscriptions, productivity resources, cloud-based account access, and digital workflow solutions.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'YIDAN CAO LLC provides digital software access and online subscription services. Refund requests can be sent to hello-yidancao@proton.me if you are unable to access the purchased service, were charged incorrectly, or experienced a technical issue.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section data-component="src/components/FAQ.tsx" id="faq" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">Everything you need to know about YIDAN CAO LLC's digital services.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-800/20 transition-colors"
              >
                <span className="font-medium text-white text-sm sm:text-base pr-4">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${active === i ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {active === i && (
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
