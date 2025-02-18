import React, { useState } from 'react'
import { img } from "../../assets/image/img";
import {RiNumber1,RiNumber2,RiNumber3,RiNumber4} from "react-icons/ri";


function Process() {

  const [selectedOption, setSelectedOption] = useState("OnboardingCall");

const options = [
    { name: 'Onboarding Call' },
    { name: 'Planning' },
    { name: 'Execution'},
    { name: 'Optimization & Scaling'},
  ];

  const details = {
    "Onboarding Call": {
      image: img.OnboardingCall,
      title: "Onboarding Call",
      Number: <RiNumber1 className="text-3xl font-extrabold" />,
      description:
        "We dive deep into your business, your challenges, and your goals. We ask you 50-60 questions to help us get into your shoes and understand your stories.",
    },
    Planning: {
      image: img.Plannings,
      title: "Planning",
      Number: <RiNumber2 className="text-3xl font-extrabold" />,
      description:
        "Based on your needs, we create a detailed plan that outlines the exact steps to reach the right audience, grow your brand and business.",
    },
    Execution: {
      image: img.Execution,
      title: "Execution",
      Number: <RiNumber3 className="text-3xl font-extrabold" />,
      description:
        "Once we have a plan in place, we bring it to life—implementing content strategies, launching campaigns, and building your online presence.",
    },
    "Optimization & Scaling": {
      image: img.Optimizations,
      title: "Optimization & Scaling",
      Number: <RiNumber4 className="text-3xl font-extrabold" />,
      description:
        "We analyze, refine, and optimize strategies to ensure we’re delivering the best possible results.",
    },
  };



  return (
    <div className="py-20 px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center ">
      <div className="py-20 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">
        <div className="px-4 sm:px-8 md:px-16 w-full flex flex-col items-center">
          <div data-aos="zoom-in-down" className="text-center mb-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our <span className="text-yellow-300">Process</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-6 sm:gap-10 mt-10">
            <div className="w-full lg:w-1/3 flex flex-col items-start gap-4 sm:gap-6">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center cursor-pointer text-white text-lg sm:text-xl gap-3 p-2 transition-all duration-300 ${
                    selectedOption === option.name ? "text-yellow-300" : "hover:text-yellow-300"
                  }`}
                  onClick={() => setSelectedOption(option.name)} // Use exact option name
                >
                  {selectedOption === option.name && (
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-0.5 bg-yellow-300 shadow-[2px_0_4px_rgba(0,0,0,0.5)]"></div>
                      <div className="w-2 h-2 bg-yellow-300 transform rotate-45"></div>
                    </div>
                  )}
                  {option.icon}
                  <span>{option.name}</span>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-start justify-between bg-stone-900 rounded-3xl p-4 sm:p-6 shadow-lg">
              <>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                    {details[selectedOption]?.title || details[Object.keys(details)[0]].title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {details[selectedOption]?.description || details[Object.keys(details)[0]].description}
                  </p>
                </div>

                <div className="flex flex-col items-center lg:w-1/2 justify-end mt-6 lg:mt-0 self-end">
                  <div
                    className="relative flex items-center justify-center font-extrabold hidden lg:block"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "0% 0% 43% 51% / 10% 14% 51% 46%",
                      color: "#1f1f1f",
                      border: "3px solid yellow",
                      boxShadow: "0 0 15px rgba(255, 255, 0, 0.6)",
                      transform: "translate(90px, -38px)",
                      fontSize: "2rem",
                      strokeWidth: "6",
                    }}
                  >
                    {details[selectedOption]?.Number || details[Object.keys(details)[0]]?.Number || (
                      <RiNumber1 className="text-3xl font-extrabold" />
                    )}
                  </div>

                  <img
                    src={details[selectedOption]?.image || details[Object.keys(details)[0]].image}
                    alt={selectedOption}
                    className="w-full sm:w-60 md:w-72 lg:w-65 lg:h-52 h-44 sm:h-52 md:h-56 object-cover rounded-3xl"
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
