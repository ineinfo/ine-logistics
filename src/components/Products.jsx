"use client";
import { Flex, Image, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./products.css";

const productNames = [
  "Premium Jaggery",
  "Exotic Mango Delights",
  "Savor the Onion",
  "Pure Mango Pulp",
  "Fiery Chilli Heat",
  "Natural Grapes"
];

const productImages = [
  "/imgs/jaggery.png",
  "/imgs/mango.png",
  "/imgs/onion.png",
  "/imgs/mangoplup.png",
  "/imgs/CHILLI.png",
  "/imgs/greps1.png"
];

const productDescriptions = [
  "INE International is a trusted exporter of premium-quality jaggery",
  "INE International offers a variety of organic spices",
  "INE International provides fresh and high-quality fruits",
  "INE International supplies a range of dried nuts",
  "INE International offers a selection of herbal teas",
  "INE International provides natural and pure honey"
];

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
      className="px-6 py-20 bg-white min-h-screen"
      style={{ marginTop: "100px" }}
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-5xl md:text-6xl lg:text-7xl">
          Our Products
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl sm:mx-auto mx-2 mt-4 sm:text-xl">
          NK Agro Exports has built its reputation worldwide with a commitment
          to quality and on-time delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden transition-transform duration-500 group perspective"
            >
              <div className="relative w-full h-full card-inner">
                {/* Front Side */}
                <Card
                  hoverable
                  className="absolute w-full h-full backface-hidden"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={productImages[index]}
                      alt={productNames[index]}
                      preview={false}
                      width={300}
                      height={220}
                      className={`object-contain transition-transform duration-500 ${
                        fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                    />
                  </div>
                  <p className="text-center mt-3 text-lg font-semibold text-gray-800">
                    {productNames[index]}
                  </p>
                </Card>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 card-back">
                  <p className="text-blue-900 text-center text-lg font-semibold mb-4">
                    {productDescriptions[index]}
                  </p>
                  <Button type="primary" className="bg-blue-600 text-white">
                    See More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default Products;
