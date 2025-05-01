import React, { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { saveAs } from 'file-saver';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaCopy, FaCode, FaExpand, FaCompress, FaClipboardCheck } from 'react-icons/fa';

interface CodeSnippetProps {
  code: string;
  language: string;
  fileName: string;
  title?: string;
}

const languageColors: Record<string, string> = {
  jsx: 'bg-blue-500',
  tsx: 'bg-blue-600',
  javascript: 'bg-yellow-500',
  typescript: 'bg-blue-400',
  css: 'bg-pink-500',
  html: 'bg-orange-500',
  json: 'bg-green-500',
  default: 'bg-gray-500'
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language,
  fileName,
  title,
}) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const snippetRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, fileName);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded && snippetRef.current) {
      snippetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get language color for badge
  const langColor = languageColors[language] || languageColors.default;

  return (
    <div 
      ref={snippetRef}
      className={`bg-secondary-900 rounded-lg overflow-hidden shadow-2xl mb-6 transition-all duration-300 ${
        expanded ? 'fixed inset-4 z-50 flex flex-col' : 'relative'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 bg-secondary-800">
        <div className="flex items-center">
          <FaCode className="text-primary-400 mr-2" />
          <span className="text-white font-medium">
            {title || `${language.toUpperCase()} Code Snippet`}
          </span>
          <span className={`ml-3 text-xs px-2 py-1 rounded text-white font-medium ${langColor}`}>
            {language}
          </span>
        </div>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary-300 hover:text-white p-2 rounded transition-colors"
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy to clipboard"}
            disabled={copied}
          >
            {copied ? <FaClipboardCheck className="text-green-400" /> : <FaCopy />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary-300 hover:text-white p-2 rounded transition-colors"
            onClick={handleDownload}
            title="Download code"
          >
            <FaDownload />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-secondary-300 hover:text-white p-2 rounded transition-colors"
            onClick={toggleExpand}
            title={expanded ? "Minimize" : "Expand"}
          >
            {expanded ? <FaCompress /> : <FaExpand />}
          </motion.button>
        </div>
      </div>
      <div className={`overflow-x-auto text-sm relative ${expanded ? 'flex-grow' : ''}`}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={true}
          customStyle={{ 
            margin: 0, 
            borderRadius: 0, 
            ...(expanded ? { height: '100%' } : { maxHeight: '400px' }),
            fontSize: '14px'
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
        
        <AnimatePresence>
          {copied && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm"
            >
              Copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {expanded && (
        <div className="bg-secondary-800 px-4 py-2 text-secondary-400 text-xs flex justify-between items-center">
          <span>File: {fileName}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleExpand}
            className="text-secondary-300 hover:text-white px-3 py-1 rounded bg-secondary-700 transition-colors"
          >
            Close
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet; 