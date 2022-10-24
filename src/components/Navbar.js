import { useState } from 'react';
import {logo, close, menu} from '../assets';
import {navLinks} from '../constants/index'

function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt='hooBank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((el, inx) =>(
          <li key={inx} className={`font-poppins font-normal cursor-pointer text-white text-[1rem] ${inx === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${el.id}`}>
              {el.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-end'>
        <img 
        src={toggle ? close : menu} 
        alt = 'menu' 
        className='w-[2rem] h-[2rem] object-contain '
        onClick={() => setToggle(prev => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 
          min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((el, inx) =>(
          <li key={inx} className={`font-poppins font-normal cursor-pointer text-white text-[1rem] ${inx === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
            <a href={`#${el.id}`}>
              {el.title}
            </a>
          </li>
        ))}
      </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar