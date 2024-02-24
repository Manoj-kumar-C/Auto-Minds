"use client"
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
      <button
        className={`w-full flex items-center justify-between text-left py-4 px-6 text-lg font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 ${
          isOpen ? 'rounded-t-lg' : ''
        }`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-6 bg-white dark:bg-gray-900">
          <div className="text-base font-normal leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
