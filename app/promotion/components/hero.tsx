import React from 'react'
import Image from 'next/image'

import Eye from '../../../public/eye.svg'
import Speakerphone from '../../../public/speakerphone.svg'
import Start from '../../../public/star.svg'
import Gift from '../../../public/gift.svg'

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
  },
  {
    title: 'Inversiones',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    icon: Start
  }
]

import Link from 'next/link'
import Card from '@/components/utils/card'

export default function HeroPromotion() {
  return (
    <div className='relative mb-5 md:mb-10'>
      <div className='md:grid md:grid-cols-12'>
        <div className='md:col-span-4 lg:col-span-5 h-full'>
          <img src='/images/retrato.png' alt='' />
        </div>
        <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7 mb-8 md:mb-0 md:order-1 py-5 px-20'>
          <div className='max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none'>
            {data.map((val, idx) => (
              <Card key={idx} {...val} />
            ))}
          </div>
          <Link
            href='#'
            className='btn-sm mt-5 md:mt-0 font-bold text-white bg-primary hover:bg-primary/75 ml-0 md:ml-6 px-10 rounded-lg'
          >
            <span>Contáctanos</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
