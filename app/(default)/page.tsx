export const metadata = {
  title: 'Home',
  description: 'concert plaza'
}

import Hero from '@/components/hero'
import Quote from '@/components/quote'
import Event from '@/components/event'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Calendar from '@/components/calendar'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Quote />
      <Calendar />
      <FeaturesBlocks />
      <Event />
    </>
  )
}
