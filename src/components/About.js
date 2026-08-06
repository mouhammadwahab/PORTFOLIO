import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { profile } from '../data/profile';
import portraitFull from '../assets/img/portrait-full.png';
import SectionAura from './SectionAura';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const About = () => {
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="about" className="section section--alt about-section">
      <SectionAura variant="light" />
      <div className="container about-container">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="eyebrow">About</span>
          <h2>Builder across mobile, web &amp; AI</h2>
          <p>{profile.summary}</p>
        </motion.div>

        <div className="about-grid about-grid--single">
          <motion.div
            className="about-photo-stage"
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="about-orbit about-orbit--a" />
            <div className="about-orbit about-orbit--b" />
            <motion.div
              ref={cardRef}
              className="about-photo-card"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <div className="about-photo-glow" />
              <img src={portraitFull} alt={`${profile.name} professional portrait`} />
              <div className="about-photo-frame" />
            </motion.div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.h3
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginTop: 0 }}
            >
              {profile.title}
            </motion.h3>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              style={{ color: 'var(--text-muted)' }}
            >
              {profile.subtitle} · {profile.location}
            </motion.p>

            <motion.dl
              className="about-facts glass-panel"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{profile.phone}</dd>
              </div>
              <div>
                <dt>Degree</dt>
                <dd>{profile.degree}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </motion.dl>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              style={{ color: 'var(--text-muted)' }}
            >
              Seeking to bring strong fundamentals in data structures, OOP, and Agile delivery to a
              growing engineering team — comfortable from mobile UI to backend services and multi-agent
              workflow design.
            </motion.p>

            <motion.div
              className="about-interests"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            >
              {profile.interests.map((item) => (
                <motion.span
                  className="chip"
                  key={item}
                  variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
