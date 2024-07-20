import React from 'react'
import arrows from "../assets/flowimages/Arrows.png"
import image23 from "../assets/flowimages/Image23.png"
import image24 from "../assets/flowimages/Image24.png"
import image25 from "../assets/flowimages/Image25.png"
import image26 from "../assets/flowimages/Image26.png"
import ellipse1 from "../assets/flowimages/Ellipse1.png"
import ellipse2 from "../assets/flowimages/Ellipse2.png"
import ellipse3 from "../assets/flowimages/Ellipse3.png"

const Section4 = () => {
  return (
    <>
        <section className='flex justify-around flex-col'>
            <div className='flex justify-around'>
               <h3>Blog</h3>
                <div className='flex items-center'>
                   <p>see all</p>
                   <img className='w-[40px]' src={arrows} alt="image" />
                </div>
            </div>
            <div className='flex justify-center'>
               <div>
                  <img src={image23} alt="image" />
                  <div className='flex gap-[20px]'>
                  <p>Solar Power</p>
                  <p>Solutions</p>
                  </div>
                  <p>Harnessing the Power of the Sun: Exploring the World of Solar Energy</p>
                  <p className='w-[20vw]'>Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.</p>
                  <div className='flex'>
                      <img src={ellipse1} alt="" />
                      <p>Leslie Alexander <img src="" alt="" /> 9 min read</p>
                  </div>
               </div>
               
                  <div className='flex flex-col'>
                      <div>
                          <img src={image24} alt="" />
                          <div>Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</div>
                          <div className='flex'>
                              <img src={ellipse2} alt="" />
                              <p>Wade Warren</p> <img src="" alt="" />7 min read
                          </div>
                      </div>
                  
                      <div>
                          <img src={image25} alt="" />
                          <div>Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</div>
                          <div className='flex'>
                              <img src={ellipse3} alt="" />
                              <p>Wade Warren</p> <img src="" alt="" />7 min read
                          </div>
                      </div>
                  
                      <div className=''>
                          <img src={image26} alt="" />
                          <div>Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts</div>
                          <div className='flex'>
                              <img src={ellipse1} alt="" />
                              <p>Wade Warren</p> <img src="" alt="" />7 min read
                          </div>
                      </div>
                  </div>
               
            </div>
        </section>
    </>
  )
}

export default Section4