import React,{useState} from 'react'
import {close,logo,menu} from '../public/assets'
import {navLinks} from '../constants'
import Image from 'next/image'

function Navbar() {

  const [toggle, setToggle] = useState('false')

  return (
    <nav className='w-full py-6 flex justify-between items-center '>
        <Image src={logo} alt = "hoobank logo" height="32px" width="124px"/>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index) =>(
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
         )   )}
        </ul>
                {/*Mobile button */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
              <Image src={toggle? close : menu} alt = "toggle" height="28" width="28"
               className='object-contain'
               onClick={()=> setToggle((prev) => !prev)}
                />
        </div>

               {/*Mobile menu */}
        <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav,index) =>(
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
         ))}
        </ul>
        </div>

    </nav>
  )
}

export default Navbar