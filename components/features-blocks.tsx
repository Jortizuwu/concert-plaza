import Link from 'next/link'

import Eye from '../public/eye.svg'
import Gift from '../public/gift.svg'
import Speakerphone from '../public/speakerphone.svg'

import Card from './utils/card'
import { russo } from '@/app/layout'

const data = [
  {
    title: 'Artistas',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    icon: Eye
  },
  {
    title: 'Comunicación directa',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    icon: Speakerphone
  },
  {
    title: 'Reconocimientos',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    icon: Gift
  }
]

export default function FeaturesBlocks() {
  return (
    <section className='relative bg-dark text-white px-4 md:px-28'>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pb-12 md:pb-20'>
          <div className='max-w-3xl mx-auto text-center pb-2 md:pb-4'>
            <h2 className={`text-3xl md:text-7xl mb-4 ${russo.className}`}>
              Promociona al artista
            </h2>
            <p className='text-sm md:text-lg text-white'>
              Haz parte de la red de representantes comerciales
            </p>
          </div>

          {/* Items */}
          <div className='max-w-sm mx-auto grid gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none'>
            {data.map((val, idx) => (
              <Card key={idx} {...val} />
            ))}
          </div>
          <div className='w-[96%] mx-auto mt-10'>
            <Link
              href='/promotion'
              className='btn-sm shadow-none text-center md:text-start md:px-20 rounded-md text-white font-bold bg-primary w-full sm:w-full sm:mb-0'
            >
              Conoce más de nuestra red exclusiva
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
