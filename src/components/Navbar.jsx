"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MenuUnfoldOutlined } from "@ant-design/icons"; // Import the icon

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const menuRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for smooth appearance
  }, []);

  useEffect(() => {
    // Close menu when navigating to a different page
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  const getActiveClass = (path) =>
    pathname === path
      ? "text-blue-500 border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 transition-all duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md py-2 px-2 md:py-3 md:px-6 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 md:px-0">
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

        {/* Navigation Links for medium and larger devices */}
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

        {/* Menu button for small devices */}
        <div className="md:hidden">
        <button onClick={toggleMenu}>
            <MenuUnfoldOutlined className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Navigation Links for small devices */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-3 flex justify-center space-x-4 text-lg font-semibold"
        >
          <Link href="/" className={`block px-3 py-1 ${getActiveClass("/")}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/aboutus"
            className={`block px-3 py-1 ${getActiveClass("/aboutus")}`}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`block px-3 py-1 ${getActiveClass("/contactus")}`}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

