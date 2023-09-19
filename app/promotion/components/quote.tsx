import React from 'react'
import Link from 'next/link'

export default function QuotePromotion() {
  return (
    <div className='relative pb-14'>
      <div className='md:grid md:grid-cols-12'>
        <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 px-5 md:px-20'>
          <div className='relative space-y-3'>
            <h4 className='text-2xl text-center md:text-start md:text-[36px] font-bold'>
              ¿Listo para hacer parte de nuestro grupo exclusivo?
            </h4>
            <p className='text-white text-center md:text-start text-base'>
              Preparaté para unirte a nuestro selecto grupo y ser parte del
              impulso detrás de talentosos artistas musicales.
            </p>
            <Link
              href='#'
              className='btn-sm font-bold w-full md:w-auto text-white bg-primary hover:bg-primary/75 px-10 rounded-lg'
            >
              <span>Cotizar un show</span>
            </Link>
          </div>
        </div>
        <div className='mt-5 md:mt-0 md:col-span-7 lg:col-span-6 h-full'>
          <img src='/images/musico.png' alt='' />
        </div>
      </div>
    </div>
  )
}
