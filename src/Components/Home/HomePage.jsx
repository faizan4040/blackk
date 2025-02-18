import React, { useEffect, useState} from "react";
import { img } from "../../assets/image/img";
import { Element } from "react-scroll";
import "aos/dist/aos.css";
import AOS from "aos";



function HomePage() {


  const [counter, setCounter] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const target = 100; // Target count
  const duration = 2000; // Duration in milliseconds for count-up animation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !startCounting) {
        setStartCounting(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startCounting]);

  useEffect(() => {
    if (startCounting) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCounter(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [startCounting]);


  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "fade-up",
      once: false,
    });
    return () => {
      AOS.refresh();
    };
  }, []);


 

  return (
    // section 1
    <div className="py-34 px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center ">
      <Element name="home" className="text-center mb-10 relative">
        <h1
          data-aos="slide-down"
          className="text-white lg:text-5xl sm:text-2xl text-2xl"
        >
          Your Business Deserves{" "}
          <span className="text-yellow-300">More Visibility,</span> <br /> More
          Growth
          <span className="text-yellow-300"> More Leads.</span>
        </h1>
        <p className="text-gray-200 font-extrabold mt-7 text-sm lg:text-lg 
               text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          Every day, businesses, entrepreneurs, and executives struggle to break
          through the noise. Social media efforts feel like a waste. Content isn't 
          reaching the right audience. Brand visibility is weak. Leads aren't converting.
        </p>

        <button
          className="mt-10 px-5 py-2 bg-yellow-300 text-black rounded-3xl  hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
        >
          <a href="#contact">Get In Touch</a>
        </button>

        <div className="mt-18 relative flex justify-center">
        <img
          src={img.shadow}
          alt="Shadow"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 
             hidden sm:block  /* Hides on phone screens */
             w-[140%] sm:w-[100%] md:w-[110%] lg:w-[110%] xl:w-[150%] 2xl:w-[160%] 
             h-auto max-w-none 
             sm:h-[12rem] md:h-[15rem] lg:h-[18rem] xl:h-[22rem] 2xl:h-[25rem] 
             opacity-80 z-0"
          />
           <div className="relative w-full flex flex-col items-center">
      <div className="absolute lg:top-45 lg:left-30 top-12 left-10 p-4 text-white z-20 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        {counter}M+
      </div>
      <div className="relative w-full flex justify-center">
        <img
          src={img.objectss}
          alt="Large Image"
          className="relative w-full h-auto lg:w-[55rem] max-w-6xl mx-auto z-10"
        />
      </div>
    </div>

          <div className="absolute lg:top-1/2 lg:-ml-1 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-[42rem] max-w-6xl lg:h-[30rem] z-10 justify-center items-center hidden lg:block">
      <div className=" bg-opacity-60 p-3 flex flex-col md:flex-row items-center w-full h-[28rem]">
        <div
          data-aos="flip-up"
          data-aos-duration="4000"
          className="absolute bottom-0 w-full"
        >
          <img
            src={img.Vector}
            alt="Full-Width Bottom Image"
            className="w-full h-20 md:h-32 object-cover rounded-b-xl -ml-3"
          />
        </div>
      </div>
    </div>
        </div>
      </Element>

    </div>
  );
}
export default HomePage;
