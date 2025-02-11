"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const router = useRouter();
  const currentMonth = new Date().getMonth() + 1; // 1-based month index (Jan = 1, Dec = 12)
  const isImportExportAllowed = currentMonth >= 7 && currentMonth <= 12;
  const { id } = useParams();

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
                <img
                  src="/imgs/p1.png"
                  alt="Product"
                  className="w-full h-auto rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                />
              </motion.div>
            </Col>

            {/* Product Details Column */}
            <Col xs={24} sm={12} md={12} lg={16} xl={16}>
              <div className="pl-4 mt-6">
                {/* Back Button */}
                <Button
                  type="default"
                  icon={<FaArrowLeft />}
                  onClick={() => router.back()}
                  className="mb-4 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Back
                </Button>

                {/* Product Title */}
                <motion.h2
                  className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide"
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Import/Export Product ID: {id}
                </motion.h2>

                {/* Product Description */}
                <motion.p
                  className="text-lg text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  This high-quality product is designed for seamless import and
                  export operations. Ensure smooth global trade with compliance
                  and efficiency. Our product meets international standards,
                  making it the best choice for logistics and commerce.
                </motion.p>

                {/* Pricing Section */}
                <div className="flex items-center space-x-6 mb-6">
                  <motion.div
                    className="text-3xl font-semibold text-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    $2999.99
                  </motion.div>
                  <motion.div
                    className="text-xl text-gray-500 line-through"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    $3499.99
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
                    className="text-red-600 text-lg font-semibold mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Import/Export is only available from July to December.
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
