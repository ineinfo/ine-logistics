"use client";

import React from "react";
import { Row, Col, Image, Grid } from "antd";

const { useBreakpoint } = Grid;

const ProductsList = () => {
  const screens = useBreakpoint();
  return (
    <div className="mt-48">
      <div className="bg-[#76c9f06b] p-10">
        <Row justify="space-around" gutter={[16, 16]}>
          <div className="hidden sm:block">
            <Col span={3} className="text-center  ">
              <Image
                width={220}
                height={220}
                src="/imgs/home-groundnut1.png"
                className="mb-2.5 hover:scale-110 transition-transform"
                preview={true}
              />
              <h3 className="text-center text-blue-950 text-2xl font-semibold">
                Groundnut
              </h3>
            </Col>
          </div>
          <Col span={24} sm={6} className="text-center">
            <div className="flex flex-col justify-center items-center min-h-[100%]">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-950">
                Procured from the finest producers…
              </h2>
              <h3 className="text-lg sm:text-xl text-blue-800">
                Packed and dispatched with perfection
              </h3>
            </div>
          </Col>
          <div className=" hidden sm:block">
            <Col span={3} className="text-center">
              <Image
                width={220}
                height={220}
                src="/imgs/p1.png"
                className="mb-2.5 hover:scale-110 transition-transform"
                preview={true}
              />
              <h3 className="text-center text-blue-950 text-2xl font-semibold">
                Turmeric
              </h3>
            </Col>
          </div>
        </Row>

        {/* Mobile View Adjustment */}
        <Row gutter={[16, 16]} className="mt-8 sm:justify-evenly">
          <Col span={8} sm={4} className="text-center">
            <Image
              width={screens.sm ? 220 : 100}
              height={screens.sm ? 220 : 100}
              src="/imgs/p1.png"
              className="mb-2.5 hover:scale-110 transition-transform w-full"
              preview={true}
            />
            <h3 className="text-center text-blue-950 text-2xl font-semibold">
              Cumin
            </h3>
          </Col>
          <Col span={8} sm={4} className="text-center">
            <Image
              width={screens.sm ? 220 : 100}
              height={screens.sm ? 220 : 100}
              src="/imgs/home-groundnut1.png"
              className="mb-2.5 hover:scale-110 transition-transform w-full"
              preview={true}
            />
            <h3 className="text-center text-blue-950 text-xl sm:text-2xl font-semibold">
              Chillies
            </h3>
          </Col>
          <Col span={8} sm={4} className="text-center">
            <Image
              width={screens.sm ? 220 : 100}
              height={screens.sm ? 220 : 100}
              src="/imgs/p1.png"
              className="mb-2.5 hover:scale-110 transition-transform w-full"
              preview={true}
            />
            <h3 className="text-center text-blue-950 text-xl sm:text-2xl font-semibold">
              Rice
            </h3>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsList;
