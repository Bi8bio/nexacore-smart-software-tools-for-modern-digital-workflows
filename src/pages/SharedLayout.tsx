import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export default function SharedLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  )
}
