import React from 'react';

const rotateBorderStyle = `
  @keyframes rotateBorder {
    0% { border-color: blue; }
    25% { border-color: lightblue; }
    50% { border-color: white; }
    75% { border-color: lightblue; }
    100% { border-color: blue; }
  }
`;

const cardStyle = {
  borderStyle: "solid",
  borderColor: "blue",
  borderRadius: "10px",
  borderWidth: "2px",
  animation: "rotateBorder 2s linear infinite",
};

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
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              6k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 2 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              9k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 3 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              7k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 4 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              12k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 5 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              25k+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 6 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              3k+
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
