import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { SiGoogleearth } from "react-icons/si";

function Footer() {
  return (
    <div >
    <div className=" w-full bg-black py-6 text-white text-sm font-medium relative">
      <div className="flex justify-center mb-18 -mt-40">
        <div className="flex lg:space-x-8 ">
          <a
            href="https://xorivotech.com/"
            target="_blank"
            data-aos="zoom-in-up"
            className="p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            <SiGoogleearth className="text-xl text-white h-10 w-10" />
          </a>
          <a
            href="https://www.facebook.com/xorivotech"
            target="_blank"
            data-aos="zoom-in-up"
            className="p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            <FaFacebook className="text-xl text-white h-10 w-10" />
          </a>
          <a
            href="https://www.instagram.com/themarketerali/"
            target="_blank"
            data-aos="zoom-in-up"
            className="p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            <FaInstagram className="text-xl text-white h-10 w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/themarketerali/"
            target="_blank"
            data-aos="zoom-in-up"
            className="p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            <FaLinkedinIn className="text-xl text-white h-10 w-10" />
          </a>
          <a
            href="https://x.com/themarketerali"
            target="_blank"
            data-aos="zoom-in-up"
            className="p-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
                hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 
                hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            <FaTwitter className="text-xl text-white h-10 w-10" />
          </a>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 text-center sm:text-left">
        <a href="https://zectagon.com" target="_blank" className="mb-4 sm:mb-0">
          &copy; 2025. Designed & Developed by Zectagon. All rights reserved.
        </a>

        <ul className="flex flex-wrap justify-center sm:justify-end gap-6">
          {["About Us", "Career", "Blog", "Services"].map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <span className="cursor-pointer hover:text-yellow-400 transition">
                {item}
              </span>
              <hr className="w-10 border-yellow-400 mt-1" />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Footer;
