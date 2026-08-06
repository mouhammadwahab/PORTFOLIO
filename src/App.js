import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  useEffect(() => {
    const scrollTop = document.querySelector('.scroll-top');
    const handleScroll = () => {
      if (!scrollTop) return;
      if (window.scrollY > 100) scrollTop.classList.add('active');
      else scrollTop.classList.remove('active');
    };
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
        <button type="button" className="scroll-top" onClick={toTop} aria-label="Scroll to top">
          <BiChevronUp size={22} />
        </button>
      </div>
    </Router>
  );
}

export default App;
