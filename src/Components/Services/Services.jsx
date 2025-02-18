import React, { useState } from 'react'
import { img } from "../../assets/image/img";
import { Element } from "react-scroll";



function Services() {


  const [hoveredCard, setHoveredCard] = useState(null);


 const cards = [
    {
      id: 1,
      imageHover: img.circles_2,
      imageNormal: img.circle,
      title: 'Content Strategy & Execution',
      description: 'Your message should be clear, compelling, and consistent. We develop and execute a clear, step-by-step content strategy to attract the right audience and turn them into loyal clients. Every piece of content serves a purpose.',
    },
    {
      id: 2,
      imageHover: img.Frames_2,
      imageNormal: img.Frame,
      title: 'Branding & Positioning',
      description: 'Your brand is more than a logo. It’s how people see you. We help you define your voice, refine your messaging, and position you and your business as an industry leader.',
    },
    {
      id: 3,
      imageHover: img.Layers_2,
      imageNormal: img.Layer,
      title: 'Marketing & Social Media Growth',
      description: 'We help you grow your social media presence and create high-converting marketing campaigns that grow your audience and bring in quality leads. We handle everything from strategy to execution.',
    },
    {
      id: 4,
      imageHover: img.circles_2,
      imageNormal: img.circle,
      title: 'Website Development',
      description: 'Your website should do more than just look good—it should convert visitors into customers. We build and refine websites that work for your business.',
    },
    {
      id: 5,
      imageHover: img.Frames_2,
      imageNormal: img.Frame,
      title: 'Ongoing Support & Optimization',
      description: 'We don’t just launch and leave. We continuously monitor, tweak, and optimize to make sure your business grows and thrives in the digital space.',
    },
    {
      id: 6,
      imageHover: img.Layers_2,
      imageNormal: img.Layer,
      title: 'LinkedIn Personal Branding',
      description: 'We have done it for 200+ clients, generated 100 million views, and got them viral - so rest assured, we know LinkedIn in and out.',
    },
  ];


  return (
    <div className='bg-black'>

         <Element name="services" div className="py-24 px-4 sm:px-8 md:px-16 bg-black w-full flex items-center mb-18 relative -mt-20">
                <div
                  data-aos="zoom-in-down"
                  className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto gap-12 relative"
                >
                  <div
                    data-aos="zoom-in-down"
                    className="w-full lg:w-11/12 space-y-6 text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start">
                      <span className="text-yellow-300 lg:text-xl text-3xl sm:text-2xl font-semibold">
                        What We Do
                      </span>
                    </div>
                    <h1 className="text-white lg:text-5xl sm:text-2xl font-semibold">
                      Services & ​ <span className="text-yellow-300">Solutions</span>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"></div>
                  </div>
        
                  <div className="hidden lg:block absolute right-130 top-10 h-18 w-[2px] bg-yellow-300">
                    <p className="text-white sm:text-lg leading-relaxed w-[30rem] ml-8">
                    Helping businesses use social media the right way, so your content 
                    attracts ideal clients and builds authority.
                    </p>
                  </div>
                </div>
              </Element>
        
              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 -mt-18 max-w-6xl mx-auto px-4 sm:px-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-stone-900 text-white p-4 sm:p-6 rounded-lg shadow-lg 
                         flex flex-col items-center text-center cursor-pointer group 
                         transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={hoveredCard === card.id ? card.imageHover : card.imageNormal}
                alt={card.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 transition-all duration-300"
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 transition-all duration-300">
                {card.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 transition-all duration-300">
                {card.description}
              </p>
            </div>
          ))}
              </div>
      
    </div>
  )
}

export default Services
