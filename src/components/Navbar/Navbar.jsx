import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Adding the scroll event listener in component initialization
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav className={`bg-[#2c3e50] fixed w-full z-20 top-0 start-0 -b transition-all duration-[600ms] ${scrolled ? "py-2" : "py-6"}`}>
      <div className=" flex flex-wrap items-center justify-between mx-auto container">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-[calc(1.325rem+0.9vw)] lg:text-[2rem]  text-white uppercase font-bold py-[.3125rem]">Start Framework</span>
        </Link>
        <div className="flex md:oclassNaspace-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto text-white font-bold uppercase" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4  md:flex-row md:mt-0  ">
            <li className="mr-4">
              <NavLink
                to="/about"
                className={
                  ({ isActive }) => `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1abc9c]" : ""}` // Apply styles conditionally
                }
              >
                About
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/portfolio" className={({ isActive }) => `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1abc9c]" : ""}`}>
                Portfolio
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/contact" className={({ isActive }) => `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1abc9c]" : ""}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
