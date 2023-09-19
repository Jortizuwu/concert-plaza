'use client'

export default function Features() {
  return (
    <section className='relative'>
      <div
        className='absolute inset-0 bg-white pointer-events-none'
        aria-hidden='true'
      ></div>
      <div className='relative'>
        <div className='md:grid md:grid-cols-12'>
          <div className='hidden sm:block md:col-span-4 lg:col-span-5 h-full'>
            <img src='/images/VIDEO_MS.png' alt='' />
          </div>

          <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7 mb-8 md:mb-0 md:order-1 pt-5 px-5 md:pt-20 md:px-20'>
            <h3 className='h3 mb-3 text-3xl md:text-5xl font-russo'>
              MS Represent es un artista cartagenero,
            </h3>
            <p className='text-sm md:text-lg text-black'>
              criado en 'Nueva Granada', un popular barrio de "La Heroica" que,
              a diario ve nacer niños y jóvenes con más sueños que
              oportunidades. Su crecimiento físico fue directamente proporcional
              al de la violencia de los barrios marginados que lo rodeaban, y de
              los que sólo lo separaban peligrosas líneas imaginarias, que, de
              ser cruzadas, era una apertura segura al ring de la violencia
              convertida en cultura, en forma de pandillas y otros tipos de
              atropellos.
            </p>
            <p className='text-sm md:text-lg text-black mt-4'>
              La música fue su salvación; gracias a esta, de la que se enamoró
              en las calles y plazas caribes encontró su objetivo de vida,
              primero a través del rap, y luego con la música urbana, con la se
              dio a conocer a nivel local y nacional, compartiendo escenarios
              con artistas de talla mundial como Arcángel, Mozart la para, Ñejo,
              Nicky Jam, entre otros.
            </p>
            <p className='text-sm md:text-lg text-black mt-4'>
              En el 2018 lanzó su álbum 'History', donde fusionó varios ritmos
              caribeños con el género urbano. Actualmente está radicado en la
              ciudad de Medellín, reanudando su carrera artística.
            </p>
            <a href='#' target='_blank' className='mt-8 flex'>
              <div className='bg-[#00DA5A] p-2'>
                <img src='Spotify.svg' alt='' />
              </div>
              <div className='btn-sm md:px-10 text-white font-bold bg-black w-full sm:w-auto sm:mb-0 rounded-none'>
                Listen to Playlist
                <span className='ml-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='29'
                    height='29'
                    viewBox='0 0 29 29'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.9247 4.77467C15.491 4.20841 16.409 4.20841 16.9753 4.77467L25.6753 13.4747C26.2416 14.0409 26.2416 14.959 25.6753 15.5253L16.9753 24.2253C16.409 24.7915 15.491 24.7915 14.9247 24.2253C14.3584 23.659 14.3584 22.7409 14.9247 22.1747L21.1494 15.95L4.35 15.95C3.54919 15.95 2.9 15.3008 2.9 14.5C2.9 13.6992 3.54919 13.05 4.35 13.05H21.1494L14.9247 6.82528C14.3584 6.25902 14.3584 5.34093 14.9247 4.77467Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
