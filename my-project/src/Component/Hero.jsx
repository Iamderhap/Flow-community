import React from 'react'
import heroicon from "../assets/flowimages/icon.png"
import heroimage from "../assets/flowimages/heroimage.png"

const Hero = () => {
  return (
    <>
    <section className='flex items-center justify-around'>
      <div className='flex flex-col justify-center gap-[10px] '>
       <div className='flex text-center gap-[5px]'>
         <img className='w-[20px]'src={heroicon} alt="icon" />
         <p className='font-semibold text-[12px] '>Powering Tomorrow</p>
      </div>
     <h1 className='text-[60px] w-[30vw]'>The Future of Green Energy</h1>
      <p className='w-[30vw] text-[#646A69]'>Our commitment to green energy is paving the way for a cleaner,
        healthier planet. Join us on a journey towards a future where clean, renewable energy sources 
        transform the way we power our lives.
     </p>
     <div className='flex gap-[10px] '>
        <button className='bg-black text-[#FFFFFF] rounded-[10px] w-[10vw] hover:bg-slate-50 hover:text-black hover:border-2 border-[#929C9A] font-semibold hover:transition duration-700 ease-in-out'>See our solutions</button>
        <button className='hover:border-black rounded-[10px] w-[10vw] border-2 border-[#929C9A] py-2 px-5 cursor-pointer hover:bg-black hover:text-white font-semibold hover:transition duration-700 ease-in-out '>Get in touch</button>
     </div>
      </div>
      <img className='h-[35vw]' src={heroimage} alt="" />
    </section>
    </>
  )
}

export default Hero