'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full bg-dark z-30 transition duration-300 ease-in-out ${
        !top ? 'bg-dark backdrop-blur-sm md:bg-opacity-90 shadow-lg' : ''
      }`}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  href='#'
                  className='text-white font-medium hover:text-primary px-5 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Artistas
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white font-medium hover:text-primary px-5 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Semilleros musicales
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white font-medium hover:text-primary px-5 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Patrocinadores
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='btn-sm font-bold text-white bg-primary hover:bg-primary/75 ml-3 px-10 rounded-lg'
                >
                  <span>Contáctanos</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
