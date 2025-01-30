"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlashPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

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
      }, 2000);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(taglineTimer);
      };
    }
  }, [loaded]);

  const taglineVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
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
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 px-4 pt-16">
        <motion.img
          src="/imgs/inelogo.png"
          alt="Logo"
          className="w-68 h-auto object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: logoVisible ? 1 : 0, scale: logoVisible ? 1 : 0.8 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
        
        {taglineVisible && (
          <motion.div
            className="text-2xl font-semibold text-black"
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
          >
            Connecting Global Markets Through Quality Agriculture
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FlashPage;
