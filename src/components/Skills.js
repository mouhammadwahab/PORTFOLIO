import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import SectionAura from './SectionAura';

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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Capabilities</span>
          <h2>Technical skills</h2>
          <p>
            A practical stack spanning Flutter, full-stack JavaScript, databases, and AI automation —
            grounded in DSA, OOP, and engineering fundamentals.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.id}
              className="skill-card"
              initial={{ opacity: 0, y: 24, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
