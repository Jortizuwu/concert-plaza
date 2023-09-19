import Event from '@/components/event'
import Form from './components/form'

export const metadata = {
  title: 'quote',
  description: 'quote'
}

export default function QuotePage() {
  return (
    <section className='relative pt-10 bg-dark text-white'>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-7xl mb-4 font-russo'>Cotiza tu show</h2>
            <p className='text-sm md:text-lg text-white'>
              Introduce los datos requeridos y obtén una cotización detallada y
              automática al instante. ¡No pierdas más tiempo!
            </p>
          </div>
        </div>
        <Form />
      </div>
      <div className='pt-20'>
        <Event />
      </div>
    </section>
  )
}
