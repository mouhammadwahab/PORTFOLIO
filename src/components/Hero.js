import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profileImg from '../assets/img/profile.webp';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'SOFTWARE ENGINEER',
        'MOBILE APP DEVELOPER',
        'FLUTTER DEVELOPER',
        'WEB DEVELOPER',
        
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(27, 47, 69, 0.7), rgba(27, 47, 69, 0.7)), url(${profileImg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
  };

  return (
    <section id="hero" className="hero section" style={heroStyle}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 style={{ color: 'rgb(252, 249, 249)', fontWeight: 900 }}>MUHAMMAD WAHAB</h2>
        <p style={{ color: 'rgb(255, 255, 255)', fontWeight: 900 }}>
          I am <span ref={typedRef}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero; 