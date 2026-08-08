import React from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiPhone, BiMap, BiAward } from 'react-icons/bi';
import { profile } from '../data/profile';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const highlights = [
  { value: 'Full-stack', label: 'Flutter · React · Node' },
  { value: 'AI + CI/CD', label: 'Automation & delivery' },
];

const focusStack = ['Flutter', 'React', 'Next.js', 'Node.js', 'Firebase', 'Supabase', 'n8n'];

const About = () => {
  return (
    <section id="about" className="section section--alt about-section">
      <SectionAura />
      <div className="about-deco" aria-hidden="true">
        <motion.span
          className="about-deco-mark"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {'</>'}
        </motion.span>
        <span className="about-deco-orb about-deco-orb--a" />
        <span className="about-deco-orb about-deco-orb--b" />
      </div>

      <div className="container about-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">About</span>
          <h2>Builder across mobile, web &amp; AI</h2>
          <p>{profile.summary}</p>
        </motion.div>

        <motion.div
          className="about-highlights"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((item) => (
            <motion.div className="about-highlight" key={item.label} variants={staggerItem} whileHover={{ y: -4 }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="about-body"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <div className="about-intro">
            <h3>{profile.title}</h3>
            <p>
              {profile.subtitle} · {profile.location}
            </p>
          </div>

          <motion.dl
            className="about-facts glass-panel"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="about-fact" variants={staggerItem}>
              <span className="about-fact-icon" aria-hidden="true">
                <BiEnvelope />
              </span>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </motion.div>
            <motion.div className="about-fact" variants={staggerItem}>
              <span className="about-fact-icon" aria-hidden="true">
                <BiPhone />
              </span>
              <div>
                <dt>Phone</dt>
                <dd>{profile.phone}</dd>
              </div>
            </motion.div>
            <motion.div className="about-fact" variants={staggerItem}>
              <span className="about-fact-icon" aria-hidden="true">
                <BiAward />
              </span>
              <div>
                <dt>Degree</dt>
                <dd>{profile.degree}</dd>
              </div>
            </motion.div>
            <motion.div className="about-fact" variants={staggerItem}>
              <span className="about-fact-icon" aria-hidden="true">
                <BiMap />
              </span>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </motion.div>
          </motion.dl>

          <div className="about-focus">
            <span className="about-focus-label">Focus stack</span>
            <motion.div
              className="about-focus-tags"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {focusStack.map((tech) => (
                <motion.span key={tech} variants={staggerItem} whileHover={{ y: -2, scale: 1.04 }}>
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.blockquote
            className="about-note"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Seeking to bring strong fundamentals in data structures, OOP, and Agile delivery to a
            growing engineering team — comfortable from mobile UI to backend services and multi-agent
            workflow design.
          </motion.blockquote>

          <div className="about-interests">
            <span className="about-focus-label">Interests</span>
            <motion.div
              className="about-interests-row"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {profile.interests.map((item) => (
                <motion.span className="chip" key={item} variants={staggerItem} whileHover={{ y: -3 }}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
