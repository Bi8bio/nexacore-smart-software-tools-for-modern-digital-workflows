export default function Hero() {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section data-component="src/components/Hero.tsx" id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm sm:text-base font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Cloud-based SaaS platform
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto">
          Smart Software Tools for{' '}
          <span className="gradient-text">Modern Digital Workflows</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          YIDAN CAO LLC delivers secure cloud-based software tools, digital workflow solutions, and online subscription services — helping individuals and businesses work faster, stay organized, and manage digital tasks efficiently.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={scrollToPricing} className="btn-primary text-sm sm:text-base px-8 py-3.5">Get Started</button>
          <button onClick={scrollToPricing} className="btn-secondary text-sm sm:text-base px-8 py-3.5">View Plans</button>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-gray-500">100% online delivery &middot; No physical shipping &middot; Secure digital access</p>
      </div>
    </section>
  )
}
