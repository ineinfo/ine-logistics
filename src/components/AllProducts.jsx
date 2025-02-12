"use client";

import React, { useEffect, useState } from "react";
import { products } from "../data";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import "./products.css";
import Navbar from "./Navbar";

const AllProducts = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full max-w-[70vw] text-center mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[150px] mb-4 px-4">
          {products.map((product, index) => (
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
                  <p className="text-blue-900 text-center text-lg font-semibold mb-4">
                    {product.description}
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
      </div>
    </>
  );
};

export default AllProducts;
