import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeSnippet from '../CodeSnippet';
import { FaCode, FaServer, FaPlay, FaFileDownload } from 'react-icons/fa';

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, icon, isActive, onClick }) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    className={`px-4 py-3 font-medium rounded-t-lg transition-all flex items-center space-x-2 ${
      isActive 
        ? 'bg-white text-primary-700 border-t-2 border-x-2 border-primary-500 shadow-sm' 
        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200 border-b-2 border-secondary-200'
    }`}
    onClick={onClick}
  >
    <span className={isActive ? 'text-primary-600' : 'text-secondary-500'}>
      {icon}
    </span>
    <span>{label}</span>
  </motion.button>
);

interface ExampleSectionProps {
  title: string;
  description: string;
  demoComponent: React.ReactNode;
  frontendCode: {
    code: string;
    language: string;
    fileName: string;
  };
  backendCode?: {
    code: string;
    language: string;
    fileName: string;
  };
}

const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  description,
  demoComponent,
  frontendCode,
  backendCode,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'frontend' | 'backend'>('demo');

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-card p-6 mb-12"
      id={title.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className="border-l-4 border-primary-500 pl-4 mb-6">
        <motion.h2 
          className="text-2xl font-bold mb-2 text-secondary-900"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-secondary-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-1 border-b border-secondary-200">
          <Tab 
            label="Live Demo" 
            icon={<FaPlay size={14} />}
            isActive={activeTab === 'demo'} 
            onClick={() => setActiveTab('demo')}
          />
          <Tab 
            label="Frontend Code" 
            icon={<FaCode size={14} />}
            isActive={activeTab === 'frontend'} 
            onClick={() => setActiveTab('frontend')}
          />
          {backendCode && (
            <Tab 
              label="Backend Code" 
              icon={<FaServer size={14} />}
              isActive={activeTab === 'backend'} 
              onClick={() => setActiveTab('backend')}
            />
          )}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'demo' && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 border border-secondary-200 rounded-md mt-4 bg-secondary-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-secondary-800">Try it out:</h3>
                <div className="flex items-center text-xs text-secondary-500">
                  <span>Component Preview</span>
                </div>
              </div>
              {demoComponent}
            </motion.div>
          )}
          
          {activeTab === 'frontend' && (
            <motion.div
              key="frontend"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-secondary-800">Frontend Implementation:</h3>
                <motion.a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(frontendCode.code)}`}
                  download={frontendCode.fileName}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-xs bg-primary-600 text-white py-1 px-3 rounded transition-colors hover:bg-primary-700"
                >
                  <FaFileDownload size={12} />
                  <span>Download Component</span>
                </motion.a>
              </div>
              <CodeSnippet
                code={frontendCode.code}
                language={frontendCode.language}
                fileName={frontendCode.fileName}
                title="React Component Code"
              />
            </motion.div>
          )}
          
          {activeTab === 'backend' && backendCode && (
            <motion.div
              key="backend"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-secondary-800">Backend Implementation:</h3>
                <motion.a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(backendCode.code)}`}
                  download={backendCode.fileName}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-xs bg-primary-600 text-white py-1 px-3 rounded transition-colors hover:bg-primary-700"
                >
                  <FaFileDownload size={12} />
                  <span>Download Validator</span>
                </motion.a>
              </div>
              <CodeSnippet
                code={backendCode.code}
                language={backendCode.language}
                fileName={backendCode.fileName}
                title="Server-Side Validation"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ExampleSection; 