import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'C#',
    'Java',
    '.NET Core',
    'Spring Boot',
    'Entity Framework Core',
    'Hibernate',
    'Microsoft SQL Server',
    'PostgreSQL',
    'SignalR',
    'RabbitMQ',
    'Redis',
    'Git',
    'GitHub',
    'JIRA',
    'Azure DevOps',
    'Unit Testing',
  ];  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <span className="text-white font-semibold text-lg">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

