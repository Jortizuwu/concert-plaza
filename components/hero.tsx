import { russo } from '@/app/layout'

export default function Hero() {
  return (
    <section className='relative h-[88vh] md:h-[90vh] bg-black mt-16 md:mt-20'>
      <div className='relative md:absolute mx-auto px-4 h-screen w-screen sm:px-6 bg-no-repeat bg-center md:bg-cover opacity-25 bg-[url("/images/ms-represent.png")]' />
      <div className='py-12 md:py-20'>
        <div className='absolute -left-10 sm:left-0 bottom-0 mx-auto px-5 sm:px-6 pt-32 pb-10 md:pt-40 md:pb-16'>
          <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='max-w-1xl mx-auto px-12 sm:px-12'>
              <h1
                className={`text-white ${russo.className} text-4xl md:text-[60px] xl:text-8xl  leading-tighter tracking-tighter mb-4`}
              >
                MS
                <span className={`block ${russo.className}`}>REPRESENT</span>
              </h1>

              <div>
                <a
                  className='btn-sm px-20 text-black font-bold bg-primary w-full sm:w-auto sm:mb-0'
                  href='#'
                  target='_blank'
                >
                  Gold
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
