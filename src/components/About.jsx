import React from "react";
import Vision from "./Vision";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      {/* First Section - Blue Gradient Background with Text and Image */}
      <div className="h-[400px] bg-[#76c9f06b] flex items-center justify-center px-4 md:px-10 mt-28">
        <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg">
          {/* Left Side - Text */}
          <div className="text-center flex-1 mb-6 md:mb-0">
            <p className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
              Who are we?
            </p>
            <h3 className="text-lg md:text-2xl text-blue-800 mb-6">
              Spices specialists for over a decade
            </h3>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1">
            <img
              src="/imgs/p1.png" // Replace with your image URL
              alt="Spices"
              className="w-full h-[200px] md:h-[330px] object-cover mt-0 md:mt-20"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="relative flex flex-col md:flex-row justify-center">
          <img
            src="/imgs/about_bg.png"
            alt="Second Image"
            className="w-full h-auto object-cover relative z-10"
          />
          <img
            src="/imgs/spoon1.png"
            alt="New Image"
            className="absolute top-[-18px] md:top-[-100px] left-5 md:left-10 w-1/2 md:w-1/2 object-cover z-10"
          />
          <img
            src="/imgs/products1.png"
            alt="New Image"
            className="absolute bottom-[-40px] md:bottom-[-80px] left-5 md:left-100 w-1/3 md:w-1/5 object-cover z-10"
          />
          <div className="absolute top-3 md:top-10 left-5 md:left-10 p-1 md:p-10 text-blue-900 z-20 max-w-[60%] md:max-w-[45%]">
            <p className="text-sm md:text-3xl font-bold mb-2">
              Empowering Agriculture for Global Food Security.
            </p>
            <p className="text-base hidden md:block md:text-2xl">
              Our goals are to empower farmers, link buyers and suppliers, and
              promote environmentally friendly agricultural practices. We work
              to support farmers' livelihoods, increase global food security,
              and satisfy the growing demand for fresh, nutrient-dense produce.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="pt-20 pb-5 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-extrabold text-blue-900 mb-8 tracking-wide drop-shadow-lg">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Our expertise in spice trading, dedication to sustainability, and
            commitment to quality make us the preferred partner for businesses
            worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800 uppercase tracking-wide">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-7">
                We source only the finest spices, ensuring freshness, purity,
                and top-notch quality in every shipment.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800 uppercase tracking-wide">
                Global Reach
              </h3>
              <p className="text-gray-600 leading-7">
                Our extensive network ensures seamless logistics and timely
                deliveries across the globe.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800 uppercase tracking-wide">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-7">
                We promote eco-friendly farming practices and fair trade to
                support farmers and protect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Vision />
    </>
  );
};

export default About;
