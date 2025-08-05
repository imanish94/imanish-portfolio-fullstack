import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver outstanding results.'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Continuously learning and pushing boundaries to deliver the highest quality solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
  className="text-center mb-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
    About Me
  </h2>
  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
    Full Stack Developer passionate about crafting scalable systems, seamless integrations, and user-first web experiences.
  </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                My development journey began over 6 years ago, sparked by a deep curiosity for how digital products work. That curiosity grew into a career focused on building modern, full-stack applications that solve real-world problems.
              </p>
              <p>
                I've worked across startups and large enterprises, contributing to scalable systems, complex integrations, and high-impact user interfaces. Whether building robust backend APIs or designing smooth front-end experiences, I aim to create software that performs and lasts.
              </p>
              <p>
                Outside of work, I enjoy mentoring developers, exploring new tech stacks, and contributing to open-source projects. I believe that great software is born from collaboration, curiosity, and continuous improvement.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-8">
              {/* Interactive Code Terminal */}
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 ml-4">manish@portfolio:~$</span>
                </div>
                <div className="space-y-2 text-green-400">
                  <div className="flex items-center">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2">npm install success</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2">git commit -m "✨ New feature"</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2">docker build --tag app</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-400">$</span>
                    <span className="ml-2 animate-pulse">npm start</span>
                  </div>
                </div>
                <div className="mt-4 text-gray-300">
                  <div>🚀 Server running on http://localhost:3000</div>
                  <div>📱 React App ready for development</div>
                  <div>⚡ Hot reload enabled</div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="text-2xl">⚛️</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="text-2xl">🚀</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <div className="text-2xl">💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl mb-4">
                <value.icon size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;