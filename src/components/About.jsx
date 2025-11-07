import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About Me
          </h2>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left">
            I graduated in Computer Engineering from Eskişehir Technical University.
            I’m experienced in C#, Java, .NET Core, and Spring Boot technologies.
            I focus on developing scalable and efficient systems while integrating AI-driven solutions into software to enhance processes and product intelligence.
            I enjoy solving complex problems and contributing to impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

