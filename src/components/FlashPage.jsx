"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import { Grid } from "antd";

const {useBreakpoint} = Grid;

const FlashPage = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [showTextAnimation, setShowTextAnimation] = useState(false);
  const screens = useBreakpoint();

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
          backgroundImage: screens.sm ? 'url("/imgs/Web-banner.jpg")':'url("/imgs/mobile-banner.jpg")',
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

        <div className="flex flex-col items-center md:items-start justify-center h-full text-center ml-0 md:ml-10 px-4">
          <div className="flex flex-col items-center justify-center space-y-2 mt-0 md:mt-9">
            <motion.img
              src="/imgs/logo-icon.png"
              alt="Logo"
              className="w-[90px] h-[65px] md:w-[209px] md:h-[150px] object-cover m-[23px]"
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
            <div className="text-blue-900 font-bold text-3xl md:text-5xl lg:text-6xl uppercase">
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
              className="text-lg md:text-2xl font-semibold text-blue-900 mt-2 md:mt-4"
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
