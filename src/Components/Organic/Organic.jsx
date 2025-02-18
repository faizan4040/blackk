import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { img } from "../../assets/image/img";
import CountUp from "react-countup";
import "swiper/css";





function Organic() {

  const [inView, setInView] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("stats-section");
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setInView(true);
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



  const people = [
      { name: "HP", img: img.One },
      { name: "Asana", img: img.Two },
      { name: "Benchling", img: img.Three },
      { name: "Crowe",    img: img.Four },
      { name: "Bayut", img: img.Five },
      { name: "Artera", img: img.Six },
      { name: "Gusto", img: img.Seven },
      { name: "Tock", img: img.Eight },
      { name: "Koala", img: img.Nine },
      { name: "Deputy", img: img.Ten },
      { name: "Meriton", img: img.Eleven },
      { name: "LornaJana", img: img.Twelve },
      { name: "Pitcher Partners", img: img.Thirteen },
      { name: "City Beach", img: img.Fourteen },
      { name: "Bp", img: img.Fifteen },
      { name: "Wave", img: img.Sixteen },
      { name: "Kissmetrics", img: img.Seventeen },
      { name: "Little Real Estate", img: img.Eighteen },
      { name: "Adorebeauty", img: img.Ninteen },
      { name: "Aqarat", img: img.Twenty },
    ];








  return (
    
  <div className=" px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col lg:flex-row items-center relative">
  <div className="px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center">
    {/* Title Section */}
    <div className="text-center mb-4">
      <h1 className="text-yellow-300 lg:text-xl text-1xl sm:text-2xl mb-6">
        All Organic
      </h1>
      <h1 className="text-white text-3xl lg:text-6xl sm:text-2xl py-1">
        Cut through the noise
      </h1>
      <p className="text-gray-400 mt-7 lg:text-2xl text-center lg:max-w-2xl lg:mx-auto">
        Our team helps you stand out and become a thought leader in
        your industry which will help you build your brand better, get leads, and
        investment.
      </p>
    </div>

    {/* Stats Section */}
    <div
      id="stats-section"
      className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 lg:gap-40 text-center mt-10"
    >
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-yellow-300">
          {inView && <CountUp start={0} end={100} duration={2} />}M+
        </div>
        <p className="text-sm text-white mt-2">Views On LinkedIn</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-yellow-300">
          {inView && <CountUp start={0} end={21} duration={2} />}+
        </div>
        <p className="text-sm text-white mt-2">Countries</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-yellow-300">
          {inView && <CountUp start={0} end={172} duration={2} />}+
        </div>
        <p className="text-sm text-white mt-2">Happy Clients</p>
      </div>
    </div>

    {/* New Section - Rounded Images with Names */}
    <div className="w-full mt-16 relative">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {people.map((person, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <img
              src={person.img}
              alt={person.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg border-2 border-yellow-300"
            />
            <p className="text-white text-sm sm:text-lg font-medium mt-3 text-center lg:mr-15 mr-10">
              {person.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
     </div>

  )
}

export default Organic
