import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const pillars = [
  {
    num: '01',
    title: 'Mobile products',
    text: 'Flutter apps with Firebase-backed data, clear UX flows, and production-ready release habits.',
  },
  {
    num: '02',
    title: 'Full-stack web',
    text: 'React and Next.js frontends with Node services — APIs, auth, and dashboards that stay maintainable.',
  },
  {
    num: '03',
    title: 'AI & delivery',
    text: 'Automation with n8n and multi-agent workflows, plus CI/CD so shipping stays repeatable.',
  },
];

const focusStack = ['Flutter', 'React', 'Next.js', 'Node.js', 'Firebase', 'Supabase', 'n8n'];

const Expertise = () => {
  return (
    <section id="expertise" className="section section--alt expertise-section">
      <SectionAura />
      <div className="expertise-deco" aria-hidden="true">
        <motion.span
          className="expertise-deco-mark"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {'</>'}
        </motion.span>
      </div>

      <div className="container expertise-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">Expertise</span>
          <h2>Engineering that ships</h2>
          <p>
            End-to-end product work across mobile, web, and automation — from interface to backend to
            deploy.
          </p>
        </motion.div>

        <motion.div
          className="expertise-pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {pillars.map((item) => (
            <motion.article key={item.num} className="expertise-pillar" variants={staggerItem}>
              <span className="expertise-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="expertise-body"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <div className="expertise-focus">
            <span className="expertise-label">Focus stack</span>
            <motion.div
              className="expertise-tags"
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
            className="expertise-note"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Seeking to bring strong fundamentals in data structures, OOP, and Agile delivery to a
            growing engineering team — comfortable from mobile UI to backend services and multi-agent
            workflow design.
          </motion.blockquote>

          <div className="expertise-interests">
            <span className="expertise-label">Interests</span>
            <motion.div
              className="expertise-interests-row"
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

export default Expertise;
