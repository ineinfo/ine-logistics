"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";

const FlashPage = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <div
        ref={ref}
        className={`flash-page ${
          loaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-1000 ease-in-out bg-cover bg-center bg-fixed min-h-screen`}
        style={{
          backgroundImage: 'url("/imgs/home-band.jpg")',
        }}
      >
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

        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.img
              src="/imgs/logo.png"
              alt="Logo"
              className="w-48 h-48 md:w-96 md:h-60 object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: logoVisible ? 1 : 0,
                scale: logoVisible ? 1 : 0.8,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
            <div className="text-blue-900 font-bold text-4xl md:text-5xl lg:text-6xl uppercase">
              {"INE INTERNATIONAL".split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={showTextAnimation ? "visible" : "hidden"}
                  variants={textVariants}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {taglineVisible && (
            <motion.div
              className="text-xl md:text-2xl font-semibold text-blue-900 mt-4"
              initial="hidden"
              animate="visible"
              variants={taglineVariants}
            >
              Connecting Global Markets Through Quality Agriculture
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
});

export default FlashPage;
