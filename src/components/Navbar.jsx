import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { style } from "../style";
import { navLinks, navLinks2 } from "../constants";
import { logo, menu, close, github, Microsoft, kaggle } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        style.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <span className="sm:hidden"></span>
          <p className='text-white text-[24px] font-bold cursor-pointer flex'>
            Tommy Lam 
          </p>
        </Link>
        <Link
          to='https://github.com/tltommu'
          className='flex gap-2'
          target="_blank"
        >
          <img src={github} alt='github logo' className='w-9 h-9 object-contain hidden sm:flex' />
          <span className="sm:hidden"></span>
          <p className='text-white text-[24px] font-bold cursor-pointer flex hidden lg:block'>
          TLtommu
          </p>
        </Link> 
        <Link
          to='https://learn.microsoft.com/en-us/users/tommylam-7630/transcript/7x09iw2055r9wn7'
          className='flex gap-2'
          target="_blank"
        >
          <img src={Microsoft} alt='Microsoft logo' className='w-9 h-9 object-contain hidden sm:flex' />
          <span className="sm:hidden"></span>
          <p className='text-white text-[24px] font-bold cursor-pointer flex hidden lg:block'>
          Transcript
          </p>
        </Link>
        <Link
          to='https://www.kaggle.com/tltommu'
          className='flex gap-2'
          target="_blank"
        >
          <img src={kaggle} alt='Kaggle logo' className='w-9 h-9 object-contain hidden sm:flex' />
          <span className="sm:hidden"></span>
          <p className='text-white text-[24px] font-bold cursor-pointer flex hidden lg:block'>
          Profile
          </p>
        </Link>
         
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks2.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`} target={`${nav.target}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)
            }
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;