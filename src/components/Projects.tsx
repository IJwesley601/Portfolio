import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Pandemiotech from '../img/Pandemiotech.png'
import StationMeteo from '../img/Capture d’écran (46).png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Pandemiotech',
      description: 'Une plateforme de gestion d\'épidemie complète construite avec React, Node.js et MongoDB. Les fonctionnalités incluent la recherche , le filtrage et la fonctionnalité Map.',
      image: Pandemiotech,
      tags: ['Tailwind CSS','React', 'Node.js', 'MongoDB','OpenStreetMap'],
      codeLink: 'https://github.com/IJwesley601/EMIHACK-3.0.git',
      
      // demoLink: 'https://example.com',
    },
    {
      id: 2,
      title: 'Station Meteo',
      description: 'Une plateforme une station météo  qui mesure les conditions environnementales (température, humidité, pression atmosphérique, qualité de l\'air) et affiche les données en temps réel sur un dashboard web. Le système envoie également des alertes personnalisées (par exemple, en cas de pluie imminente ou de mauvaise qualité de l\'air).',
      image: StationMeteo,
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Express'],
      // demoLink: 'https://example.com',
      codeLink: 'https://github.com/IJwesley601/Projet-IOT',
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that provides current conditions and forecasts for any location. Features include interactive maps, hourly forecasts, and weather alerts.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    //   // demoLink: 'https://example.com',
    //   // codeLink: 'https://github.com',
    // },
    // {
    //   id: 4,
    //   title: 'Social Media Dashboard',
    //   description: 'A dashboard for managing and analyzing social media accounts. Features include post scheduling, analytics, and audience insights.',
    //   image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   tags: ['React', 'Redux', 'Express', 'Social APIs'],
    //   // demoLink: 'https://example.com',
    //   // codeLink: 'https://github.com',
    // },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Projets</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="md:hidden mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="relative h-60 overflow-hidden">
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {projects[currentProject].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[currentProject].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                // href={projects[currentProject].demoLink}
                // href={projects[currentProject]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={16} className="mr-1" /> Demo
              </a>
              <a
                href={projects[currentProject].codeLink}
                // href={projects[currentProject]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={16} className="mr-1" /> Code
              </a>
            </div>
          </div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid (Desktop) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-60 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between">
                    {/* <a
                      // href={project.demoLink}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a> */}
                    <a
                      href={project.codeLink}
                      // href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-300 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-1" /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/IJwesley601"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <Github size={20} className="mr-2" /> View More on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;