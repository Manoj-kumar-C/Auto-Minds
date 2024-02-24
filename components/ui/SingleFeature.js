// SingleFeature.js
import React from 'react';

const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-md p-4 dark:border-gray-800 ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex items-center justify-center p-5">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
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

export default SingleFeature;
