import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { productCatalog, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/types'

export default function ShopPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const { addItem } = useCart()
  const [added, setAdded] = useState<string | null>(null)

  const filtered = useMemo(() => {
    let list = [...productCatalog]
    if (category !== 'All') list = list.filter(p => p.category === category)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q))
    }
    if (sort === 'price-asc') list.sort((a,b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a,b) => b.price - a.price)
    else if (sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name))
    return list
  }, [search, category, sort])

  const handleAdd = (p: Product) => {
    addItem({ id: p.id, name: p.name, price: p.price, quantity: 1 })
    setAdded(p.id); setTimeout(() => setAdded(null), 1500)
  }

  return (
    <div data-component="src/pages/ShopPage.tsx" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">YIDAN CAO LLC</h1>
          <p className="mt-3 text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">Software Tools for Smarter Digital Workflows</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm" />
          <select value={category} onChange={e => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
            <option value="All">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
        <p className="text-sm text-gray-500 mb-6">{filtered.length} products</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="glass-card p-5 flex flex-col">
              {p.image ? (
                <div className="w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-900/50 mb-4">
                  <img src={p.image} alt={`${p.name} — YIDAN CAO LLC`} loading="lazy" className="w-full h-full object-contain p-2" />
                </div>
              ) : (
                <div className="w-full aspect-[4/5] rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 border border-gray-800/50">
                  <span className="text-3xl font-extrabold text-cyan-500/20">{p.sku.replace('NCS-','')}</span>
                </div>
              )}
              <span className="text-[10px] font-semibold tracking-widest text-cyan-400 uppercase">{p.category}</span>
              <h3 className="text-sm font-semibold text-white mt-1 leading-snug">{p.name}</h3>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">{p.shortDescription}</p>
              <div className="mt-3 mb-4">
                <span className="text-lg font-bold text-white">${p.price.toLocaleString()}</span>
                {p.period && <span className="text-gray-500 text-xs ml-1">{p.period}</span>}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <button onClick={() => handleAdd(p)}
                  className={`w-full py-2 rounded-xl text-xs font-semibold transition-all ${added === p.id ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'btn-primary'}`}>
                  {added === p.id ? 'Added to Cart' : 'Add to Cart'}
                </button>
                {p.stripePaymentLink && (
                  <a href={p.stripePaymentLink} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-center text-gray-500 hover:text-cyan-400 transition-colors">or Buy Now</a>
                )}
                <Link to={`/product/${p.id}`} className="text-xs text-center text-gray-500 hover:text-cyan-400 transition-colors">View Details</Link>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">No products found. Try a different search or filter.</div>
        )}
      </div>
    </div>
  )
}
