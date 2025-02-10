import React from 'react';

const rotateBorderStyle = `
  @keyframes rotateBorder {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Counters = () => {
  return (
    <>
      <style>{rotateBorderStyle}</style>

      <div className="flex flex-col items-center h-screen px-4 mt-28">
        {/* Text Content */}
        <p className="text-center text-blue-800 text-lg sm:text-xl md:text-2xl lg:text-4xl">
          <span className="font-bold text-blue-800">INE INTERNATIONAL</span> provider, Ensuring timely and 
          <span className="font-bold text-blue-800"> Damage-Free</span>
        </p>
        <p className="text-center text-blue-800 text-lg sm:text-xl md:text-2xl lg:text-4xl">
          delivery to your exact locations
        </p>

        {/* Space below the text */}
        <div className="mt-10"></div>

        {/* 6 Rectangular Boxes with Rounded Dotted Border */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {/* Box 1 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 5 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 6 */}
          <div className="flex flex-col justify-center items-center border-2 border-solid border-blue-500 rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 animate-rotate">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counters;
