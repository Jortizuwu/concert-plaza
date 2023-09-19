import Logo from './logo'

export default function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div className='sm:col-span-12 lg:col-span-3 flex flex-col md:flex-row justify-between items-center w-full pt-10 pb-5 border-b-2 border-gray-400'>
          <div className='mb-2'>
            <Logo />
          </div>
          <ul className='flex mt-2 md:mt-0 mb-4 md:order-1 md:ml-4 md:mb-0'>
            <li>
              <a
                href='#0'
                className='flex justify-center items-center text-white hover:text-gray-900 bg-primary shadow transition duration-150 ease-in-out'
                aria-label='facebook'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 35 35'
                  fill='none'
                >
                  <rect width='35' height='35' rx='4' fill='#F5DF4D' />
                  <path
                    d='M18.9232 26.25V18.2674H21.7375L22.1588 15.1565H18.9231V13.1702C18.9231 12.2695 19.1858 11.6558 20.5424 11.6558L22.2727 11.655V8.87257C21.9734 8.83473 20.9463 8.75 19.7514 8.75C17.2567 8.75 15.5487 10.1998 15.5487 12.8622V15.1565H12.7272V18.2674H15.5487V26.2499H18.9232V26.25Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
            <li className='ml-4'>
              <a
                href='#0'
                className='flex justify-center items-center text-white hover:text-gray-900 bg-primary shadow transition duration-150 ease-in-out'
                aria-label='insta'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 35 35'
                  fill='none'
                >
                  <rect width='35' height='35' rx='4' fill='#F5DF4D' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.75 17.5C8.75 14.0047 8.75 12.2571 9.58289 10.9983C9.95482 10.4362 10.4362 9.95482 10.9983 9.58289C12.2571 8.75 14.0047 8.75 17.5 8.75C20.9953 8.75 22.7429 8.75 24.0017 9.58289C24.5638 9.95482 25.0452 10.4362 25.4171 10.9983C26.25 12.2571 26.25 14.0047 26.25 17.5C26.25 20.9953 26.25 22.7429 25.4171 24.0017C25.0452 24.5638 24.5638 25.0452 24.0017 25.4171C22.7429 26.25 20.9953 26.25 17.5 26.25C14.0047 26.25 12.2571 26.25 10.9983 25.4171C10.4362 25.0452 9.95482 24.5638 9.58289 24.0017C8.75 22.7429 8.75 20.9953 8.75 17.5ZM22.0298 17.5002C22.0298 20.0021 20.0017 22.0302 17.4998 22.0302C14.998 22.0302 12.9699 20.0021 12.9699 17.5002C12.9699 14.9984 14.998 12.9702 17.4998 12.9702C20.0017 12.9702 22.0298 14.9984 22.0298 17.5002ZM17.4998 20.4976C19.1552 20.4976 20.4972 19.1556 20.4972 17.5002C20.4972 15.8448 19.1552 14.5029 17.4998 14.5029C15.8444 14.5029 14.5025 15.8448 14.5025 17.5002C14.5025 19.1556 15.8444 20.4976 17.4998 20.4976ZM22.2087 13.8071C22.7966 13.8071 23.2731 13.3305 23.2731 12.7426C23.2731 12.1548 22.7966 11.6782 22.2087 11.6782C21.6209 11.6782 21.1443 12.1548 21.1443 12.7426C21.1443 13.3305 21.6209 13.8071 22.2087 13.8071Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
            <li className='ml-4'>
              <a
                href='#0'
                className='flex justify-center items-center text-white hover:text-gray-900 bg-primary shadow transition duration-150 ease-in-out'
                aria-label='youtube'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 35 35'
                  fill='none'
                >
                  <rect width='35' height='35' rx='4' fill='#F5DF4D' />
                  <path
                    d='M17.9264 24.2862L13.9771 24.2124C12.6984 24.1867 11.4165 24.238 10.1628 23.9716C8.25576 23.5734 8.12066 21.6213 7.97929 19.9838C7.78449 17.6818 7.8599 15.3379 8.22751 13.0551C8.43503 11.7742 9.25173 11.0098 10.5147 10.9266C14.7783 10.6248 19.0701 10.6606 23.3242 10.8014C23.7735 10.8143 24.2259 10.8849 24.6689 10.9652C26.8557 11.3569 26.9091 13.5691 27.0508 15.4313C27.1922 17.3128 27.1325 19.2039 26.8623 21.0726C26.6455 22.6198 26.2308 23.9173 24.4804 24.0425C22.2873 24.2063 20.1445 24.3382 17.9452 24.2962C17.9453 24.2862 17.9327 24.2862 17.9264 24.2862ZM15.6046 20.3692C17.2573 19.3995 18.8784 18.4459 20.5217 17.4827C18.8659 16.513 17.2478 15.5595 15.6046 14.5963V20.3692Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom area */}
      <div className='flex flex-col md:flex-row items-center justify-center py-4 md:py-8 md:divide-x-2'>
        {/* Copyrights note */}
        <div className='text-sm text-white mr-4'>
          Copyright &copy; Concert Plaza
        </div>
        <div className='text-sm text-white divide-x-2'>
          <a
            href='#0'
            className='text-gray-400 mr-2 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'
          >
            <span className='ml-2'>Términos y condiciones</span>
          </a>

          <a
            href='#0'
            className='text-gray-400 mr-2 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'
          >
            <span className='ml-2'>Política de Privacidad</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
