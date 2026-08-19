const steps = [
  { step: '01', title: 'Choose a Plan', desc: 'Select the software access plan or digital tool package that fits your needs.' },
  { step: '02', title: 'Create Your Account', desc: 'Register online and receive secure access instructions by email.' },
  { step: '03', title: 'Start Using the Tools', desc: 'Log in to your account and start using your digital software resources instantly.' },
  { step: '04', title: 'Manage Your Subscription', desc: 'Upgrade, renew, or cancel your subscription through online account support.' },
]

export default function HowItWorks() {
  return (
    <section data-component="src/components/HowItWorks.tsx" id="how-it-works" className="py-16 sm:py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">How YIDAN CAO LLC Works</h2>
          <p className="section-subheading mx-auto">Get started in minutes. No hardware, no downloads, no complexity.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative glass-card p-5 sm:p-6 pt-8">
              <span className="absolute -top-4 left-6 text-6xl font-extrabold text-cyan-500/10 select-none">{s.step}</span>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
