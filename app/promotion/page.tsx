export const metadata = {
  title: 'promotion',
  description: 'promotion'
}

import HeroPromotion from './components/hero'
import QuotePromotion from './components/quote'

export default function Promotion() {
  return (
    <section className='relative pt-5 md:pt-0 bg-dark text-white'>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-7xl mb-4 font-russo'>Promociona</h2>
            <p className='text-sm md:text-lg text-white'>
              Ahora podrás ser parte de nuestra exclusiva red de inversores
            </p>
          </div>
        </div>
      </div>
      <HeroPromotion />
      <QuotePromotion />
    </section>
  )
}
