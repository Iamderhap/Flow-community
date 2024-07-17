import React from 'react'
import icon1 from "../assets/flowimages/icon.png"
import charging from "../assets/flowimages/CustomIcon.png"
import energy from "../assets/flowimages/CustomIcon1.png"
import solar from "../assets/flowimages/CustomIcon3.png"
import power from "../assets/flowimages/CustomIcon4.png"

const Section2 = () => {
  return (
    <>
     <section className='bg-[#FFF7ED]  flex flex-col px-[70px] mt-[80px] m-[20px] rounded-xl py-[50px] '>
      <div className=''>
          <div className='flex border-b-2 gap-[10px] h-[40px] mt-[40px] items-center'>
            <img className='w-[30px]' src={icon1} alt="icon" />
            <p>Solutions</p>
          </div>
          <div>
            <h1 className='text-[52px]'>Key to clean future</h1>
          </div>
      </div>
        <div className='flex justify-center '>
           <div className='flex flex-col gap-[40px] '>
                <div className='w-[39vw] flex flex-col gap-[10px] '>
                    <div>
                      <img src={charging} alt="image" />
                    </div>
                    <h3 className='text-[20px] font-semibold'>EV charging </h3>
                    <p>EVs use electricity as a power source,
                        which can be generated from renewable energy sources.
                        Our solutions help reducing greenhouse gas emissions in the transportation sector.
                    </p>
                    <p>Read more</p>
                </div>
                <div className='flex flex-col gap-[10px] '>
                   <div>
                     <img src={energy} alt="" />
                   </div>
                     <h3 className='text-[20px] font-semibold'>Solar Energy </h3>
                     <p>Solar panels convert sunlight into electricity.
                      Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.
                     </p>
                     <p>Read more</p>
                </div>
               
           </div> 
                <div className='flex flex-col gap-[40px] '>
                  <div className='flex flex-col gap-[10px] '>
                    <div>
                     <img src={solar} alt="" />
                   </div>
                  <h3 className='text-[20px] font-semibold'>Wind Energy </h3>
                  <p>Wind turbines harness the kinetic energy of the wind to generate electricity. 
                     Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.
                 </p>
                 <p>Read more</p>
                 </div> 
               
                  <div className='flex flex-col gap-[10px] '>
                    <div>
                      <img src={power} alt="" />
                    </div>
                      <h3 className='text-[20px] font-semibold'>Hydropower </h3>
                      <p>This technology uses the energy from flowing water,
                      such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.
                      </p>
                      <p>Read more</p>
                  </div>
               
                </div>
            </div>
      
     </section>
    </>
  )
}

export default Section2