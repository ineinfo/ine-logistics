"use client";

import React from "react";
import { Row, Col, Divider, Image, Grid } from "antd";

const { useBreakpoint } = Grid;

const Awards = () => {
  const screens = useBreakpoint();
  return (
    <>
      <div>
        <div className="text-center text-2xl sm:text-4xl text-blue-900 font-bold py-10">
          Awards & Accreditations
        </div>
        <div className=" text-center">
          <Row className="justify-center">
            <Col
              span={24}
              sm={8}
              className="justify-items-center sm:mx-auto mb-10 sm:mb-0"
            >
              <img
                src="/imgs/inelogo.png"
                alt="APEDA Export Award"
                className="w-2xs"
              />
              <h3 className="text-2xl fontemibold  sm:text-3xl text-blue-900">
                Spices Board India
              </h3>
              <p className="text-lg sm:text-xl mx-0.5 sm:mx-auto text-blue-900 text-center">
                We have genuinely acquired all the necessary certifications
                required in an authentic manner for the export of all spices
                from the Spices Board of India.
              </p>
            </Col>
            <div className="border-l-1 border-blue-800 mx-4"></div>
            {screens.sm ? (
              ""
            ) : (
              <Divider
                type="horizontal"
                className="border-blue-800 border-2 block "
              />
            )}
            <Col span={24} sm={8} className="justify-items-center sm:mx-auto">
              <img
                src="/imgs/inelogo.png"
                alt="APEDA Export Award"
                className="w-2xs"
              />
              <h3 className="text-2xl fontemibold  sm:text-3xl text-blue-900">
                APEDA Export Award
              </h3>
              <p className="text-lg sm:text-xl mx-0.5 sm:mx-auto text-blue-900 text-center">
                We have genuinely acquired all the necessary certifications
                required in an authentic manner for the export of all spices
                from the Spices Board of India.
              </p>
            </Col>
          </Row>
          <button className="mt-10 pt-1 pb-1 px-8 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Awards;
