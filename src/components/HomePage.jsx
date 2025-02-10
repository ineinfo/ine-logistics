"use client";

import { useEffect, useState, useRef } from "react";
import FlashPage from "./FlashPage";
import Products from "./Products";
import ProductsList from "./ProductsList";
import Awards from "./Awards";
import Quailty from "./Quailty";
import Navbar from "./Navbar";
import Counters from "./Counters";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const flashPageRef = useRef(null);
  const isScrolled = useRef(false);

  // Navbar visibility logic
  useEffect(() => {
    const handleScroll = () => {
      if (flashPageRef.current) {
        const rect = flashPageRef.current.getBoundingClientRect();
        setShowNavbar(rect.bottom <= 0);
      }
      isScrolled.current = true;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll hint logic (shows after 5 seconds if no scroll happens)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isScrolled.current) {
        setShowScrollHint(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Flash Page with ref */}
      <FlashPage ref={flashPageRef} />

      {/* Conditional Navbar Display */}
      {showNavbar && <Navbar />}

      {/* Rest of the Page */}
      <Products />
      <ProductsList />
      <Awards />
      <Counters />
      <Quailty />
    </>
  );
};

export default HomePage;
