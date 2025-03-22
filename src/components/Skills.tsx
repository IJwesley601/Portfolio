import React from 'react';
import { motion } from 'framer-motion';

// Importation des images pour chaque compétence
import html5Icon from '../img/HTML.png';
import css3Icon from '../img/CSS.png';
import javascriptIcon from '../img/JS.png';
import typescriptIcon from '../img/Ts.png';
import reactIcon from '../img/REACT.png';
import tailwindIcon from '../img/TW.png';
import nodeIcon from '../img/Nodes.png';
import gitIcon from '../img/gIT.png';
import Laravel from '../img/Laravel.png'

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML5', level: 95, icon: html5Icon },
    { name: 'CSS3', level: 90, icon: css3Icon },
    { name: 'JavaScript', level: 85, icon: javascriptIcon },
    { name: 'TypeScript', level: 80, icon: typescriptIcon },
    { name: 'React', level: 90, icon: reactIcon },
    { name: 'Tailwind CSS', level: 85, icon: tailwindIcon },
    { name: 'Node.js', level: 75, icon: nodeIcon },
    { name: 'Laravel', level: 75, icon: Laravel },
    { name: 'Git', level: 80, icon: gitIcon },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Compétences</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={skill.icon} // Utilisation de l'image importée pour chaque compétence
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Autres compétences et outils</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Figma','Docker', 'AWS', 'Canva', 'ChatGPT', 'Deepseek'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
