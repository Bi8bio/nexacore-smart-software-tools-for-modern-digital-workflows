const benefits = [
  'Fully digital software delivery',
  'No physical products or shipping required',
  'Secure online access',
  'Simple subscription management',
  'Designed for productivity and business workflows',
]

export default function WhyChooseUs() {
  return (
    <section data-component="src/components/WhyChooseUs.tsx" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Why Choose YIDAN CAO LLC</h2>
          <p className="section-subheading mx-auto">Built from the ground up for a digital-first world.</p>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-200">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
