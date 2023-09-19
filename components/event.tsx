import Link from 'next/link'

export default function Event() {
  return (
    <section className='relative md:h-10 w-full bg-white py-8 md:mb-28'>
      <div className='max-w-6xl mx-auto px-12 sm:px-12 flex flex-col items-center justify-center space-y-3'>
        <p className='text-lg text-center md:text-start md:text-[36px] font-bold text-black'>
          ¿Quieres que tu próximo evento sea inolvidable?
        </p>
        <div>
          <Link
            className='btn-sm shadow-none md:px-20 rounded-md text-white font-bold bg-primary w-full sm:w-auto sm:mb-0'
            href='#'
            // target=''
          >
            ¡Si quiero!
          </Link>
        </div>
      </div>
    </section>
  )
}
