import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import photo from '../img/ISRAEL.jpg';
const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Bonjour, Je suis <span className="text-blue-600 dark:text-blue-400">John Wesley</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Développeur Full Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Je crée de magnifiques sites vitrines et applications web, en utilisant des technologies modernes pour offrir une expérience utilisateur exceptionnelle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Voir mon travail
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors duration-300"
              >
                Contactez-moi
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={photo}
                alt="John Wesley"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </div>
  );
};

export default Hero;