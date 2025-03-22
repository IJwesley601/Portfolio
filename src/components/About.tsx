import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import photo from '../img/ISRAEL.jpg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">A mon propos </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={photo}
                alt="John Wesley"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg hidden md:block"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Développeur Full Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Je suis un développeur frontend passionné avec 2 ans d'expérience dans la création d'applications web modernes et responsives. Je me spécialise dans la conception de sites vitrines et d'applications web en utilisant React, TypeScript, Vue, Node.js (Express.js) et des frameworks CSS modernes comme Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Mon ambition est de concevoir des applications alliant esthétisme et expérience utilisateur optimale. Je m’efforce d’apprendre en continu de nouvelles technologies et techniques pour rester à la pointe du développement web.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Née: 30 Septembre 2001</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Localisation: Fianarantsoa, Madagascar</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Experience: 2 Ans</span>
            </div>
            <div className="flex items-start space-x-2">
          <GraduationCap size={50} className="text-blue-600 dark:text-blue-400 mt-1" />
          <div className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Diplôme :</span> Science Technologique <br />
            <span className="font-medium">Établissement :</span> École de Management et d'Innovation Technologique <br />
            <span className="font-medium">Université :</span> Université de Fianarantsoa
          </div>
        </div>

          </div>

          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 inline-block"
          >
            Contactez-moi
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;