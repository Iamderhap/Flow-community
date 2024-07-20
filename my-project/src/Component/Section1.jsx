import React from 'react'
import logo1 from '../assets/flowimages/Logo.png'
import logo2 from '../assets/flowimages/Logo one.png'
import logo3 from '../assets/flowimages/Logo two.png'
import logo4 from '../assets/flowimages/Logo three.png'

const Section1 = () => {
  return (
    <>
     <section className='flex justify-around items-center gap-[10%] h-[15vh] border-2'>
        <div className='font-semibold'>
          <h3>Global partners that trusted us</h3>
        </div>
        <div className='flex flex-wrap gap-[30px]'>
           <img src={logo1} alt="" /> 
           <img src={logo2} alt="" /> 
           <img src={logo3} alt="" /> 
           <img src={logo4} alt="" /> 
        </div>
     </section>
    </>
  )
}

export default Section1