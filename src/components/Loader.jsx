import React from 'react'
import SunBg from '../assets/SunBg.png'

function Loader() {
  return (
    <div className='absolute w-full h-full left-0 top-0 bg-[#100E1D] flex items-center justify-center '>
      <img src={SunBg} alt='' className='spin-slow' />
    </div>
  )
}

export default Loader
