"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ConsultComp = ({
  imageSrc,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  subtitleColor2,
  description,
  descriptionColor,
  buttonColor,
  buttonText,
}) => {
  return (
    <section id="consultant" className="py-16 md:py-20 lg:py-28">
      <div className="container flex flex-col md:flex-row items-center justify-center">
        <motion.div
          animate={{
            y: [-20, 20], // Moves the image up and down
          }}
          transition={{
            duration: 3, // Total duration of animation
            repeat: Infinity, // Repeat infinitely
            repeatType: "reverse", // Reverse the animation after each cycle
            repeatDelay: 1 // Delay before repeating
          }} // Set yoyo and repeat options
          className="md:w-1/2"
        >
          <Image src={imageSrc} alt="Consultant" className="mx-auto mb-8 object-cover" width={450} height={450} />
        </motion.div>
        <div className="md:w-1/2 md:ml-8">
          <div className="text-center md:text-left">
            <h2 className={`text-3xl md:text-3xl lg:text-4xl font-bold text-${titleColor} mb-4 dark:text-white`}>
              {title}
            </h2>
            <h3 className={`text-3xl md:text-3xl lg:text-4xl font-bold ${subtitleColor} mb-4 ${subtitleColor2}`}>
              {subtitle}
            </h3>
            <p className={`text-base text-${descriptionColor} dark:text-gray-300 mb-8`}>
              {description}
            </p>
            <a href="https://calendly.com/freshspartechnologies/30min" className={`inline-block ${buttonColor} text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition duration-300 `}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultComp;
