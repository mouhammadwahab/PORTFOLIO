import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';
import portraitBust from '../assets/img/portrait-bust.png';
import { easeOut } from '../motion';
import HeroCodeField from './CodeField';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [allow3d, setAllow3d] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqWide = window.matchMedia('(min-width: 861px)');
    const sync = () => {
      setReduceMotion(mqMotion.matches);
      setAllow3d(!mqMotion.matches && mqWide.matches);
    };
    sync();
    mqMotion.addEventListener('change', sync);
    mqWide.addEventListener('change', sync);
    return () => {
      mqMotion.removeEventListener('change', sync);
      mqWide.removeEventListener('change', sync);
    };
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
      <motion.div
        className="hero-grid"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2 }}
      />
      <HeroCodeField variant="hero" />
      {allow3d && (
        <div className="hero-scene" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          <motion.div
            className="hero-roles"
            aria-live="polite"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } } }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p
            className="brand"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } } }}
          >
            Muhammad <em>Wahab</em>
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
          >
            {profile.title} — {profile.subtitle}
          </motion.h1>
          <motion.p
            className="lead"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
          >
            Shipping production Flutter &amp; full-stack JavaScript products — from Firebase mobile apps
            to multi-agent AI platforms — with a builder&apos;s mindset.
          </motion.p>
          <motion.div
            className="hero-ctas"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } } }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="projects" smooth offset={-70} duration={500} className="btn btn-primary hero-cta-main">
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.35 } }}
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

      <motion.div
        className="hero-scroll-hint"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <span />
      </motion.div>
    </section>
  );
};

export default Hero;
