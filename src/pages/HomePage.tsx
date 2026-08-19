import type { Plan } from '@/types'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutSection from '@/components/AboutSection'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import DigitalResources from '@/components/DigitalResources'
import WhyChooseUs from '@/components/WhyChooseUs'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

const plans: Plan[] = [
  {
    name: 'Starter Plan',
    price: '$19',
    period: '/month',
    desc: 'For individual users',
    features: [
      'Basic software access',
      'Digital workflow resources',
      'Email support',
      'Online account access',
    ],
    cta: 'Get Started',
    stripeUrl: 'https://buy.stripe.com/fZucMX0IA6lu1upeKQ3ks00',
    highlight: false,
  },
  {
    name: 'Professional Plan',
    price: '$49',
    period: '/month',
    desc: 'For small teams and business users',
    features: [
      'Full software access',
      'Productivity tools',
      'Automation resources',
      'Priority email support',
      'Online account management',
    ],
    cta: 'Choose Professional Plan',
    stripeUrl: 'https://buy.stripe.com/14A3co8cE61Tbt85iQ7AI00',
    highlight: true,
  },
  {
    name: 'Business Plan',
    price: '$99',
    period: '/month',
    desc: 'For enterprises and advanced users',
    features: [
      'Advanced software dashboard',
      'Team workflow tools',
      'Premium digital resources',
      'Priority support',
      'Custom onboarding guidance',
    ],
    cta: 'Choose Business Plan',
    stripeUrl: 'https://buy.stripe.com/cNi3cn4YQ25eflf9qw3ks04',
    highlight: false,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <HowItWorks />
      <Pricing plans={plans} />
      <DigitalResources />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  )
}
