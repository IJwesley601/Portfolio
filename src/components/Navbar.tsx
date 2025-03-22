import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react'; // Importez l'icône Download
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import logo from '../img/logo.png';
import CV from '../doc/ISRAEL CV.pdf'

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadCV = () => {
    // Remplacez 'path/to/your/cv.pdf' par le chemin réel de votre fichier CV
    const cvUrl = CV;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'ISRAEL CV.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: 'Acceuil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="logo" 
              className="w-15 h-10 rounded-[3px] shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Bouton de téléchargement du CV */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Download CV"
            >
              <span className="mr-2">CV</span> {/* Texte "CV" à côté de l'icône */}
              <Download size={20} />
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Bouton de téléchargement du CV pour mobile */}
            <button
              onClick={handleDownloadCV}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Download CV"
            >
              <Download size={20} />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4 pb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;