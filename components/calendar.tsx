import CalendarComponent from './utils/calendar'
import Carousel from './utils/carousel'

export default function Calendar() {
  return (
    <section className='relative bg-dark text-white mt-10'>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='text-3xl md:text-7xl mb-4 font-russo'>
              Planifica tu evento
            </h2>
            <p className='text-sm md:text-lg text-white'>
              Mantente al tanto de la agenda del artista y organiza tu evento
              con los mejores.
            </p>
          </div>
          <div className='bg-white rounded-md flex flex-col md:flex-row h-full items-center justify-between py-10'>
            <div className='w-full px-4 md:px-0 md:w-1/2 flex items-center justify-center flex-col'>
              <h2 className='font-bold text-black text-3xl md:text-[48px]'>
                Próximo evento
              </h2>
              <Carousel />
            </div>
            <div className='w-full mt-10 md:mt-0 px-4 md:px-0 md:w-1/2 flex flex-col justify-between'>
              <h2 className='font-bold text-black text-2xl text-center md:text-start md:text-[36px]'>
                Selecciona una fecha
              </h2>
              <CalendarComponent />
              <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
                <a
                  className='btn-sm px-20 font-bold rounded-lg text-white bg-blue-500 w-full sm:w-auto sm:mb-0'
                  href='#'
                  target='_blank'
                >
                  Agenda
                </a>
                <div className='flex items-center'>
                  <span className='h-4 w-4 rounded-full bg-gray-400' />
                  <p className='text-black text-sm ml-2'>No disponible</p>
                </div>
                <div className='flex items-center'>
                  <span className='h-4 w-4 rounded-full bg-blue-600' />
                  <p className='text-black text-sm ml-2'>Agendado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
