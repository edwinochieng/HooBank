import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

function Testimonials() {
  return (
    <div className='flex justify-center items-center flex-col relative sm:py-16 py-6'>
    
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='w-full flex justify-between flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]'>
          <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]l w-full'>What are people <br className='sm:block hidden'/> saying about us</h1>
          <div className='w-full mt-6 md:mt-0'>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card}/>
          ))}
      </div>
    </div>
  )
}

export default Testimonials