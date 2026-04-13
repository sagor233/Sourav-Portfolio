import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-custom mx-auto px-4 mb-12"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </motion.div>
      <Contact />
    </div>
  );
};

export default ContactPage;