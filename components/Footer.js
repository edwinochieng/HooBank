import React from 'react'
import { footerLinks,socialMedia } from '../constants'
import Image from 'next/image'
import { logo } from '../public/assets'


function Footer() {
  return (
    <div className='flex justify-center items-center sm:py-16 py-6 flex-col'>
       <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
          <div className='flex-1 flex flex-col justify-center items-start mr-10'>
            <Image src={logo} alt="hoobank" className='w-[236px] h-[72px] object-contain'/>
            <p className='max-w-[310px] mt-4 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]'>A new way to make payments easy, reliable and secure.</p>
          </div>
          <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 '>
            {footerLinks.map((footerLink) => (
                <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                    <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                    <ul className='list-none mt-4'>
                      {footerLink.links.map((link, index) => (
                        <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.length? 'mb-4':'mb-0'}`}>{link.name}</li>
                      ))}
                    </ul>

                </div>
            ))}
          </div>
       </div>

       <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
         <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Copyright &copy;  2021 HooBank. All Rights Reserved.</p>
         <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social,index) => (
            <div key={social.id} className={`${index !== socialMedia.length -1 ? 'mr-6': 'mr-0'}`}>
            <Image  src={social.icon} alt={social.id} className={`h-[21px] w-[21px] object-contain cursor-pointer `}/>
            </div>    
          ))}
         </div>
       </div>

    </div>
  )
}

export default Footer