import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { BiDownload } from 'react-icons/bi';
import { profile } from '../data/profile';
import portraitBust from '../assets/img/portrait-bust-clear.png';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mqMotion.matches);
    sync();
    mqMotion.addEventListener('change', sync);
    return () => mqMotion.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="hero" className="hero">
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-roles" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="brand">
            Muhammad <em>Wahab</em>
          </p>
          <h1>
            {profile.title} — {profile.subtitle}
          </h1>
          <p className="lead">
            Shipping production Flutter &amp; full-stack JavaScript products — from Firebase mobile apps
            to multi-agent AI platforms — with a builder&apos;s mindset.
          </p>
          <div className="hero-ctas">
            <Link to="projects" smooth offset={-70} duration={500} className="btn btn-primary">
              View Work
            </Link>
            <a className="btn btn-ghost" href={profile.cvUrl} download>
              <BiDownload /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="hero-portrait-ring" aria-hidden="true" />
          <img
            src={portraitBust}
            alt={`${profile.name} professional portrait`}
            width={380}
            height={570}
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Hero;
