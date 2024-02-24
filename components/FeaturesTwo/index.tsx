// features.js
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const FeaturesTwo = () => {
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
        <Image src='/images/services/marketing/seo.png' alt="image" width={100} height={100}/>
      ),
      title: "Seo Optimization",
      paragraph:
        "Elevate your digital presence with SEO mastery—where algorithms meet artistry, and your website ascends to the top, one optimized click at a time",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/marketing/branding.png' alt="image" width={100} height={100}/>
      ),
      title: "Branding",
      paragraph:
        "Forge a legacy with a brand that resonates—where creativity sparks recognition and every impression is a signature of distinction",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/marketing/page-speed.png' alt="image" width={100} height={100}/>
      ),
      title: "Social Media Marketing",
      paragraph:
        "Turning clicks into connections and likes into loyalty, because in the world of social media, we don't just manage accounts, we build communities",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/marketing/envelope.png' alt="image" width={100} height={100}/>
      ),
      title: "Email Marketing",
      paragraph:
        "Navigating the digital dialogue, we transform emails into experiences, turning every open into an opportunity and every click into a connection that counts",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/marketing/campaign.png' alt="image" width={100} height={100}/>
      ),
      title: "Advertising Campaigns",
      paragraph:
        "Crafting campaigns that speak volumes in a glance. Your brand, our canvas, painted with impact",
    },
    {
      id: 1,
      icon: (
        <Image src='/images/services/marketing/content-marketing.png' alt="image" width={100} height={100}/>
      ),
      title: "Content Marketing",
      paragraph:
        "Elevating brands through strategic storytelling, where every piece of content is a compelling chapter in your success narrative.",
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

export default FeaturesTwo;
