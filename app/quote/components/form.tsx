import { russo } from '@/app/layout'
import React from 'react'

export default function Form() {
  return (
    <div className='bg-white rounded-md flex flex-col items-center justify-between py-5 px-5 md:py-20 md:px-20'>
      <div className='max-w-3xl mx-auto text-center'>
        <p className='text-xs md:text-sm text-black'>
          Gracias por preferirnos, necesitamos los siguientes datos para
          realizar la cotización de tu artista
        </p>
        <h2
          className={`text-3xl md:text-[60px] mb-4 text-black ${russo.className}`}
        >
          MS Represent
        </h2>
      </div>
      <form
        action=''
        className='flex flex-col items-center justify-between space-y-4 w-11/12'
      >
        <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center justify-between w-full'>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm md:text-lg font-bold text-black'
            >
              Tipo de evento
            </label>
            <select
              id='countries'
              className='bg-white border border-gray-100 focus:outline focus:outline-primary text-gray-400 text-sm rounded-lg block w-full p-2.5'
            >
              <option selected>Publico</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm md:text-lg font-bold text-black'
            >
              ¿Se cobrará cover / entrada?
            </label>
            <select
              id='countries'
              className='bg-white border border-gray-100 focus:outline focus:outline-primary text-gray-400 text-sm rounded-lg block w-full p-2.5'
            >
              <option selected>Si</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm md:text-lg font-bold text-black'
            >
              Número de asistentes
            </label>
            <select
              id='countries'
              className='bg-white border border-gray-100 focus:outline focus:outline-primary text-gray-400 text-sm rounded-lg block w-full p-2.5'
            >
              <option selected>20.001 - 50.000</option>
            </select>
          </div>
        </div>
        <div className='w-full'>
          <label
            htmlFor='countries'
            className='block mb-2 text-sm md:text-lg font-bold text-black'
          >
            Duración
          </label>
          <section className='flex flex-col md:flex-row w-full gap-5'>
            <button className='btn-sm font-bold text-primary bg-white border-2 border-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>30 min</span>
            </button>
            <button className='btn-sm font-bold text-primary bg-white border-2 border-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>45 min</span>
            </button>
            <button className='btn-sm font-bold text-white bg-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>60 min</span>
            </button>
            <button className='btn-sm font-bold text-primary bg-white border-2 border-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>90 min</span>
            </button>
            <button className='btn-sm font-bold text-primary bg-white border-2 border-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>120 min</span>
            </button>
          </section>
        </div>
        <div className='w-full'>
          <label
            htmlFor='countries'
            className='block text-sm md:text-lg font-bold text-black'
          >
            Paquete
          </label>
          <p className='text-xs text-black mb-2'>
            Elige uno o varios para complementar tu evento
          </p>
          <section className='flex flex-col md:flex-row w-full gap-5'>
            <button className='btn-sm font-bold text-primary bg-white border-2 border-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>Bailarinas</span>
            </button>
            <button className='btn-sm font-bold text-white bg-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>Dj</span>
            </button>
            <button className='btn-sm font-bold text-white bg-primary hover:bg-primary/75 px-10 rounded-lg shadow-none'>
              <span>Sonido</span>
            </button>
          </section>
        </div>
        <div className='w-full flex space-x-3 items-center py-8'>
          <input type='checkbox' />
          <p className='text-black text-sm'>
            Al completar este formulario y hacer clic en enviar, acepta nuestros
            <span className='ml-2 underline'>
              términos y condiciones y política de privacidad.*
            </span>
          </p>
        </div>
        <button className='btn-sm font-bold w-full text-white bg-black px-10 rounded-lg shadow-none'>
          Generar cotización
        </button>
      </form>
    </div>
  )
}
