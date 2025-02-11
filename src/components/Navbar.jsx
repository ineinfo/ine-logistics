"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for smooth appearance
  }, []);

  const getActiveClass = (path) =>
    pathname === path
      ? "text-blue-500 border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md py-3 px-6 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/imgs/inelogo.png"
            alt="logo"
            width={120}
            height={80}
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link href="/" className={`px-3 py-1 ${getActiveClass("/")}`}>
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`px-3 py-1 ${getActiveClass("/aboutus")}`}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`px-3 py-1 ${getActiveClass("/contactus")}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
