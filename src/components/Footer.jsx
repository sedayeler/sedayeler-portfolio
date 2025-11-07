import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialLinks = [
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/in/sedayeler',
      label: 'LinkedIn',
    },
    {
      icon: faGithub,
      url: 'https://github.com/sedayeler',
      label: 'GitHub',
    }    
  ];

  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Seda Yeler. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#A855F7' }}
                className="text-white hover:text-purple-500 transition-colors duration-300"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

