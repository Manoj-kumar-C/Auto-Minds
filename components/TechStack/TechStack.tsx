// features.js
import React from 'react';
import { SiReact, SiMongodb, SiNodedotjs, SiNextdotjs, SiWordpress, SiExpress, SiNginx, SiAmazonaws, SiMongoose, SiMysql, SiAndroid, SiPython, SiDocker, SiKubernetes, SiJest, SiCypress } from 'react-icons/si'; // Import icons from react-icons

const techStacks = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' }, // Original color for React
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#8CC84B' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#61AAFF' }, // Original color for Next.js
  { name: 'WordPress', icon: <SiWordpress />, color: '#21759b' }, // Original color for WordPress
  { name: 'Express.js', icon: <SiExpress />, color: 'purple' },
  { name: 'Nginx', icon: <SiNginx />, color: 'green' },
  { name: 'AWS', icon: <SiAmazonaws />, color: 'orange' },
  { name: 'Mongoose', icon: <SiMongoose />, color: 'red' },
  { name: 'MySQL', icon: <SiMysql />, color: 'orange' },
  { name: 'Android', icon: <SiAndroid />, color: 'green' },
  { name: 'Python', icon: <SiPython />, color: '#306998' }, // Original color for Python
  { name: 'Docker', icon: <SiDocker />, color: '#61AAFF' },
  { name: 'Jest', icon: <SiJest />, color: '#99425B' }, // Original color for Jest
  { name: 'Cypress', icon: <SiCypress />, color: 'green' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#61AAFF' },
  // Add more tech stacks as needed
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 md:py-20 lg:py-28" data-aos="fade-down">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
          {techStacks.map((stack, index) => (
            <TechStackButton key={index} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackButton = ({ stack }) => {
  const { name, icon, color } = stack;
  return (
    <div className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl shadow-lg p-4 dark:border-gray-700">
      {React.cloneElement(icon, { size: 64, color: color, className: 'mb-2' })}
      <span className="text-center">{name}</span>
    </div>
  );
};

export default TechStack;
