import React, { useState } from 'react'
import { img } from "../../assets/image/img";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Casestudy() {

      const [index, setIndex] = useState(0);




const testimonialls = [
      {
        id: 1,
        image: img.Profiles_1,
        title: "Fashion Entrepreneur",
        description:
          "She had a passion for blending fashion with sustainability but was struggling to find a loyal audience. We focused on creating content that highlighted her brand's values and aligned it with trends that mattered to her ideal customers. With targeted posts on LinkedIn and Instagram, her audience grew by 40%, and she secured key partnerships with eco-friendly brands, bringing her closer to securing funding for her next collection.",
      },
      {
        id: 2,
        image: img.Profiles_2,
        title: "B2B SaaS Startup",
        description:
          "They came to us with one key challenge: they needed to reach more decision-makers in their industry. We built a content strategy that included insightful blog posts, case studies, and engaging. social media campaigns. The result? A 30% boost in demo requests and a 15% increase in monthly inbound inquiries, which directly impacted their sales pipeline and conversion rates. ",
      },
      {
        id: 3,
        image: img.Profile_6,
        title: "Health Coach",
        description:
          "Her goal was to build trust in her expertise and expand her client base. We created a mix of motivational posts and educational content about healthy living. By sharing client success stories and personal tips, she became a go-to resource for health and wellness. Her followers doubled in just three months, and she saw a 25% increase in direct messages from people wanting to book consultations.",
      },
      {
        id: 4,
        image: img.Profiles_3,
        title: "Finance Expert",
        description:
          "He wanted to become a more recognizable figure in the finance industry and generate leads through his social media channels. After analyzing his audience, we tailored his content to provide a mix of financial tips, industry insights, and personal stories about overcoming challenges. His LinkedIn following grew by 50%, and he gained 5+ speaking opportunities, along with partnerships with fintech companies.",
      },
      {
        id: 5,
        image: img.Profile_4,
        title: "E-commerce Brand",
        description:
          "This client was struggling to connect with the right audience for their sustainable product line. We created a targeted content strategy that focused on the brand’s eco-conscious values and shared real-life stories of how their products were made. This approach resulted in a 35% increase in engagement and a 20% growth in online sales within just two months.",
      },
      {
        id: 6,
        image: img.Profile_5,
        title: "Real Estate Developer",
        description:
          "His goal was simple: he wanted to position himself as a thought leader in the luxury real estate space. We helped him create a consistent flow of content across multiple platforms, focusing on trends in luxury homes, investment opportunities, and personal success stories. As a result, he saw a 40% increase in inbound leads and secured high-value property deals worth over $5 million within three months.",
      },
      
    ];




  return (
    <div>

<Element name="casestudies" className="py-8 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div data-aos="slide-down" className="text-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
            Case <span className="text-yellow-300">Studies</span>
          </h1>
        </div>
        <p className="text-white mt-4 sm:mt-6 text-center text-sm sm:text-lg max-w-2xl">
          Transformative Personal Branding Journeys with Our Proven Services
        </p>


        <div className="flex flex-col items-center justify-center w-full mt-10 gap-10 max-w-6xl">
        <motion.div
          key={testimonialls[index].id} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center w-full gap-10"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-lg h-[450px]">
            <div className="relative w-full h-[350px]">
              <motion.img
                key={testimonialls[index]?.id}
                src={testimonialls[index]?.image}
                alt="Testimonial"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg border-b-4 border-yellow-300 bg-stone-900 lg:object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4 sm:px-6 text-center lg:text-left">
            <p className="text-base text-yellow-300 sm:text-lg leading-relaxed">
              {testimonialls[index]?.title}
              <hr className="border-t border-yellow-300 w-11 mx-auto lg:mx-0" />
            </p>
            <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mt-4">
              {testimonialls[index]?.description}
            </p>
          </div>
        </motion.div>

      <div className="flex justify-center -mt-6 space-x-2 w-full">
        {testimonialls.map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === i ? "bg-yellow-400 w-4" : "bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
        
      </div>
    </Element>
      
    </div>
  )
}

export default Casestudy
