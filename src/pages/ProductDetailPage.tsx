import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug || '')
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center glass-card p-10">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  return (
    <div data-component="src/pages/ProductDetailPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/products" className="hover:text-cyan-400 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-300">{product.category}</span>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            {product.image ? (
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800/50">
                <img src={product.image} alt={`${product.name} — YIDAN CAO LLC`} className="w-full h-full object-contain p-4" />
              </div>
            ) : (
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-800/50">
                <span className="text-6xl font-extrabold text-cyan-500/20">{product.sku.replace('NCS-','')}</span>
              </div>
            )}
          </div>
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{product.category}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">{product.name}</h1>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">{product.shortDescription}</p>
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-white">${product.price.toLocaleString()}</span>
              {product.period && <span className="text-gray-500 text-sm ml-1">{product.period}</span>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={() => { addItem({ id: product.id, name: product.name, price: product.price, quantity: 1 }); setAdded(true); setTimeout(() => setAdded(false), 1500) }}
                className={`px-8 py-3.5 rounded-xl font-semibold text-sm transition-all text-center ${added ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'btn-primary'}`}>
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              {product.stripePaymentLink && (
                <a href={product.stripePaymentLink} target="_blank" rel="noopener noreferrer"
                  className="btn-secondary px-8 py-3.5 rounded-xl font-semibold text-sm text-center">Buy Now</a>
              )}
            </div>
            <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
              <div><h3 className="text-white font-semibold mb-2">Product Overview</h3><p className="text-gray-400">{product.description}</p></div>
              {product.features && product.features.length > 0 && (
                <div><h3 className="text-white font-semibold mb-2">What's Included</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">{product.features.map((f: string) => <li key={f}>{f}</li>)}</ul>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-800/50">
                <div><span className="text-gray-500 text-xs">SKU</span><p className="text-white text-sm">{product.sku}</p></div>
                <div><span className="text-gray-500 text-xs">Category</span><p className="text-white text-sm">{product.category}</p></div>
                <div><span className="text-gray-500 text-xs">Delivery</span><p className="text-white text-sm capitalize">{product.deliveryType}</p></div>
                <div><span className="text-gray-500 text-xs">License</span><p className="text-white text-sm capitalize">{product.licenseType}</p></div>
              </div>
              <div className="pt-4 border-t border-gray-800/50 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                <Link to="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link to="/digital-delivery" className="hover:text-cyan-400 transition-colors">Digital Delivery</Link>
              </div>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-800/50">
            <h2 className="text-xl font-bold text-white mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(r => (
                <Link key={r.id} to={`/product/${r.id}`} className="glass-card p-4 hover:border-cyan-500/30 transition-all group">
                  {r.image ? (
                    <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-900/50 mb-3">
                      <img src={r.image} alt={`${r.name} — YIDAN CAO LLC`} loading="lazy" className="w-full h-full object-contain p-2" />
                    </div>
                  ) : (
                    <div className="w-full h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-3 border border-gray-800/50">
                      <span className="text-2xl font-extrabold text-cyan-500/20">{r.sku.replace('NCS-','')}</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500">{r.category}</p>
                  <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{r.name}</p>
                  <p className="text-sm font-bold text-cyan-400 mt-1">${r.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
