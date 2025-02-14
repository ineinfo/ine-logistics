import React from "react";

const outerCircleStyle = {
  backgroundImage: "linear-gradient(#0000ff, #add8e6, #f5f5f5)",
  width: "305px",
  height: "305px",
  borderStyle: "solid",
  borderColor: "transparent",
  borderRadius: "50%",
  borderWidth: "0",
  animation: "rotateCircle 2s linear infinite",
  padding: "2px",
  display: "table",
};

const innerCircleStyle = {
  background: "#ffffff",
  height: "305px",
  width: "305px",
  borderStyle: "solid",
  borderColor: "transparent",
  borderRadius: "50%",
  borderWidth: "1px",
  animation: "rotateCircle 2s linear infinite reverse",
  display: "table",
  textAlign: "center",
};

const keyframesStyle = `
  @keyframes rotateCircle {
    0% { transform: rotate(0); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(180deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Vision = () => {
  return (
    <>
      {/* update */}
      <div className="flex justify-center items-center min-h-screen bg-white overflow-hidden">
        <style>{keyframesStyle}</style>
        <div className="bg-white p-12 rounded-lg shadow-2xl w-full max-w-6xl">
          <h1 className="text-3xl text-blue-800 font-bold text-center mb-8">
            INE INTERNATIONAL
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Circle 1: Mission */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                style={outerCircleStyle}
                className="flex items-center justify-center"
              >
                <div style={innerCircleStyle} className="text-center p-4">
                  <img
                    src="/imgs/mision.png"
                    alt="Mission"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p className="text-blue-800 font-bold text-xl">Mission</p>
                  {/* Additional Small Text */}
                  <p className="text-blue-900 text-sm mt-4">
                    At INE International, our mission is to facilitate the
                    seamless exchange of high-quality agricultural products
                    between regions, creating value for farmers, suppliers, and
                    customers worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Circle 2: Vision */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                style={outerCircleStyle}
                className="flex items-center justify-center"
              >
                <div style={innerCircleStyle} className="text-center p-4">
                  <img
                    src="/imgs/vision.png"
                    alt="Vision"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p className="text-blue-800 font-bold text-xl">Vision</p>
                  {/* Additional Small Text */}
                  <p className="text-blue-900 text-sm mt-4">
                    To be a global leader in the agriculture import and export
                    industry, driving innovation, efficiency, connecting markets
                    and communities to ensure a secure and sustainable food
                    future for all.
                  </p>
                </div>
              </div>
            </div>

            {/* Circle 3: Values */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                style={outerCircleStyle}
                className="flex items-center justify-center"
              >
                <div style={innerCircleStyle} className="text-center p-4">
                  <img
                    src="/imgs/values.png"
                    alt="Values"
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p className="text-blue-800 font-bold text-xl">Values</p>
                  {/* Additional Small Text */}
                  <p className="text-blue-800 text-sm mt-4">
                    Our values are integrity, excellence, collaboration, and
                    sustainability. We believe in trust, delivering the highest
                    quality, working together for mutual success, and for the
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
