import React, { useEffect, useState, useRef } from 'react';
import Testimonials from './Testimonials';
// import TrendingSlider from './TrendingSlider';

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
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    count5: 0,
    count6: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = {
      count1: 6000,
      count2: 9000,
      count3: 7000,
      count4: 12000,
      count5: 25000,
      count6: 3000,
    };

    const duration = 2000; // duration of the animation in milliseconds
    const interval = 50; // interval in milliseconds

    const stepCounts = {
      count1: targetCounts.count1 / (duration / interval),
      count2: targetCounts.count2 / (duration / interval),
      count3: targetCounts.count3 / (duration / interval),
      count4: targetCounts.count4 / (duration / interval),
      count5: targetCounts.count5 / (duration / interval),
      count6: targetCounts.count6 / (duration / interval),
    };

    const intervalId = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        Object.keys(newCounts).forEach((key) => {
          if (newCounts[key] < targetCounts[key]) {
            newCounts[key] += stepCounts[key];
          } else {
            newCounts[key] = targetCounts[key];
          }
        });
        return newCounts;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <>
      <style>{rotateBorderStyle}</style>

      <div ref={countersRef} className="flex flex-col items-center px-4 mt-28 mb-30">
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
              {Math.floor(counts.count1)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 2 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              {Math.floor(counts.count2)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 3 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              {Math.floor(counts.count3)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 4 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              {Math.floor(counts.count4)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 5 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              {Math.floor(counts.count5)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>

          {/* Box 6 */}
          <div style={cardStyle} className="flex flex-col justify-center items-center rounded-lg p-6 w-full h-32 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            <p className="text-center text-blue-800 font-semibold text-xl">
              {Math.floor(counts.count6)}+
            </p>
            <p className="text-center text-blue-800 font-medium text-sm">
              Years of field experience
            </p>
          </div>
        </div>
      </div>
      
      {/* <TrendingSlider /> */}
      <Testimonials />
    </>
  );
}

export default Counters;
