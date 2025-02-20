"use client";
import { Flex, Image, Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./products.css";
import Link from "next/link";
import { products } from "../data";

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
      style={{ marginTop: "150px" }}
    >
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 sm:text-5xl md:text-6xl lg:text-7xl">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 font-semibold leading-relaxed max-w-2xl sm:mx-auto mx-2 mt-4 sm:text-xl">
          INE International has built its reputation worldwide with a commitment
          to quality and on-time delivery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
          {products.slice(0, 6).map((product, index) => (
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
                      src={product.image}
                      alt={product.name}
                      preview={false}
                      width={300}
                      height={220}
                      className={`object-contain transition-transform duration-500 ${
                        fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                    />
                  </div>
                  <p className="text-center mt-3 text-lg font-semibold text-gray-800">
                    {product.name}
                  </p>
                </Card>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 card-back">
                  {/* <p className="text-blue-900 text-center text-lg font-semibold mb-4">
                    {product.description}
                  </p> */}
                  <p className="text-blue-900 text-center text-lg font-semibold mb-4">
                    {product.description.length > 100
                      ? `${product.description.slice(0, 100)}...`
                      : product.description}
                  </p>

                  <Link href={`/${index + 1}/details`}>
                    <Button type="primary" className="bg-blue-600 text-white">
                      <span className="text-white">See More</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/all-products"}>
          <Button
            type="primary"
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white mt-8  rounded-lg shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300"
          >
            <span className="text-white font-semibold text-lg px-8 py-5">
              See All Products
            </span>
          </Button>
        </Link>
      </div>
    </Flex>
  );
};

export default Products;
