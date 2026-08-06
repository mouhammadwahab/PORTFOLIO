import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { BiDownload } from 'react-icons/bi';
import { profile } from '../data/profile';
import portraitBust from '../assets/img/portrait-bust.png';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 768px)');
    const sync = () => {
      setReduceMotion(mqMotion.matches);
      setIsMobile(mqMobile.matches);
    };
    sync();
    mqMotion.addEventListener('change', sync);
    mqMobile.addEventListener('change', sync);
    return () => {
      mqMotion.removeEventListener('change', sync);
      mqMobile.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const show3d = !reduceMotion && !isMobile;

  return (
    <section id="hero" className="hero">
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />

      {show3d ? (
        <div className="hero-canvas" aria-hidden="true">
          <Suspense fallback={<div className="hero-fallback" />}>
            <HeroScene />
          </Suspense>
        </div>
      ) : (
        <div className="hero-fallback" aria-hidden="true" />
      )}

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-roles" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                transition={{ duration: 0.4 }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.p
            className="brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Muhammad <em>Wahab</em>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            {profile.title} — {profile.subtitle}
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Shipping production Flutter &amp; full-stack JavaScript products — from Firebase mobile apps
            to multi-agent AI platforms — with a builder&apos;s mindset.
          </motion.p>
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="projects" smooth offset={-70} duration={550} className="btn btn-primary">
                View Work
              </Link>
            </motion.div>
            <motion.a
              className="btn btn-ghost"
              href={profile.cvUrl}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <BiDownload /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, rotateY: 4, transition: { duration: 0.35 } }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="hero-portrait-ring" aria-hidden="true" />
          <img src={portraitBust} alt={`${profile.name} professional portrait`} />
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </section>
  );
};

export default Hero;
