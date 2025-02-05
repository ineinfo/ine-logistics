"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // For accessing the current route
import Link from "next/link"; // Import Link from next/link
import { Flex } from "antd";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isFixed, setIsFixed] = useState(false);

  // Function to determine active class based on the current path
  const getActiveClass = (path) => {
    return pathname === path ? "text-blue-600" : "text-gray-800";
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const flashPageHeight = document.querySelector(".flash-page").offsetHeight;
    if (window.scrollY >= flashPageHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar w-full bg-blue-200 text-gray-800 z-50 shadow-lg transition-all duration-500 ease-in-out p-0 m-0 ${
          isFixed ? "fixed top-0 left-0" : ""
        }`}
      >
        <Flex align="center">
          <div className="w-[30%] sm:w-[50%] ">
            <Image
              src={"/imgs/inelogo.png"}
              alt="logo"
              width={120}
              height={80}
            />
          </div>
          <div className="flex justify-around text-sm sm:text-lg  font-bold w-[70%] sm:w-[50%]">
            <div className={`cursor-pointer ${getActiveClass("/")}`}>
              <Link href="/">Home</Link>
            </div>
            <div className={`cursor-pointer ${getActiveClass("/aboutus")}`}>
              <Link href="/aboutus">About Us</Link>
            </div>
            <div className={`cursor-pointer ${getActiveClass("/contactus")}`}>
              <Link href="/contactus">Contact Us</Link>
            </div>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
