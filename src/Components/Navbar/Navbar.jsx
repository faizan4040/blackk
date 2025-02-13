import { useState } from "react";
import { img } from "../../assets/image/img";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between">
          <div className="flex items-center">
            <img
              className="w-25 object-contain"
              src={img.LogoNew}
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              <Link
               to="home"
               smooth={true}
               duration={500}
              ><a
                href="#"
                className="rounded-md bg-stone-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Home
              </a></Link>
              <Link
              to="about"
              smooth={true}
              duration={500}
              ><a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
              >About Us</a>
              </Link>

              <Link
              to="services"
              smooth={true}
              duration={500}
              ><a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
              >
                Services
              </a></Link>


              <Link
              to="testimonial"
              smooth={true}
              duration={500}
              ><a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
              >
                Testimonial
              </a></Link>
              <Link
              to="casestudies"
              smooth={true}
              duration={500}
              ><a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
              >
                Case Studies
              </a></Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
             to="contactus"
             smooth={true}
             duration={500}
            ><a
              href="#contact"
              type="button"
              className=" hidden lg:block px-5 py-2 bg-yellow-300 text-black rounded-3xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
            >
              Contact Us
            </a></Link>
            <button
              className="sm:hidden ml-4 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-black px-2 pt-2 pb-3 space-y-1">
          <Link
          to="home"
          smooth={true}
          duration={500}
          ><a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-white bg-stone-900"
          >
            Home
          </a></Link>

          <Link to="about"
              smooth={true}
              duration={500}><a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
          >
            About Us
          </a></Link>

          <Link to="services"
              smooth={true}
              duration={500}><a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
          >
            Services
          </a></Link>
          <Link
          to="testimonial"
          smooth={true}
          duration={500}
          ><a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
          >
            Testimonial
          </a></Link>

          <Link to="casestudies"
              smooth={true}
              duration={500}><a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white"
          >
            Case Studies
          </a></Link>
          
          <button
            type="button"
            className="w-full px-5 py-2 bg-yellow-300 text-black rounded-3xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:shadow-sm hover:shadow-yellow-500 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
