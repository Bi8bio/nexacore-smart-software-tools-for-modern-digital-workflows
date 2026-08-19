import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer data-component="src/components/Footer.tsx" className="border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-950" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 6l2 4 4.5 1-3 4 1 5-4.5-2.5L11.5 20l1-5-3-4 4.5-1 2-4z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">YIDAN CAO LLC</span>
            </Link>
            <p className="text-sm text-gray-400 sm:text-base">Online software tools and digital workflow solutions.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-300 sm:text-base">
            <Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/digital-delivery-policy" className="hover:text-white transition-colors">Digital Delivery Policy</Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800/50 text-center text-xs text-gray-600">
          All YIDAN CAO LLC services are delivered digitally. No physical products are shipped.
        </div>
      </div>
    </footer>
  )
}
