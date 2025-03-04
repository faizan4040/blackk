import React, { useEffect, useState } from 'react'
import { img } from "../../assets/image/img";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Notice() {

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setIndex(next),
    arrows: false,

  };
  
  

  const testimonials = [
    {
      image: img.trade,
    },
    {
      image: img.trade,
    },
    {
      image: img.trade,
    },
  ];


  return (
    <div className="py-40 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">
  <img
    src={img.shadow}
    alt="Shadow"
    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-auto max-w-[60rem] sm:h-[15rem] md:h-[18rem] lg:h-[15rem] top-99 opacity-80 z-0"
  />

  <div data-aos="slide-down" className="text-center mb-6 px-4">
    <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      We Help You Get <span className="text-yellow-300">Noticed</span>
    </h1>
  </div>

  <span className="text-white text-sm sm:text-lg mt-4">We'll get you leads</span>
  <div className="relative w-40 flex items-center mt-4">
    <hr className="w-full border-gray-600" />
    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-yellow-300"></div>
  </div>

  {/* Testimonial Slider */}
  <div className="w-full max-w-4xl mt-8 px-4 sm:px-6">
    {loaded ? (
      <>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                data-aos="fade-up"
                className="flex items-center justify-center relative h-[250px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom 3-dot Navigation */}
        <div className="flex justify-center mt-2 space-x-2 w-full">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === i ? "bg-yellow-400 w-4" : "bg-gray-500"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </>
    ) : (
      <div className="h-[250px] sm:h-[350px] md:h-[400px] w-full flex items-center justify-center">
        <p className="text-white">Loading testimonials...</p>
      </div>
    )}
  </div>
</div>

  )
}

export default Notice
