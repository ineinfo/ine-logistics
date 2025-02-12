
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
          Certification
        </div>
        <div className=" text-center">
          <Row className="justify-center">
            <Col
              span={24}
              sm={5}
              className="justify-items-center sm:mx-auto mb-10 sm:mb-0"
            >
              <img
                src="/imgs/spiceboard.JPG"
                alt="APEDA Export Award"
                className="w-24 h-28 mb-2 sm:w-32 object-contain"
              />
              <h3 className="text-xl font-semibold sm:text-2xl text-blue-900">
              Spice Board
              </h3>
              <p className="text-base sm:text-lg mx-0.5 sm:mx-auto text-blue-900 text-center">
              We are certified by the Spice Board, ensuring the highest quality standards for spice exports. This certification strengthens our credibility in the global spice market.
              </p>
            </Col>
            <Col
              span={24}
              sm={5}
              className="justify-items-center sm:mx-auto mb-10 sm:mb-0"
            >
              <img
                src="/imgs/apeda.jpg"
                alt="APEDA Export Award"
                className="w-24 sm:w-32 mb-8"
              />
              <h3 className="text-xl font-semibold sm:text-2xl text-blue-900">
                APEDA Export
              </h3>
              <p className="text-base sm:text-lg mx-0.5 sm:mx-auto text-blue-900 text-center">
              Our APEDA certification authorizes us to export agricultural and processed food products. It ensures compliance with international trade regulations for seamless exports.
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
            <Col span={24} sm={5} className="justify-items-center sm:mx-auto mb-10 sm:mb-0">
              <img
                src="/imgs/msme.png"
                alt="APEDA Export Award"
                className="w-24 sm:w-32 mb-8"
              />
              <h3 className="text-xl font-semibold sm:text-2xl text-blue-900">
                MSME
              </h3>
              <p className="text-base sm:text-lg mx-0.5 sm:mx-auto text-blue-900 text-center">
              As an MSME-registered business, we benefit from government support and incentives. This helps us enhance our export capabilities and expand globally.
              </p>
            </Col>
            
            <Col span={24} sm={5} className="justify-items-center sm:mx-auto">
              <img
                src="/imgs/fssai1.png"
                alt="APEDA Export Award"
                className="w-24 h-24 sm:w-32 mb-8 object-contain"
              />
              <h3 className="text-xl font-semibold sm:text-2xl text-blue-900">
               FSSAI
              </h3>
              <p className="text-base sm:text-lg mx-0.5 sm:mx-auto text-blue-900 text-center">
              Our FSSAI certification guarantees that all our food products meet safety and quality standards. It enables us to provide trusted and compliant food exports worldwide.
              </p>
            </Col>
          </Row>
          {/* <button className="mt-30 pt-1 pb-1 px-8 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full">
            Learn More
          </button> */}
        </div>
      </div>

    </>
  );
};

export default Awards;
