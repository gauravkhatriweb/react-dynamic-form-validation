import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-4 text-secondary-900' 
          : 'bg-gradient-to-r from-primary-700 to-primary-800 text-white py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mr-3"
            >
              <FaCode className="text-3xl text-primary-400" />
            </motion.div>
            <motion.div>
              <motion.h1 
                className={`text-2xl md:text-3xl font-bold ${isScrolled ? 'text-primary-700' : 'text-white'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                React Form Validator
              </motion.h1>
              <motion.p 
                className={`text-sm ${isScrolled ? 'text-secondary-600' : 'text-primary-100'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Beautiful, reusable validation components
              </motion.p>
            </motion.div>
          </div>
          <div className="flex space-x-3">
            <motion.a 
              href="#examples"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`px-4 py-2 rounded-md hidden md:block ${
                isScrolled 
                  ? 'text-secondary-600 hover:text-primary-700' 
                  : 'text-primary-100 hover:text-white'
              }`}
            >
              Examples
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={`px-4 py-2 rounded-md hidden md:block ${
                isScrolled 
                  ? 'text-secondary-600 hover:text-primary-700' 
                  : 'text-primary-100 hover:text-white'
              }`}
            >
              Documentation
            </motion.a>
            <motion.a 
              href="https://github.com/gauravkhatriweb/react-dynamic-form-validation" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-lg ${
                isScrolled 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                  : 'bg-white text-primary-700 hover:bg-primary-50'
              } transition-colors shadow-md`}
            >
              <FaGithub className="mr-2" />
              <span className="hidden sm:inline">GitHub</span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 