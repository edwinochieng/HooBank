import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { card } from '../public/assets'

function CardDeal() {
  return (
    <div id="product" className='flex md:flex-row flex-col py-6 sm:py-16'>
        <div className='flex-1 flex justify-center items-start flex-col'> 
          <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]l w-full'>Find a better card deal <br className='sm:block hidden'/> in few easy steps.</h2>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultries ac, ametu.</p>
          <Button/>
        </div>
        <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
          <Image src={card} alt="card" className='w-[100%] h-[100%]'/>
        </div>

    </div>
  )
}

export default CardDeal