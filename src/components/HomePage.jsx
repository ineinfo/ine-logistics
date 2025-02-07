import React from "react";
import FlashPage from "./FlashPage";
import Products from "./Products";
import ProductsList from "./ProductsList";
import Awards from "./Awards";
import Quailty from "./Quailty";
import Navbar from "./Navbar";
import Counters from "./Counters";

const HomePage = () => {
  return (
    <>
      <FlashPage />
      <Navbar />
      <Products />
      <ProductsList />
      <Awards />
      <Counters />
      <Quailty />
      
    </>
  );
};

export default HomePage;
