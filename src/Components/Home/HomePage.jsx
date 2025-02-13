import React, { useEffect, useState, useRef  } from "react";
import { img } from "../../assets/image/img";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import emailjs from '@emailjs/browser';



import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiGoogleearth } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
} from "react-icons/ri";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "aos/dist/aos.css";
import AOS from "aos";

function HomePage() {

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0kq3yq",   
        "template_0ffw25i",  
        form.current,        
        "HQKDv0pYyVZuItid3" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Error sending message. Please try again.");
        }
      );
      e.target.reset(); 

  };

  
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


  const options = [
    { name: 'Onboarding Call' },
    { name: 'Planning' },
    { name: 'Execution'},
    { name: 'OptimizationScaling'},
  ];

  const details = {
    OnboardingCall: {
      image: img.Groups,
      title: "Onboarding Call",
      Number: <RiNumber1 className="text-3xl font-extrabold" />,
      description:
        "We dive deep into your business, your challenges, and your goals. We ask you 50-60 questions to help us get into your shoes and understand your stories.",
    },
    Planning: {
      image: img.Groups,
      title: "Planning",
      Number: <RiNumber2 className="text-3xl font-extrabold" />,
      description:
        "Based on your needs, we create a detailed plan that outlines the exact steps to reach the right audience, grow your brand and business.",
    },
    Execution: {
      image: img.Groups,
      title: "Execution",
      Number: <RiNumber3 className="text-3xl font-extrabold" />,
      description:
        "Once we have a plan in place, we bring it to life—implementing content strategies, launching campaigns, and building your online presence.",
    },
    OptimizationScaling: {
      image: img.Groups,
      title: "Optimization & Scaling",
      Number: <RiNumber4 className="text-3xl font-extrabold" />,
      description:
        "We analyze, refine, and optimize strategies to ensure we’re delivering the best possible results.",
    },
  };

  const [selectedOption, setSelectedOption] = useState("OnboardingCall");


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


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);


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
      title: 'Marketing & Social Growth',
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
  
  const [hoveredCard, setHoveredCard] = useState(null);


  

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
      appendDots: (dots) => (
        <div>
          <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <button
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            index === i ? "bg-yellow-400 w-4" : "bg-gray-500"
          }`}
        />
      ),
    };


    const testimonialsss = [
      { id: 1, image: img.Profile },
      { id: 2, image: img.Profile },
      { id: 3, image: img.Profile },
    ];



  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
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
          <div className="relative w-full flex justify-center">
            <img
              src={img.objectss}
              alt="Large Image"
              className="relative w-full h-auto lg:w-[55rem] max-w-6xl mx-auto z-10"
            />
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

      {/* section 2 */}
      <div className="py-16 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col lg:flex-row items-center relative ">
        <div className="px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center">
          <div className="text-center mb-4">
            <h1 className="text-yellow-300 lg:text-xl text-1xl sm:text-2xl mb-6">
              All Organic
            </h1>
            <h1 className="text-white text-3xl lg:text-6xl sm:text-2xl py-1">
              Cut through the noise
            </h1>
            <p className="text-gray-400 mt-7 lg:text-2xl text-center lg:max-w-2xl lg:mx-auto">
              Our team helps you stand out and become a thought leader in
              your industry which will help you hire better, get leads, and
              investment.
            </p>

          </div>

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
        </div>
      </div>

      
      {/* section 3 */}
      <div className="py-16 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">
      <img
        src={img.shadow}
        alt="Shadow"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-auto max-w-[60rem] sm:h-[15rem] md:h-[18rem] lg:h-[20rem] opacity-80 z-0"
      />


      <div data-aos="slide-down" className="text-center mb-6 px-4">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          We Help You Get <span className="text-yellow-300">Noticed</span>
        </h1>
      </div>

      <span className="text-white text-sm sm:text-lg mt-4">We'll get you leads</span>

      <div className="w-full max-w-4xl mt-8 px-4 sm:px-6">
        {loaded ? (
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
        ) : (
          <div className="h-[250px] sm:h-[350px] md:h-[400px] w-full flex items-center justify-center">
            <p className="text-white">Loading testimonials...</p>
          </div>
        )}
      </div>
    </div>

      {/* section 4 */}
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


      {/* section 5 */}
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
              selectedOption === option.name.replace(" ", "")
                ? "text-yellow-300"
                : "hover:text-yellow-300"
            }`}
            onClick={() => setSelectedOption(option.name.replace(" ", ""))}
          >
            {selectedOption === option.name.replace(" ", "") && (
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
        {details[selectedOption] ? (
          <>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                {details[selectedOption].title}
              </h2>
              <p className="text-sm text-gray-300">
                {details[selectedOption].description}
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
                {details[selectedOption]?.Number || (
                  <RiNumber1 className="text-3xl font-extrabold" />
                )}
              </div>

              <img
                src={details[selectedOption].image}
                alt={selectedOption}
                className="w-full sm:w-60 md:w-72 lg:w-65 lg:h-52 h-44 sm:h-52 md:h-56  object-cover"
              />
            </div>
          </>
        ) : (
          <div className="text-white text-center w-full">
            No details available for the selected option.
          </div>
        )}
      </div>
    </div>
    </div>
    </div>



      {/* section 6 */}
      <Element name="about" className="min-h-screen flex items-center justify-center py-10 px-6 ">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-lg">
        <div className="lg:w-[23rem] w-full flex items-center justify-end relative lg:min-h-[390px] min-h-[300px] h-10 rounded-2xl mb-6 lg:mb-0 z-10">
      <div className="absolute inset-0 bg-yellow-600 rounded-2xl"></div>
      <img
        src={img.pattern}
        data-aos="fade-up"
        className="lg:h-[25rem] w-auto h-full object-cover rounded-r-2xl z-10"
      />
      <img
        src={img.author}
        alt="Description of the image"
        className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] 
                  h-auto lg:h-[35.6rem] absolute bottom-0 
                  left-1/2 transform -translate-x-1/2 
                  lg:left-49 lg:top-16 lg:-translate-y-1/4 sm:top-16 
                  object-contain"
        />
    </div>
          <div className="w-full lg:w-1/2 px-1 lg:px-6 space-y-6 text-center lg:text-left lg:-mt-18 relative z-0">
            <div
              data-aos="slide-down"
              className="flex items-center justify-center lg:justify-start"
            >
              <h1 className="text-yellow-300 lg:text-2xl text-2xl sm:text-2xl font-semibold mt-8">
                5+ <span className="text-white">Year Experience.</span>{" "}
                <span className="text-yellow-300">200+</span>{" "}
                <span className="text-white">clients.</span>{" "}
              </h1>
            </div>
            <h2
              data-aos="slide-down"
              className="lg:text-2xl text-white sm:text-4xl md:text-4xl font-bold leading-tight"
            >
             Marketing isn't just about selling.
             It's about telling a story that connects with people.

            </h2>
            <p
              data-aos="slide-down"
              className="text-base text-white sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 lg:text-sm"
            >
              I believe in authentic marketing, where every piece of content,
              every message, and every campaign reflects your true purpose and
              values. When you lead with empathy, clarity, and integrity, the
              results follow naturally.
            </p>
            <p className="text-base text-yellow-300 sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 lg:text-sm hidden lg:block">
              Follow us on:
              <hr className="border-t border-yellow-300 w-11" />
            </p>

            <div
              data-aos="slide-right"
              className="mt-2 relative hidden lg:block"
            >
              <div className="bg-stone-900 px-14 py-3 rounded-4xl flex justify-center absolute -left-16">
                <div className="inline-flex space-x-4">
                  <a
                    href="https://xorivotech.com/"
                    className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                  >
                    <SiGoogleearth className="text-xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/xorivotech"
                    target="blank"
                    className="bg-stone-800 text-white py-2 px-4 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                  >
                    <FaFacebook className="text-xl" />
                    <span className="text-lg font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/xorivotech/"
                    target="blank"
                    className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/xorivotechmarketing/"
                    target="blank"
                    className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a
                    href="https://x.com/xorivotech"
                    target="blank"
                    className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* section 7 */}
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

        <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-10 gap-10 max-w-6xl">
          <div className="relative flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-lg h-[450px]">
            <div className="relative w-full h-[350px]">
              {testimonialsss.map((testimonial, i) => {
                const offset = (i - index) * 20;
                const zIndex = testimonials.length - Math.abs(i - index);

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg border-b-4 border-yellow-300 bg-stone-900"
                    style={{
                      transform: `translate(${offset}px, ${offset}px)`,
                      zIndex: zIndex,
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt="Testimonial"
                      className="w-full h-[23rem] object-contain"
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="flex mt-4 space-x-2">
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
          </div>

          <div className="w-full lg:w-1/2 px-4 sm:px-6 text-center lg:text-left">
            <div data-aos="fade-up">
              <p className="text-base text-yellow-300 sm:text-lg leading-relaxed">
                Fashion Entrepreneur
                <hr className="border-t border-yellow-300 w-11 mx-auto lg:mx-0" />
              </p>
            </div>
            <div data-aos="fade-up" className="mt-4">
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                She had a passion for blending fashion with sustainability but
                was struggling to find a loyal audience. We focused on creating
                content that highlighted her brand's values and aligned it with
                trends that mattered to her ideal customers. With targeted posts
                on LinkedIn and Instagram, her audience grew by 40%, and she
                secured key partnerships with eco-friendly brands, bringing her
                closer to securing funding for her next collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>

      {/* section 8 */}
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


      {/* section 9 */}
      <Element name="contactus"
        className="py-12 lg:px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative"
        id="contact"
      >
        <div className="px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center">
          <div data-aos="slide-down" className="text-center">
            <h1 className="text-white lg:text-7xl text-4xl sm:text-2xl">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
          </div>
          <span className="text-white mt-10 text-center lg:text-3xl">
            Feel free to reach us for any query or concern
          </span>
          <div className="relative w-40 flex items-center mt-4">
            <hr className="w-full border-gray-600" />
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-yellow-300"></div>
          </div>

          <div className="py-16 lg:px-4 px-3 sm:px-8 md:px-16 bg-black w-full flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-x-16 relative">
            <div className="w-full lg:w-[48%] flex flex-col items-start">
              <span className="text-white text-3xl mb-6">Just say Hello</span>
              {!isSubmitted ? (
        // Contact Form
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
          <input
            type="text"
            name="user_name"
            required
            placeholder="Name"
            className="w-full p-3 bg-stone-900 text-white rounded-md border border-transparent focus:outline-none hover:border-yellow-300 focus:border-yellow-300 shadow-md hover:shadow-sm hover:shadow-yellow-300 transition-all duration-300"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="E-mail"
            className="w-full p-3 bg-stone-900 text-white rounded-md border border-transparent focus:outline-none hover:border-yellow-300 focus:border-yellow-300 shadow-md hover:shadow-sm hover:shadow-yellow-300 transition-all duration-300"
          />
          <input
            type="text"
            name="user_subject"
            required
            placeholder="Subject"
            className="w-full p-3 bg-stone-900 text-white rounded-md border border-transparent focus:outline-none hover:border-yellow-300 focus:border-yellow-300 shadow-md hover:shadow-sm hover:shadow-yellow-300 transition-all duration-300"
          />
          <textarea
            placeholder="Message"
            name="user_message"
            required
            rows="4"
            className="w-full p-3 bg-stone-900 text-white rounded-md border border-transparent focus:outline-none hover:border-yellow-300 focus:border-yellow-300 shadow-md hover:shadow-sm hover:shadow-yellow-300 transition-all duration-300"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-2 bg-yellow-300 text-black rounded-3xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-sm hover:shadow-yellow-500 cursor-pointer font-semibold"
          >
            Send Message
          </button>
        </form>
      ) : (
        // New Form (After Sending)
        <div className="bg-stone-900 p-6 rounded-md shadow-md text-center">
          <h2 className="text-yellow-300 text-2xl mb-4">Thank You!</h2>
          <p className="text-white mb-4">
            Your message has been sent. We will get back to you soon.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-5 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 cursor-pointer font-semibold"
          >
            Send Another Message
          </button>
        </div>
      )}
            </div>

            <div className="w-full lg:w-[48%] flex flex-col items-start mt-10 lg:mt-0">
              <h2 className="text-white text-3xl mb-6">Contact Info</h2>
              <p className="text-gray-400 mb-6">
                Contact us today for a free consultation and let's grow your
                business together. Call, email, or fill out the form!
              </p>
              <div className="flex flex-col lg:space-y-4  space-y-4">
                <div className="flex items-center lg:space-x-4 space-x-4">
                  <div
                    className="bg-stone-900 rounded-full lg:w-16 lg:h-16 h-8 w-8 flex items-center justify-center 
                transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500"
                  >
                    <IoMailOutline className="text-white lg:text-2xl cursor-pointer" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white text-lg font-bold">Email</span>
                    <span className="text-gray-300 lg:text-lg text-xs">
                      ali@xorivotech.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="bg-stone-900 rounded-full lg:w-16 lg:h-16 h-8 w-8 flex items-center justify-center transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500"
                  >
                    <MdOutlinePhoneInTalk className="text-white lg:text-2xl cursor-pointer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white lg:text-lg font-bold">
                      Phone
                    </span>
                    <span className="text-gray-300 lg:text-lg text-xs">
                      <a href="tel:+918003183831">+91-8003183831</a>{" "}
                      &nbsp;&nbsp;
                      <a href="tel:+61410019259">+61-410019259</a>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="bg-stone-900 rounded-full lg:w-16 lg:h-16 h-8 w-8 flex items-center justify-center transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500"
                  >
                    <CiLocationOn className="text-white lg:text-2xl cursor-pointer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white lg:text-lg font-bold">
                      Address
                    </span>
                    <span className="text-gray-300 lg:text-lg text-xs">
                      35/ 63 Pacific parade, Deewhy, NSW, Australia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}
export default HomePage;
