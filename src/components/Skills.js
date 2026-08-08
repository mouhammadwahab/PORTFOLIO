import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <SectionAura />
      <div className="container skills-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">Capabilities</span>
          <h2>Technical skills</h2>
          <p>
            A practical stack spanning Flutter, full-stack JavaScript, databases, and AI automation —
            grounded in DSA, OOP, and engineering fundamentals.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.id}
              className="skill-card"
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <motion.span key={item} whileHover={{ scale: 1.05, backgroundColor: 'rgba(20,184,166,0.16)' }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
