"use client";

import React, { useState, useEffect } from "react";
import { Button, Col, Row, message, Divider, Flex, Tag, Image } from "antd";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import { products } from "../data";
import Loader from "./Loader";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const [currentMonth, setCurrentMonth] = useState(null);
  const [isImportExportAllowed, setIsImportExportAllowed] = useState(false);
  const [product, setProduct] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const month = new Date().getMonth() + 1; // 1-based month index (Jan = 1, Dec = 12)
    setCurrentMonth(month);
    setIsImportExportAllowed(month >= 7 && month <= 12);

    // Fetch product details based on id
    const productId = id - 1;
    const productData = products[productId];
    setProduct(productData);
  }, [id]);

  const getAvailabilityTags = (availability) => {
    const availableMonths = availability
      .split(" to ")
      .map((month) => monthNames.indexOf(month.charAt(0).toUpperCase() + month.slice(1)) + 1);
    
    return monthNames.map((month, index) => {
      const monthIndex = index + 1;
      const isAvailable = availableMonths[0] <= availableMonths[1]
        ? monthIndex >= availableMonths[0] && monthIndex <= availableMonths[1]
        : monthIndex >= availableMonths[0] || monthIndex <= availableMonths[1];
      
      return (
        <Tag
          color={isAvailable ? "green" : "volcano"}
          key={index}
          style={{ margin: "4px", borderRadius: "8px" }}
          icon={isAvailable ? <CheckOutlined /> : <CloseOutlined />}
        >
          {month}
        </Tag>
      );
    });
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen flex items-center justify-center py-10">
        <motion.div
          className="w-full max-w-6xl px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Row gutter={32}>
            {/* Image Column */}
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <motion.div
                className="p-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  src={product.image}
                  alt="Product"
                  className="w-full h-auto rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                />
              </motion.div>
            </Col>

            {/* Product Details Column */}
            <Col xs={24} sm={12} md={12} lg={16} xl={16}>
              <div className="pl-4 -mt-6">
                {/* Back Button */}
                <Button
                  type="default"
                  icon={<FaArrowLeft />}
                  onClick={() => router.back()}
                  className="mb-4 pt-1 pb-1 px-8 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full "
                >
                  Back
                </Button>

                {/* Product Title */}
                <motion.h2
                  className="text-4xl font-bold text-blue-700 mb-4 tracking-wide"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {product.name}
                </motion.h2>

                {/* Product Description */}
                <motion.p
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {product.description}
                </motion.p>

                {/* Pricing Section */}
                <div className="flex items-center space-x-6 mb-6">
                  <motion.div
                    className="text-3xl font-semibold text-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {/* $2999.99 */}
                  </motion.div>
                  <motion.div
                    className="text-xl text-gray-500 line-through"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {/* $3499.99 */}
                  </motion.div>
                </div>

                {/* Add to Cart / Restricted Notice */}
                {isImportExportAllowed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Button
                      type="primary"
                      shape="round"
                      icon={<FaCartPlus />}
                      size="large"
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform transition duration-300 hover:scale-105"
                    >
                      Order Now
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-red-600 text-lg font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Divider orientation="left" style={{ color: "blue" }}>
                      Products Availability
                    </Divider>
                    <Flex gap="24 0" wrap justify="middle">
                      {getAvailabilityTags(product.availability)}
                    </Flex>
                  </motion.div>
                )}
              </div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </>
  );
};

export default ProductDetails;
