import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { BiDownload } from 'react-icons/bi';
import { profile } from '../data/profile';
import portraitBust from '../assets/img/portrait-bust.jpg';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [load3d, setLoad3d] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 900px)');
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

  // Defer 3D until after first paint / idle so the page opens fast
  useEffect(() => {
    if (reduceMotion || isMobile) return undefined;
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setLoad3d(true), { timeout: 1800 })
      : null;
    const t = window.setTimeout(() => setLoad3d(true), 1200);
    return () => {
      if (idle && window.cancelIdleCallback) window.cancelIdleCallback(idle);
      window.clearTimeout(t);
    };
  }, [reduceMotion, isMobile]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const show3d = load3d && !reduceMotion && !isMobile;

  return (
    <section id="hero" className="hero">
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-fallback" aria-hidden="true" />

      {show3d && (
        <div className="hero-canvas" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

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
            height={507}
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
