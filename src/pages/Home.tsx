import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaPuzzlePiece, FaMagic, FaChevronDown } from 'react-icons/fa';
import Layout from '../components/Layout';
import ExampleSection from '../components/ExampleSection';
import EmailFormExample from '../examples/frontend/EmailForm';
import PasswordFormExample from '../examples/frontend/PasswordForm';
import RegistrationForm from '../examples/frontend/RegistrationForm';
import { 
  emailValidationFrontend, 
  emailValidationBackend,
  passwordValidationFrontend,
  passwordValidationBackend,
  registrationFormFrontend,
  registrationFormBackend
} from '../data/codeSnippets';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// Feature component
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white p-6 rounded-xl shadow-soft border border-secondary-100 hover:shadow-lg transition-shadow"
  >
    <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-secondary-900">{title}</h3>
    <p className="text-secondary-600">{description}</p>
  </motion.div>
);

const Home: React.FC = () => {
  const scrollToExamples = () => {
    document.getElementById('examples-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full inline-flex items-center text-sm font-medium">
              <FaRocket className="mr-2" />
              <span>Ready to use components</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary-900"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Beautiful <span className="text-primary-600">Form Validation</span> for React Apps
          </motion.h1>
          
          <motion.p 
            className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A collection of reusable, customizable form components with real-time validation.
            Copy, download, and integrate them instantly in your projects.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/gauravkhatriweb/react-dynamic-form-validation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-700 transition-colors font-medium"
            >
              Get Started
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToExamples}
              className="bg-white text-primary-600 py-3 px-6 rounded-lg shadow-md hover:bg-primary-50 transition-colors font-medium border border-primary-200"
            >
              View Examples
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={scrollToExamples}
              aria-label="Scroll to examples"
              className="text-secondary-400 hover:text-primary-500 transition-colors"
            >
              <FaChevronDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">
            Why Choose Our Components
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Built with best practices, modern technologies, and developer experience in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<FaShieldAlt size={20} />}
            title="Robust Validation"
            description="Real-time validation with customizable rules for any form field type."
          />
          <Feature 
            icon={<FaPuzzlePiece size={20} />}
            title="Easy Integration"
            description="Copy, paste, and go. Designed to work with your React projects out of the box."
          />
          <Feature 
            icon={<FaMagic size={20} />}
            title="Highly Customizable"
            description="Customize appearance, validation rules, messages, and behavior to fit your needs."
          />
          <Feature 
            icon={<FaRocket size={20} />}
            title="Performance First"
            description="Optimized for speed and efficiency with minimal dependencies and smooth animations."
          />
        </div>
      </motion.section>

      {/* Examples Section */}
      <section id="examples-section" className="py-10">
        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-center text-secondary-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Validation Examples
          </motion.h2>
          <motion.p 
            className="text-center text-secondary-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Below are working examples of form validation components. 
            Try them out, view the code, and download what you need.
          </motion.p>
        </div>

        <div id="examples">
          <ExampleSection
            title="Email Validation"
            description="A form component that validates email addresses with real-time feedback as you type."
            demoComponent={<EmailFormExample />}
            frontendCode={{
              code: emailValidationFrontend,
              language: 'jsx',
              fileName: 'EmailFormExample.jsx'
            }}
            backendCode={{
              code: emailValidationBackend,
              language: 'javascript',
              fileName: 'emailValidation.js'
            }}
          />

          <ExampleSection
            title="Password Validation"
            description="A secure password validation form that checks for length, special characters, and confirms matching passwords."
            demoComponent={<PasswordFormExample />}
            frontendCode={{
              code: passwordValidationFrontend,
              language: 'jsx',
              fileName: 'PasswordFormExample.jsx'
            }}
            backendCode={{
              code: passwordValidationBackend,
              language: 'javascript',
              fileName: 'passwordValidation.js'
            }}
          />

          <ExampleSection
            title="Complete Registration Form"
            description="A full registration form with username, email, and password validation all in one component."
            demoComponent={<RegistrationForm />}
            frontendCode={{
              code: registrationFormFrontend,
              language: 'jsx',
              fileName: 'RegistrationForm.jsx'
            }}
            backendCode={{
              code: registrationFormBackend,
              language: 'javascript',
              fileName: 'registrationValidation.js'
            }}
          />
        </div>

        <motion.div 
          className="mt-20 text-center bg-primary-50 p-8 rounded-xl border border-primary-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary-900">Ready to Level Up Your Forms?</h3>
          <p className="text-secondary-700 mb-6 max-w-2xl mx-auto">
            Get the complete form validation library with examples, documentation, and TypeScript support.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/gauravkhatriweb/react-dynamic-form-validation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Get the Full Package
          </motion.a>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home; 