import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import snow from '../assets/Sleet.png'

function WeatherInfo() {
  return (
    <div className='info col-span-6 md:col-span-4 bg-[#100E1D] md:h-screen md:overflow-y-auto'>
      <div className='w-[80%] mx-auto flex flex-col justify-center items min-h-screen '>
        <section className=' w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 place-items-center py-12'>
          <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-around items-center py-2 rounded-md overflow-hidden'>
            <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/4'>
              Tomorrow
            </h4>
            <figure className='flex h-2/4'>
              <img src={snow} alt='' className='h-[62px] w-auto' />
            </figure>
            <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/4]'>
              <span>16ºC</span>
              <span>11ºC</span>
            </p>
          </article>
          <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-around items-center py-2 rounded-md overflow-hidden'>
            <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/4'>
              Tomorrow
            </h4>
            <figure className='flex h-2/4'>
              <img src={snow} alt='' className='h-[62px] w-auto' />
            </figure>
            <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/4]'>
              <span>16ºC</span>
              <span>11ºC</span>
            </p>
          </article>
          <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-around items-center py-2 rounded-md overflow-hidden'>
            <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/4'>
              Tomorrow
            </h4>
            <figure className='flex h-2/4'>
              <img src={snow} alt='' className='h-[62px] w-auto' />
            </figure>
            <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/4]'>
              <span>16ºC</span>
              <span>11ºC</span>
            </p>
          </article>
          <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-around items-center py-2 rounded-md overflow-hidden'>
            <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/4'>
              Tomorrow
            </h4>
            <figure className='flex h-2/4'>
              <img src={snow} alt='' className='h-[62px] w-auto' />
            </figure>
            <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/4]'>
              <span>16ºC</span>
              <span>11ºC</span>
            </p>
          </article>
          <article className='w-[120px] h-[177px] bg-[#1E213A] flex flex-col justify-around items-center py-2 rounded-md overflow-hidden'>
            <h4 className='text-[19px] font-medium text-[#E7E7EB] h-1/4'>
              Tomorrow
            </h4>
            <figure className='flex h-2/4'>
              <img src={snow} alt='' className='h-[62px] w-auto' />
            </figure>
            <p className='flex gap-4 text-base font-medium text-[#E7E7EB] h-1/4]'>
              <span>16ºC</span>
              <span>11ºC</span>
            </p>
          </article>
        </section>
        <h3 className='text-[#E7E7EB] font-bold text-2xl pt-4 pb-0'>
          Today's Hightlights
        </h3>
        <section className='grid grid-cols-8 gap-4 place-items-center py-2 pb-8 text-[#E7E7EB] text-center rounded-md overflow-hidden'>
          <article className='wind bg-[#1E213A] h-full w-full col-span-8 lg:col-span-4 p-6 rounded-md overflow-hidden'>
            <p className='text-[19px] font-medium text-base'>Wind status</p>
            <p className='text-[64px] font-medium '>
              7<span className='h-9 text-[36px]'>mph</span>
            </p>
            <p className='flex justify-center gap-2'>
              <i className='w-[20px] h-[20px] bg-gray-600 flex items-center justify-center rounded-full'>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className='w-[10px] h-[10px]'
                />
              </i>
              <span>WSW</span>
            </p>
          </article>
          <article className='humidity bg-[#1E213A] h-full w-full col-span-8 lg:col-span-4 p-6 flex flex-col justify-between rounded-md overflow-hidden'>
            <p className='text-base font-medium'>Humidity</p>
            <p className='text-[64px] font-bold'>
              84<span className='text-4xl font-normal'>%</span>
            </p>
            <div>
              <label htmlFor='humidity' className='flex justify-between'>
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </label>
              <progress
                id='humidity'
                max='100'
                value='70'
                className='w-full rounded-xl overflow-hidden h-2'
              >
                70%
              </progress>
            </div>
          </article>
          <article className='humidity bg-[#1E213A] h-full w-full col-span-8 lg:col-span-4 p-6 flex flex-col justify-between rounded-md overflow-hidden'>
            <p className='text-base font-medium'>Visibility</p>
            <p className='text-[64px] font-bold'>
              6,4 <span className='text-4xl font-normal'>miles</span>
            </p>
          </article>
          <article className='humidity bg-[#1E213A] h-full w-full col-span-8 lg:col-span-4 p-6 flex flex-col justify-between rounded-md overflow-hidden'>
            <p className='text-base font-medium'>Air Pressure</p>
            <p className='text-[64px] font-bold'>
              998 <span className='text-4xl font-normal'>mb</span>
            </p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default WeatherInfo
