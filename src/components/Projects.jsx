import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'Yorum Satırı',
      description:
        'A blog platform where users can create posts, comment, and quickly explore content through AI-powered summarization.',
      technologies: [
        'ASP.NET Core MVC',
        'PostgreSQL',
        'Entity Framework Core',
        'CQRS',
        'Gemini API',
        'CI/CD',
        'Azure Web App',
        'Render'
      ],
      githubUrl: 'https://github.com/sedayeler/blog-project', 
      demoUrl: 'https://yorumsatiri-emahbnc2hnc3bybz.westeurope-01.azurewebsites.net/',
    },
    {
      title: 'E-Commerce',
      description:
        'A shopping platform where users can browse products, add them to their cart, place orders, and admins can easily manage the store’s products.',
      technologies: [
        'ASP.NET Core Web API',
        'PostgreSQL',
        'Entity Framework Core',
        'CQRS',
        'JWT Authentication',
        'SignalR',
      ],
      githubUrl: 'https://github.com/sedayeler/e-commerce-api',
    },
    {
      title: 'Banking System',
      description:
        'A banking application that lets users easily manage their accounts and cards while performing money transfers and purchases.',
      technologies: [
        'ASP.NET Core Web API',
        'PostgreSQL',
        'Entity Framework Core',
        'Fluent Validation',
      ],
      githubUrl: 'https://github.com/sedayeler/banking-system',
    },
  ];
  
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  View on GitHub
                </motion.a>

                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

