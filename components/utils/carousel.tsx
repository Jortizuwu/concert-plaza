'use client'

import React, { useRef } from 'react'
import SliderComponent from 'react-slick'
import img from '../../public/images/Flyer02.png'
import Image from 'next/image'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // arrows: false, 
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='54'
        height='54'
        viewBox='0 0 54 54'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.6908 39.7092C18.6364 38.6548 18.6364 36.9452 19.6908 35.8908L28.5816 27L19.6908 18.1092C18.6364 17.0548 18.6364 15.3452 19.6908 14.2908C20.7452 13.2364 22.4548 13.2364 23.5092 14.2908L34.3092 25.0908C35.3636 26.1452 35.3636 27.8548 34.3092 28.9092L23.5092 39.7092C22.4548 40.7636 20.7452 40.7636 19.6908 39.7092Z'
          fill='#21272A'
        />
      </svg>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <div className='absolute -ml-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='55'
          height='55'
          viewBox='0 0 55 55'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M34.9445 14.5555C36.0185 15.6294 36.0185 17.3706 34.9445 18.4445L25.8891 27.5L34.9445 36.5555C36.0185 37.6294 36.0185 39.3706 34.9445 40.4445C33.8706 41.5185 32.1294 41.5185 31.0555 40.4445L20.0555 29.4445C18.9815 28.3706 18.9815 26.6294 20.0555 25.5555L31.0555 14.5555C32.1294 13.4815 33.8706 13.4815 34.9445 14.5555Z'
            fill='#21272A'
          />
        </svg>
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className='rounded-md'>
      <Image className='w-48 mx-auto md:w-full rounded-lg' src={img} alt='' />
    </div>
  )
}

export default function Slider() {
  const slider = useRef(null)

  return (
    <section className='relative max-w-xs'>
      <SliderComponent ref={slider} {...settings}>
        <Card />
        <Card />
      </SliderComponent>
    </section>
  )
}
