import Link from 'next/link'

export default function Quote() {
  return (
    <section className='relative h-36 md:h-10 w-full bg-white py-8'>
      <div className='max-w-6xl mx-auto px-12 sm:px-12 flex flex-col md:flex-row gap-5 justify-center items-center'>
        <p className='text-center text-sm md:text-lg font-medium'>
          ¿Te interesa contratar al artista para tu evento o fiesta?
        </p>
        <div>
          <Link
            className='btn-sm shadow-none md:px-20 rounded-md text-white font-bold bg-primary w-full sm:w-auto sm:mb-0'
            href='/quote'
          >
            Cotizar un show
          </Link>
        </div>
      </div>
    </section>
  )
}
