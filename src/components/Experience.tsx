import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
  {
    id: 1,
    company: 'Dotsquares Ltd.',
    position: 'Senior Programmer Analyst',
    location: 'Jaipur, India',
    duration: 'June 2021 – Present',
    description:
      'Leading a team of developers on enterprise web applications and integration projects, focusing on scalable front-end architecture and third-party system integrations.',
    achievements: [
      'Architected and developed frontend solutions using React.js and Next.js',
      'Built backend APIs and services using Node.js (Express) and Next.js API routes',
      'Integrated Zoho CRM and TigerBay using APIs and Dell Boomi (iPaaS)',
      'Led daily scrums, sprint planning, retrospectives, and client discussions',
      'Mentored junior developers and conducted regular code reviews'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      'Dell Boomi',
      'Zoho CRM',
      'TigerBay'
    ]
  },
  {
    id: 2,
    company: 'Taggbox',
    position: 'React Developer',
    location: 'Jaipur, India',
    duration: 'January 2021 – May 2021',
    description:
      'Worked on a user-generated content platform by building and maintaining dynamic, reusable UI components.',
    achievements: [
      'Developed modular UI components using React.js and Redux',
      'Collaborated with backend developers to integrate APIs and manage application state effectively',
      'Contributed to improving frontend performance and consistency'
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'REST APIs']
  },
  {
    id: 3,
    company: 'Askillt',
    position: 'Web Developer',
    location: 'Jaipur, India',
    duration: 'May 2019 – December 2020',
    description:
      'Built interactive web-based eLearning modules, focusing on responsive UI and engaging user experiences.',
    achievements: [
      'Developed quiz logic, animations, and dynamic content using JavaScript',
      'Enhanced UI/UX for better learner engagement',
      'Ensured cross-browser compatibility and accessibility standards'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery']
  }
];


  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        <Building size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{exp.duration}</span>
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;