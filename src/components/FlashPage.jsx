"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlashPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false); // Controls the text animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      const logoTimer = setTimeout(() => {
        setLogoVisible(true);
      }, 500);

      const taglineTimer = setTimeout(() => {
        setTaglineVisible(true);
      }, 1500);

      // Trigger the text animation after the page is loaded
      const textAnimationTimer = setTimeout(() => {
        setShowTextAnimation(true);
      }, 1000);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(taglineTimer);
        clearTimeout(textAnimationTimer);
      };
    }
  }, [loaded]);

  const taglineVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 0 }, // Changed x to 0 to keep text in place
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <div
      className={`${
        loaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } transition-all duration-1000 ease-out bg-cover bg-center bg-fixed min-h-screen`}
      style={{
        backgroundImage: 'url("/imgs/home-band.jpg")',
      }}
    >
      {/* Style for keyframe animation */}
      <style>
        {`
          @keyframes text {
            0% {
              margin-bottom: -40px;
              letter-spacing: 8px;
            }
            50% {
              letter-spacing: 25px;
              margin-bottom: -40px;
            }
            100% {
              margin-bottom: 20px;
              letter-spacing: 8px;
            }
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-center h-full text-center px-4"> {/* Reduced space-y */}
        <div className="flex flex-col items-center justify-center"> {/* Changed space-y to 2 */}
          <motion.img
            src="/imgs/logo.png"
            alt="Logo"
            className="w-96 h-60 object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: logoVisible ? 1 : 0, scale: logoVisible ? 1 : 0.8 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
          {/* INE INTERNATIONAL text with animation */}
          <motion.div
            className="text-blue-900 font-bold text-5xl uppercase md:text-6xl lg:text-7xl animate-[text_4s_1] transition-all" 
            initial="hidden"
            animate={showTextAnimation ? "visible" : "hidden"}
            variants={textVariants}
          >
            {'INE INTERNATIONAL'}
          </motion.div>
        </div>

        {/* {taglineVisible && (
          <motion.div
            className="text-2xl font-semibold text-blue-900"
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
          >
            Connecting Global Markets Through Quality Agriculture
          </motion.div>
        )} */}
      </div>
    </div>
  );
};

export default FlashPage;
