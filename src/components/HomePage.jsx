"use client";

import React, { useState, useEffect } from "react";
import FlashPage from "./FlashPage";
import Products from "./Products";
import ProductsList from "./ProductsList";
import Awards from "./Awards";
import Quailty from "./Quailty";
import Navbar from "./Navbar";
import Counters from "./Counters";

const HomePage = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FlashPage />
      <Navbar isFixed={navbarFixed} />
      <Products />
      <ProductsList />
      <Awards />
      <Counters />
      <Quailty />
      
    </>
  );
};

export default HomePage;
