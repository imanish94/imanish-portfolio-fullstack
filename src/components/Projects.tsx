import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import titanImage from '../images/titantravel_co_uk.png';
import blixenImage from '../images/blixentours_dk.png';
import taggboxImage from '../images/taggbox_com.png';
import icreateImage from '../images/icreate_oneills_com.png';
import grayppImage from '../images/grypp_io.png';
import boomiImage from '../images/boomi_com.png';
import catalystImage from '../images/catalystxl_com.png';


const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

 const projects = [
  {
    id: 1,
    title: 'Titan Travel',
    description:
      'Developed booking modules and backend APIs while leading a team of 4 developers. Integrated Zoho CRM and third-party travel systems, ensuring high performance and strong test coverage.',
    image: titanImage,
    technologies: ['React.js', 'Next.js', 'Node.js', 'Zoho CRM', 'Jest'],
    category: 'Full Stack',
    github: 'https://github.com',
    demo: 'https://www.titantravel.co.uk'
  },
  {
    id: 2,
    title: 'Dell Boomi Integration',
    description:
      'Built complex integration flows using Dell Boomi, handling process APIs, SQL feeds, Excel/CSV data parsing, and third-party syncs with Zoho CRM and TigerBay.',
    image: boomiImage,
    technologies: ['Dell Boomi', 'SQL Server', 'Groovy', 'Zoho CRM', 'TigerBay API'],
    category: 'Backend',
    github: 'https://github.com',
    demo: 'https://platform.boomi.com'
  },
  {
    id: 3,
    title: 'Blixen Tours',
    description:
      'Built dynamic user interfaces using Storyblok CMS and developed responsive components with React and Angular. Worked across sprints to meet client deadlines.',
    image: blixenImage,
    technologies: ['React.js', 'Next.js', 'Angular', 'Storyblok CMS', 'Node.js'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://www.blixentours.dk'
  },
  {
    id: 4,
    title: 'Cardware',
    description:
      'Created UI modules and integrated GraphQL APIs for an e-commerce platform. Maintained high-quality code using Redux-Saga, Gatsby, and ESLint.',
    image: catalystImage,
    technologies: ['React.js', 'Redux', 'Redux-Saga', 'GraphQL', 'Gatsby'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://catalystxl.com'
  },
  {
    id: 5,
    title: 'Graypp',
    description:
      'Developed backend services and APIs using NestJS and Node.js. Wrote unit tests using Jest and managed cloud assets with AWS S3.',
    image: grayppImage,
    technologies: ['NestJS', 'Node.js', 'Express', 'TypeScript', 'S3', 'Jest'],
    category: 'Backend',
    github: 'https://github.com',
    demo: 'https://graypp.io'
  },
  {
    id: 6,
    title: 'Taggbox',
    description:
      'Developed real-time UGC (user-generated content) components using React and WebSocket (Socket.IO). Worked with a PHP backend for API integration.',
    image: taggboxImage,
    technologies: ['React.js', 'Redux', 'Socket.IO', 'PHP'],
    category: 'Full Stack',
    github: 'https://github.com',
    demo: 'https://taggbox.com'
  },
  {
    id: 7,
    title: "O'Neills iCreate",
    description:
      'Built a product personalization interface for custom sportswear. Used React class components and Redux with a PHP/MySQL backend.',
    image: icreateImage,
    technologies: ['React.js', 'Redux', 'PHP', 'MySQL'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://icreate.oneills.com'
  }
];


  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and contributions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter size={16} className="inline mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;