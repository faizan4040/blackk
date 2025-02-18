import React from 'react'
import { img } from "../../assets/image/img";
import { Element } from "react-scroll";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testinomial() {

const testimonialss = [
    {
      feedback:
        "Ali's strategic approach helped us refine our digital presence and attract the right clients. Our lead generation increased by 40% in just three months. His marketing expertise has been a game-changer for our business.",
      name: "John Carter",
      para: "CEO of GreenTech Solutions",
      image: img.Client_1, // Replace with the correct image path
    },
    {
      feedback:
        "I was overwhelmed with managing our social media and branding. Ali stepped in, streamlined our content, and aligned our strategy with our brand values. Within weeks, our engagement doubled, and membership inquiries skyrocketed.",
      name: "Sarah Thompson",
      para: "Founder of Thrive Fitness Studio",
      image: img.Client_2, // Replace with the correct image path
    },
    {
      feedback:
        "As a B2B tech company, we needed a digital strategy that speaks directly to our target market. Ali crafted a content plan that not only increased our online visibility but also improved conversion rates. His insights into social media were invaluable.",
      name: "David Lee",
      para: "CMO at NovaTech Innovations",
      image: img.Client_3, // Replace with the correct image path
    },
    {
      feedback:
        "We’ve been in business for over 10 years, but Ali’s branding and social media strategies gave us the fresh perspective we needed. Sales went up, and we finally started getting noticed in a crowded market.",
      name: "Michael Roberts",
      para: "Owner of Roberts Home Interiors",
      image: img.Profile_1, // Replace with the correct image path
    },
    {
      feedback:
       "We were struggling to define our brand and connect with our audience online. Ali helped us create a clear strategy that reflected our mission, and now our product sales are growing faster than ever. His work has been instrumental to our success.",
      name: "Lisa Grant",
      para: "Founder of PureOrganics Cosmetics",
      image: img.Profile_3, // Replace with the correct image path
    },
    {
      feedback:
       "Ali’s ability to align our messaging with our audience’s needs is unparalleled. His social media campaigns brought in qualified leads, and his content strategy increased our thought leadership presence. Working with him has been a turning point for our business.",
      name: "Richard Adams",
      para: "Managing Director of Visionary Consulting",
      image: img.Profile_2, // Replace with the correct image path
    },
  ];



  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };












  return (
    <div className="py-16 px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center ">

<Element name="testimonial" className="py-16 sm:py-20 md:py-25 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">
  <div className="text-center">
    <h1
      data-aos="slide-down"
      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold"
    >
      Customer <span className="text-yellow-300">Testimonials</span>
    </h1>
    <span className="text-white mt-6 text-lg sm:text-2xl lg:text-3xl block">
      Look! What our clients are saying
    </span>
  </div>

  <div className="relative w-40 flex items-center mt-4">
    <hr className="w-full border-gray-600" />
    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-yellow-300"></div>
  </div>

  <div className="w-full max-w-6xl relative mt-12">
    <Slider {...settingss}>
      {testimonialss.map((testimonial, index) => (
        <div key={index} className="relative flex flex-col items-center px-4 gap-y-6">
          <div className="bg-stone-900 p-4 sm:p-6 md:p-8 text-center shadow-lg relative w-full max-w-md cursor-pointer">
            <img
              src={img.Hosting} 
              data-aos="fade-up"
              className="lg:h-[5rem] h-auto absolute right-4 top-4 opacity-30"
            />
            <p className="text-white text-sm sm:text-base text-left relative z-10">
              "{testimonial.feedback}"
            </p>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-0 h-0 
              border-l-[16px] border-l-transparent 
              border-r-[16px] border-r-transparent 
              border-t-[16px] border-t-stone-900"
            ></div>
          </div>
          <div className="flex flex-col items-center mt-6 sm:mt-8 cursor-pointer">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 sm:w-20 md:w-24 h-auto rounded-full border-4 shadow-lg"
            />
            <h3 className="text-white font-semibold mt-3 text-lg sm:text-xl">
              {testimonial.name}
            </h3>
            <span className="text-gray-200 text-sm sm:text-base">
              {testimonial.para}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
     </Element>
      
    </div>
  )
}

export default Testinomial
