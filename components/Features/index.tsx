// features.js
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Features = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Allow animation to repeat on each scroll into view
    });
  }, []);

  const featuresData = [
    {
      id: 1,
      icon: (
        <Image src='/images/services/graphic-design.png' alt="image" width={100} height={100}/>
      ),
      title: "Retrofitting",
      paragraph:
        "Transforming ideas into captivating visual stories.",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/web-development.png' alt="image" width={100} height={100}/>
      ),
      title: "Developing Ev's",
      paragraph:
        "Crafting digital experiences that redefine your online presence",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/cms-development.png' alt="image" width={100} height={100}/>
      ),
      title: "Design Development",
      paragraph:
        "Unlock your website's potential with our custom CMS development",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/app-development.png' alt="image" width={100} height={100}/>
      ),
      title: "Smart System Development",
      paragraph:
        "Crafting innovation one app at a time – trust us for your development journey.",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/ecommerce.png' alt="image" width={100} height={100}/>
      ),
      title: " Development",
      paragraph:
        "Elevate your online business with our tailor-made e-commerce solutions",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/platform-development.png' alt="image" width={100} height={100}/>
      ),
      title: "Platform Development",
      paragraph:
        "Building platforms that elevate your vision to new heights",
    },
  ];

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28" data-aos="fade-down">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-md p-4 dark:border-gray-800 ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex items-center justify-center p-5">
          <div className="mb-10 flex h-[150px] w-[150px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="text-center pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {/* Updated paragraph style */}
          <span className="inline-block bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1 mb-3">
            {paragraph}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Features;
