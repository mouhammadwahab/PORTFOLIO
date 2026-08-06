import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BiMenu, BiX, BiDownload } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/profile';

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'services', label: 'Services' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="navbar-inner">
        <Link to="hero" smooth duration={500} className="nav-brand" onClick={close}>
          Muhammad <span>Wahab</span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={500}
                className="nav-link"
                activeClass="active"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="nav-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <a className="btn btn-primary nav-cv" href={profile.cvUrl} download>
            <BiDownload /> CV
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      <div className="nav-drawer">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy
            smooth
            offset={-70}
            duration={500}
            className="nav-link"
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
        <div className="nav-drawer-actions">
          <a className="btn btn-primary" href={profile.cvUrl} download onClick={close}>
            <BiDownload /> Download CV
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
