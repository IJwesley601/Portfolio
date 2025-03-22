import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar scrolled={scrolled} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <Skills />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
          <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;