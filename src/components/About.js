import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import portraitFull from '../assets/img/portrait-full.jpg';
import SectionAura from './SectionAura';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
};

const About = () => {
  return (
    <section id="about" className="section section--alt about-section">
      <SectionAura />
      <div className="container about-container">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="eyebrow">About</span>
          <h2>Builder across mobile, web &amp; AI</h2>
          <p>{profile.summary}</p>
        </motion.div>

        <div className="about-grid about-grid--single">
          <motion.div className="about-photo-stage" {...fadeUp}>
            <div className="about-orbit about-orbit--a" />
            <div className="about-orbit about-orbit--b" />
            <div className="about-photo-card">
              <div className="about-photo-glow" />
              <img
                src={portraitFull}
                alt={`${profile.name} professional portrait`}
                width={340}
                height={453}
                loading="lazy"
                decoding="async"
              />
              <div className="about-photo-frame" />
            </div>
          </motion.div>

          <motion.div className="about-copy" {...fadeUp}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginTop: 0 }}>
              {profile.title}
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              {profile.subtitle} · {profile.location}
            </p>

            <dl className="about-facts glass-panel">
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
            </dl>

            <p style={{ color: 'var(--text-muted)' }}>
              Seeking to bring strong fundamentals in data structures, OOP, and Agile delivery to a
              growing engineering team — comfortable from mobile UI to backend services and multi-agent
              workflow design.
            </p>

            <div className="about-interests">
              {profile.interests.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
