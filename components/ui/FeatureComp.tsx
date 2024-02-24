// features.js
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleFeature from './SingleFeature';
const FeatureComp = ({ featuresData }) => {
    return (
      <>
        <section id="features" className="py-16 md:py-20 lg:py-28">
          <div className="container">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Our <span className='text-green-500'>Services</span> 
            </h2> 
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default FeatureComp;
  


