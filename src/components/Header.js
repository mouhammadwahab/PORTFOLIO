import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  BiHome, 
  BiUser, 
  BiFile, 
  BiImages, 
  BiServer, 
  BiEnvelope,
  BiMenu
} from 'react-icons/bi';
import { 
  FaFacebook, 
  FaInstagram, 
  FaGithub, 
  FaLinkedin,
  FaWhatsapp 
} from 'react-icons/fa';
import profileImg from '../assets/img/Profile2.jpg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1199) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className={`header ${isActive ? 'header-active' : ''}`}>
      <div className="header-toggle d-xl-none" onClick={toggleMenu}>
        <BiMenu />
      </div>

      <div className="profile-img">
        <img src={profileImg} alt="Profile" />
      </div>

      <Link to="hero" className="logo d-flex align-items-center justify-content-center">
        <img src={profileImg} alt="Logo" />
        <h1 className="sitename">MUHAMMAD WAHAB</h1>
      </Link>

      <div className="social-links text-center">
        <a href="https://wa.link/kicot7" className="whatsapp" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/worwahabonrock" className="facebook" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/mouhammad_wahab/" className="instagram" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/WahabOnRock" className="github" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-wahab-b88005330/" className="linkedin" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <nav id="navmenu" className={`navmenu ${isActive ? 'navmenu-active' : ''}`} style={{ cursor: 'default' }}>
        <ul>
          <li>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              activeClass="active"
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiHome className="navicon" /> Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiUser className="navicon" /> About
            </Link>
          </li>
          <li>
            <Link 
              to="resume" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiFile className="navicon" /> Resume
            </Link>
          </li>
          <li>
            <Link 
              to="portfolio" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiImages className="navicon" /> Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="services" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiServer className="navicon" /> Services
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setIsActive(false)}
              style={{ cursor: 'pointer' }}
            >
              <BiEnvelope className="navicon" /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 