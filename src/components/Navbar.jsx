"use client";

import React from "react";
import { usePathname } from "next/navigation"; // For accessing the current route
import Link from "next/link"; // Import Link from next/link
import { Flex } from "antd";
import Image from "next/image";

const Navbar = ({ isFixed }) => {
  const pathname = usePathname(); // Get the current path

  // Function to determine active class based on the current path
  const getActiveClass = (path) => {
    return pathname === path ? "text-blue-600" : "text-gray-800";
  };

  return (
    <>
      <div
        className={`navbar w-full bg-blue-200 text-gray-800 z-50 shadow-lg transition-all duration-500 ease-in-out p-0 m-0 ${
          isFixed ? "fixed top-0 left-0 sm:w-full" : ""
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
