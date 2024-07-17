import React from 'react'
import psolar from "../assets/flowimages/Image1.png"
import water from "../assets/flowimages/Image2.png"
import field from "../assets/flowimages/Image3.png"
import tissle from "../assets/flowimages/Image4.png"
import ocean from "../assets/flowimages/Image5.png"

const About = () => {
  return (
    <>
     <section className='flex flex-col p-[50px]'>
       <div className='flex flex-col md:flex-row justify-around'>
         <div>
           <h2 className='text-[40px]'>About us</h2>
         </div>
       <div className='w-[30vw] flex flex-col gap-[20px]'>
           <p>At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean,
             renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that
              by harnessing the power of nature, we can power the world and protect it simultaneously.
            </p>
            <button className='bg-[#BEF264] w-[25%] h-[5vh] rounded-[20px] justify-center hover:bg-[#BEF194] hover:text-[white] hover:transition duration-700 ease-in-out'>Read more</button>
        </div>
      </div>
     </section>
     <section className='flex flex-col gap-[5vw]'>
        <div className='flex w-[100%] justify-between'>
           <img src={psolar} alt="image" />
           <img src={water} alt="image" />
           <img src={field} alt="image" />
           <img src={tissle} alt="image" />
           <img src={ocean} alt="image" />
        </div>
        <div className='flex justify-around '>
           <div className='flex flex-col text-start'>
             <p className='font-semibold text-[25px]'>5,000 Mwh</p>
             <p className='text-[10px]'>Renewable Energy Generated</p>
           </div>
           <div className='flex flex-col items-center'>
             <p className='font-semibold'>2,500+</p>
             <p>Metric Tons of CO2 Reduced</p>
           </div>
           <div>
             <p className='font-semibold'>10,000+</p>
             <p>Customers Served</p>
           </div>
           <div>
             <p className='font-semibold'>15%</p>
             <p>Avg. Energy Saved</p>
           </div>
        </div>
     </section>

    </>
  )
}

export default About