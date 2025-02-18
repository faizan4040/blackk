import React, { useRef, useState } from 'react'
import { img } from "../../assets/image/img";
import emailjs from '@emailjs/browser';
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Element } from "react-scroll";




function Form() {

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
  





  return (

<div className="-mt-30 py-30 px-4 h-full bg-black sm:px-8 md:px-16 w-full flex flex-col items-center ">
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
                            <a href="mailto:ali@xorivotech.com">
                            <IoMailOutline className="text-white lg:text-2xl cursor-pointer" />
                            </a>
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

  )
}

export default Form
