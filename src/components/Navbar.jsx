import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Cart from "../assets/Cart";
import { FaBars, FaRegMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Theme } from "../context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { Carts } from "../context/CartContext";

const Navbar = () => {
  const [isScroll,setIsScroll]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  const { theme, toggleTheme } = useContext(Theme);
  const {cartItem}=useContext(Carts)

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
        isScroll
          ? theme == "dark"
            ? "bg-[#1A1A1A] py-3  "
            : "bg-white py-3"
          : " top-10"
      } `}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h2
              className={`font-['Poppins'] font-black text-[28px] leading-[42px] dark:text-white ${
                isScroll ? "text-black" : " text-white"
              }`}
            >
              Panto
            </h2>
          </Link>

          {/*  Dashboad Menu */}
          {/* Navlinks */}
          <div className="hidden lg:block">
            {navPages.map((navItem) => (
              <NavLink
                key={navItem.content}
                to={navItem.path}
                className={(e) =>
                  ` font-['Poppins'] mr-[57px] dark:text-white  ${
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
          <div className="cursor-pointer lg:hidden z-50">
            {menuOpen ? (
              <RxCross1
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            ) : (
              <FaBars
                className={` text-2xl cursor-pointer ${
                  isScroll & (theme == "light") ? "text-black" : "text-white "
                }`}
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            )}
          </div>

          {/*  Cart Icon */}
          <div className="cursor-pointer relative hidden lg:flex gap-7 items-center">
            <Cart color={isScroll && theme == "light" ? "black" : "white "} />
            {cartItem.length > 0 && (
              <div className="w-[25px] h-[25px] bg-[#E58411] text-center rounded-full text-white absolute right-[31px] top-px">
                {cartItem.length}
              </div>
            )}
            <div onClick={toggleTheme}>
              {theme == "light" ? (
                <FaRegMoon
                  className={`${
                    isScroll && theme == "light" ? "text-black" : "text-white "
                  } text-[20px]`}
                />
              ) : (
                <IoSunnyOutline
                  className={`${
                    isScroll && theme == "light" ? "text-black" : "text-white "
                  } text-[20px]`}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Munu  */}
        <div className="lg:hidden">
          <div
            className={`${
              menuOpen
                ? "bg-[#000000d3] translate-x-0 "
                : " -translate-x-full bg-[#000000d3]  "
            }  z-40 transition-transform transform duration-200 fixed top-0  px-5 pt-35 left-0 w-full h-full`}
          >
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
