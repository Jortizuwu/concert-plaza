import './css/style.css'

import { Inter, Russo_One } from 'next/font/google'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const russo = Russo_One({
  subsets: ['latin'],
  variable: '--font-russo',
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'concert plaza',
  description: 'concert plaza'
}

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} font-inter bg-white text-gray-900`}>
        <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
