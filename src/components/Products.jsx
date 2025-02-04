"use client";
import { Col, Flex, Row, Image } from "antd";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      className="px-6 py-10 bg-gray-100 min-h-screen"
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-5xl md:text-6xl lg:text-7xl">
          Our Products
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4 sm:text-xl">
          NK Agro Exports has built its reputation worldwide with a commitment
          to quality and on-time delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="relative">
              <Image
                src="/imgs/products1.png"
                alt={`Product ${index + 1}`}
                preview={false}
                width={300}
                height={220}
                className={`object-cover rounded-xl shadow-lg transition-transform duration-500 ${
                  fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
              <div className="absolute inset-0 bg-[#151414a1] bg-opacity-20 flex items-center justify-center rounded-xl">
                <span className="text-white text-lg font-semibold">
                  Product {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default Products;
