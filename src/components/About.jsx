import React from 'react';

const About = () => {
  return (
    <div>
      {/* First Section - Blue Gradient Background with Text and Image */}
      <div className="h-[400px] bg-[#76c9f06b] flex items-center justify-center px-10">
        <div className="flex items-center w-full max-w-screen-lg shadow-2xl">
          {/* Left Side - Text */}
          <div className="text-center flex-1">
            <p className="text-4xl font-bold text-blue-900 mb-4">
              Who are we?
            </p>
            <h3 className="text-2xl text-blue-800 mb-6">
              Spices specialists for over a decade
            </h3>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1">
            <img
              src="/imgs/p1.png" // Replace with your image URL
              alt="Spices"
              className="w-full h-[330px] object-cover mt-20"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="relative flex justify-center shadow-2xl">
          <img
            src="/imgs/about_bg.png"
            alt="Second Image"
            className="w-full h-[300px] object-cover relative z-10"
          />
          <img
            src="/imgs/spoon1.png"
            alt="New Image"
            className="absolute top-[-80] left-0 w-1/2 h-1/2 object-cover z-10"
          />
          <div className="absolute top-0 left-10 p-10 text-blue-900 z-20 max-w-md">
            <p className="text-2xl font-bold mb-2">India is an agricultural country.</p>
            <p className="text-xl">
              The principal occupation among the Indian masses is cultivation of crops and other farm related activities. India takes pride in being the second largest economy in the production of agricultural materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
