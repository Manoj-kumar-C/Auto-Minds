"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample project data
const projects = [
  {
    id: 1,
    name: 'Sk EnterPrise',
    category: 'Web',
    image: './images/projects/skenterprise.png',
    liveLink: 'https://example.com/project1',
  },
  {
    id: 2,
    name: 'Spyder Templates',
    category: 'Web',
    image: './images/projects/spydertemplates.png',
    liveLink: 'https://spydertemlates.tech',
  },
  {
    id: 3,
    name: 'Spam Alert System',
    category: 'Web',
    image: './images/projects/spam-alert.png',
    liveLink: 'https://spam-dashboard.vercel.app',
  },
  {
    id: 4,
    name: 'Manojkumar C',
    category: 'Editing',
    image: './images/projects/manojkumarc.png',
    liveLink: 'https://example.com/project1',
  },
  {
    id: 5,
    name: 'Crack It',
    category: 'Web',
    image: './images/projects/crackit.png',
    liveLink: 'https://spydertemlates.tech',
  },
  {
    id: 6,
    name: 'Manojkumar C',
    category: 'Marketing',
    image: './images/projects/manojkumarc.png',
    liveLink: 'https://spam-dashboard.vercel.app',
  },
  {
    id: 7,
    name: 'Blog Platform',
    category: 'Web',
    image: './images/projects/blog.png',
    liveLink: 'https://fresh-spar-blog.vercel.app/',
  },
  {
    id: 8,
    name: 'Blog App',
    category: 'Web',
    image: './images/projects/blog-app.png',
    liveLink: 'https://manojkumar-s-blog.vercel.app/',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = category => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="border-bg-color-gray container mx-auto rounded py-8">
      <div className="mb-8 flex flex-wrap justify-center space-x-4">
        {["All", "Web", "App", "Marketing", "Editing"].map((category) => (
          <motion.button
            key={category}
            className="btn m-1 rounded p-2 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-white dark:text-blue-400"
            onClick={() => filterProjects(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="overflow-hidden rounded-3xl bg-white shadow-md"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-48 w-full object-cover rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex items-center justify-between p-4">
              <h3 className="mb-2 text-lg font-semibold dark:text-dark">{project.name}</h3>
              <a
                href={project.liveLink}
                className="btn-primary text-dark dark:text-dark transition duration-300 ease-in-out hover:bg-gray-600 p-3 rounded hover:text-blue-400 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
