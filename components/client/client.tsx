"use client"
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// Assuming ScrollTrigger does not have type definitions available,
// you can treat it as `any` type to bypass TypeScript's strict type checking.
const ScrollTriggerAny = ScrollTrigger as any;

const ClientComponent: React.FC = () => {
  const [CounterOn, setCounterOn] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center space-x-16 p-10 bg-gray-100 dark:bg-dark">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white"><b>Satisfied Clients</b></h2>
        <p className="text-6xl font-bold text-blue-600 my-4 transition duration-1000 ease-in-out">
          {/* Use ScrollTriggerAny with onEnter and onExit props */}
          <ScrollTriggerAny
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)} // Reset CounterOn when the component exits the viewport
          >
            {/* Conditionally render CountUp based on CounterOn state */}
            {CounterOn && <CountUp start={0} end={2} duration={5} redraw={true} />} +
          </ScrollTriggerAny>
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white"><b>Projects Done</b></h2>
        <p className="text-6xl font-bold text-blue-600 my-4 transition duration-1000 ease-in-out">
        <ScrollTriggerAny
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)} // Reset CounterOn when the component exits the viewport
          >
            {/* Conditionally render CountUp based on CounterOn state */}
            {CounterOn && <CountUp start={0} end={3} duration={5} redraw={true} />} +
          </ScrollTriggerAny>
        </p>
      </div>
    </div>
  );
};

export default ClientComponent;
