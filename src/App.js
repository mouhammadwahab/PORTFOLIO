import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronUp } from 'react-icons/bi';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Services />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              className="scroll-top active"
              onClick={toTop}
              aria-label="Scroll to top"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <BiChevronUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
