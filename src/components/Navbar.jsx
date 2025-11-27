import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Cart from "../assets/Cart";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isScroll,setIsScroll]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)

  const navPages=[
    {path:'/' , content:"Home"},
    {path:'/shop' , content:"Shop"},
    {path:'/about' , content:"About Us"},
    {path:'/contact' , content:"Contact"}
  ]

 useEffect(()=>{
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

 },[])

  return (
    <div
      className={`fixed mx-auto w-full z-20 px-5 ${
        isScroll ? "bg-white py-3" : " top-10"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h2
              className={`font-['Poppins'] font-black text-[28px] leading-[42px] ${
                isScroll ? "text-black" : " text-white"
              }`}
            >
              Panto
            </h2>
          </Link>

          {/*  Dashboad Menu */}
          {/* Navlinks */}
          <div className="hidden md:block">
            {navPages.map((navItem) => (
              <NavLink
                key={navItem.content}
                to={navItem.path}
                className={(e) =>
                  ` font-['Poppins'] mr-[57px]  ${
                    e.isActive ? "text-[#E58411]" : " "
                  }  ${
                    isScroll
                      ? "text-black font-medium text-[16px]"
                      : "text-white font-black text-[18px]"
                  }
              `
                }
              >
                {navItem.content}
              </NavLink>
            ))}
          </div>

          {/*  Mobile Menu icon */}
          <div className="cursor-pointer md:hidden">
            {menuOpen ? (
              <RxCross1
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            ) : (
              <FaBars
                className={` text-2xl cursor-pointer ${
                  isScroll ? "text-black" : "text-white "
                }`}
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            )}
          </div>

          {/*  Cart Icon */}
          <div className="cursor-pointer relative hidden md:block">
            <Cart color={isScroll ? "black" : "white "} />
            <div className="w-[25px] h-[25px] bg-[#E58411] text-center rounded-full text-white absolute -right-[15px] top-px">
              5
            </div>
          </div>
        </div>

        {/* Mobile Munu  */}
        <div className="md:hidden">
          <div
            className={`${
              menuOpen ? "w-full h-full bg-[#000000d3] " : "w-0 h-full "
            }  -z-50 transition-all  duration-700 ease-in-out transition-discrete fixed top-0  px-5 pt-35 left-0`}
          >
            {menuOpen && (
              <div className="flex flex-col gap-y-10">
                {navPages.map((navItem) => (
                  <NavLink
                    key={navItem.content}
                    to={navItem.path}
                    className="text-white font-black text-[18px]"
                  >
                    {navItem.content}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
