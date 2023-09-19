import Image from 'next/image'

interface CardProps {
  title: string
  icon: any
  desc: string
}

export default function Card({ title, icon, desc }: CardProps) {
  return (
    <div className='relative flex items-center md:items-start flex-col space-y-3 p-2 md:p-6'>
      <div className='border-4 border-white p-2 w-14 h-14 flex items-center justify-center '>
        <Image src={icon} alt='icon' />
      </div>
      <h4 className='text-xl text-center md:text-start font-bold leading-snug tracking-tight mb-1'>
        {title}
      </h4>
      <p className='text-white text-base text-center md:text-start'>{desc}</p>
    </div>
  )
}
