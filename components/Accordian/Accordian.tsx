"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="w-full flex">
      <div className="flex-shrink-0 w-1/3">
        <img src="/images/marketing/whitetheme/Ads.gif" alt="Icon" className="w-full h-auto" />
      </div>
      <div className="w-2/3">
        <div className="mb-2">
          <div className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer">
            <span>Accordion Title</span>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                isOpen === 0 ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => toggleAccordion(0)}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <motion.div
            className="overflow-hidden"
            initial="collapsed"
            animate={isOpen === 0 ? 'open' : 'collapsed'}
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '0.75rem' },
              collapsed: { opacity: 0, height: 0, marginTop: '0' },
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-100 p-4">Accordion content</div>
          </motion.div>
        </div>
        {/* Additional accordion items can be added here */}
      </div>
    </div>
  );
};

export default Accordion;
