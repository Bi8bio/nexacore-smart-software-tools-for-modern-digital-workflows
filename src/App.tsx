import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import SharedLayout from '@/pages/SharedLayout'
import HomePage from '@/pages/HomePage'
import SuccessPage from '@/pages/SuccessPage'
import CancelPage from '@/pages/CancelPage'
import ContactPage from '@/pages/ContactPage'
import TermsPage from '@/pages/TermsPage'
import PrivacyPage from '@/pages/PrivacyPage'
import RefundPage from '@/pages/RefundPage'
import DigitalDeliveryPage from '@/pages/DigitalDeliveryPage'
import PaymentPage from '@/pages/PaymentPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund-policy" element={<RefundPage />} />
            <Route path="/digital-delivery-policy" element={<DigitalDeliveryPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
