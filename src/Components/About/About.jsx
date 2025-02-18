import React from 'react'
import { img } from "../../assets/image/img";
import { SiGoogleearth } from "react-icons/si";
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import { Element } from "react-scroll";


function About() {
  return (
    <div className="-mt-28 px-4 sm:px-8 md:px-16 bg-black w-full flex flex-col items-center relative">

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
                            href="https://www.instagram.com/themarketerali/"
                            target="blank"
                            className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                          >
                            <FaInstagram className="text-xl" />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/themarketerali/"
                            target="blank"
                            className="bg-stone-800 text-white py-2 px-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-stone-700 transition-all cursor-pointer"
                          >
                            <FaLinkedinIn className="text-xl" />
                          </a>
                          <a
                            href="https://x.com/themarketerali"
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
      
    </div>
  )
}

export default About
