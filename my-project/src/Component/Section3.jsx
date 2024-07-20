import React from 'react'
import arrows from "../assets/flowimages/Arrows.png"
import item1 from "../assets/flowimages/TeamItem.png"
import item2 from "../assets/flowimages/TeamItem2.png"
import item3 from "../assets/flowimages/TeamItem3.png"
import item4 from "../assets/flowimages/TeamItem4.png"

const Section3 = () => {
  return (
    <>
     <section>
            <div className='flex justify-around items-center'>
                <div>
                  <h3>Meet our experts</h3>
                  <p>Our team boasts top green energy experts, driving innovation in sustainability.</p>
                </div>
                 <img src={arrows} alt="" />
           </div>
            <div className='flex flex-wrap justify-center gap-[20px] w-[100%]'>
                <img src={item1} alt="" />
                <img src={item2} alt="" />
                <img src={item3} alt="" />
                <img src={item4} alt="" />
            </div>
     </section>
    </>
  )
}

export default Section3