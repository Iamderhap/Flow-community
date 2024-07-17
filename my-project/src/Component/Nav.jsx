import React from 'react'
import logotype from "../assets/flowimages/Logotype.png"
import rightarrow from "../assets/flowimages/arrow-left.png"

const Nav = () => {
  return (
    <>
     <nav className='flex justify-around bg-white h-[10vh] items-center w-full border-b-2 border-[#D9DEDD]'>
        <div className='flex items-center'>
          <img src={logotype} alt="" />
        </div>
        <ul className='flex gap-[20px] items-center font-semibold hover:cursor-pointer '>
          <li>About us</li> 
          <li>Team</li> 
          <li>Solutions</li>
          <li>Blog</li> 
        </ul>

        <div className='flex items-center rounded-xl border-black border-2 py-2 px-5 cursor-pointer hover:bg-black hover:text-white hover:transition duration-700 ease-in-out'>
            <p className='font-semibold'>Get in touch</p>
            <img src={rightarrow} alt="" />
        </div>
     </nav>
    </>
  )
}

export default Nav