import React from 'react'
import Button from './Button'

function CTA() {
  return (
    <div className='flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shaddow'>
      <div className='flex-1 flex flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]l w-full'>Let&apos;s try our services now!</h2>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='sm:ml-10 mt-0 sm:mb-10'>
        <Button/>
      </div>
       
    </div>
  )
}

export default CTA