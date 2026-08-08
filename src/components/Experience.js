import React from 'react';
import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const Experience = () => {
  return (
    <section id="experience" className="section section--dark">
      <SectionAura tone="dark" />
      <div className="container experience-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">Experience</span>
          <h2>Professional journey</h2>
          <p>
            Production delivery across mobile and web — architecture through client handoff, with CI/CD
            and Agile collaboration.
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((job) => (
            <motion.article
              key={job.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <div className="timeline-meta">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {job.bullets.map((bullet) => (
                  <motion.li key={bullet.slice(0, 40)} variants={staggerItem}>
                    {bullet}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="education-row"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {profile.education.map((edu) => (
            <motion.div
              key={edu.school}
              className="edu-card"
              variants={staggerItem}
              whileHover={{ y: -5, borderColor: 'rgba(20,184,166,0.45)' }}
            >
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <p>{edu.period}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="experience-actions"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <motion.a
            className="btn btn-ghost-light"
            href={profile.cvUrl}
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <BiDownload /> Download full CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
