import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    {
      category: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'React.js', level: 95, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 90, color: 'bg-gray-800' },
        { name: 'Angular', level: 80, color: 'bg-red-500' },
        { name: 'Redux', level: 85, color: 'bg-purple-600' },
        { name: 'Jest', level: 80, color: 'bg-pink-500' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'NestJS', level: 85, color: 'bg-red-600' },
        { name: 'Koa', level: 75, color: 'bg-blue-400' },
        { name: 'REST APIs', level: 90, color: 'bg-indigo-500' },
        { name: 'PHP (Laravel)', level: 70, color: 'bg-indigo-700' },
        { name: 'WebSocket', level: 80, color: 'bg-teal-500' },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 85, color: 'bg-orange-500' },
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
        { name: 'Sequelize ORM', level: 75, color: 'bg-blue-500' },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'bg-gray-700' },
        { name: 'Bitbucket', level: 85, color: 'bg-blue-800' },
        { name: 'PM2', level: 80, color: 'bg-gray-500' },
        { name: 'Dell Boomi (iPaaS)', level: 70, color: 'bg-green-700' },
        { name: 'Jira', level: 85, color: 'bg-blue-300' },
        { name: 'Storyblok', level: 75, color: 'bg-purple-500' },
        { name: 'Zoho CRM Integration', level: 80, color: 'bg-yellow-600' },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={tech.category}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Also Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Docker', 'AWS', 'Jest', 'Tailwind CSS', 'Material-UI',
              'Webpack', 'Context API', 'GraphQL', 'Express.js',
              'PostgreSQL', 'Redis'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
