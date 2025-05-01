import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-[70px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-secondary-800"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-gradient-to-tr from-secondary-900 to-secondary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-primary-500 pb-2 inline-block">
                React Form Validator
              </h3>
              <p className="text-secondary-300 mb-4">
                A collection of reusable form components with real-time validation for React projects.
                Easy to integrate, customize, and extend.
              </p>
              <div className="flex items-center text-secondary-400">
                <span>Created with</span>
                <FaHeart className="text-red-500 mx-2" size={14} />
                <span>by</span>
                <a 
                  href="https://github.com/gauravkhatriweb" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 ml-2 transition-colors"
                >
                  Gaurav Khatri
                </a>
              </div>
            </div>

            {/* Column 2 - Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-primary-500 pb-2 inline-block">
                Resources
              </h3>
              <ul className="space-y-2 text-secondary-300">
                <motion.li whileHover={{ x: 3 }} className="transition-colors">
                  <a href="#examples" className="hover:text-primary-400">Examples</a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} className="transition-colors">
                  <a href="#" className="hover:text-primary-400">Documentation</a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} className="transition-colors">
                  <a 
                    href="https://github.com/gauravkhatriweb/react-dynamic-form-validation" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400"
                  >
                    GitHub Repository
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 3 }} className="transition-colors">
                  <a href="#" className="hover:text-primary-400">Report Issue</a>
                </motion.li>
              </ul>
            </div>

            {/* Column 3 - Connect */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-primary-500 pb-2 inline-block">
                Connect
              </h3>
              <div className="flex space-x-3 mb-4">
                <motion.a 
                  href="https://github.com/gauravkhatriweb" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-700 hover:bg-primary-700 p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="mailto:gauravkhatriweb@gmail.com" 
                  className="bg-secondary-700 hover:bg-primary-700 p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-700 hover:bg-primary-700 p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-700 hover:bg-primary-700 p-3 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
              <p className="text-secondary-400 text-sm">
                Have questions or suggestions? Feel free to reach out!
              </p>
              <a 
                href="mailto:gauravkhatriweb@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
              >
                gauravkhatriweb@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-secondary-700 mt-8 pt-6 text-center text-secondary-400 text-sm">
            <p>&copy; {currentYear} React Form Validator. All rights reserved.</p>
            <p className="mt-1">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 