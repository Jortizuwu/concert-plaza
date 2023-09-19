import Image from 'next/image'

import video1 from '../public/images/video1.png'
import video2 from '../public/images/video2.png'
import video3 from '../public/images/video3.png'

export default function Testimonials() {
  return (
    <section className='relative py-6 md:py-16 pb-10 bg-dark'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <h2 className='h2 mb-4 text-4xl md:text-7xl text-white font-russo'>
          Videos
        </h2>
      </div>
      <div className='grid grid-rows-3 grid-cols-3 grid-flow-col gap-4'>
        <div className='row-start-2 row-span-2 '>
          <Image className='rounded-lg w-full' src={video3} alt='' />
        </div>
        <div className='row-end-3 row-span-2'>
          <Image className='rounded-lg w-full' src={video1} alt='' />
        </div>
        <div className='row-start-2 row-span-2'>
          <Image className='rounded-lg w-full' src={video2} alt='' />
        </div>
      </div>
    </section>
  )
}
