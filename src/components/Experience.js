import React from 'react';
import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import SectionAura from './SectionAura';

const Experience = () => {
  return (
    <section id="experience" className="section section--dark">
      <SectionAura />
      <div className="container experience-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-meta">
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <ul>
                {job.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet.slice(0, 40)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="education-row">
          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              className="edu-card"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(20,184,166,0.45)' }}
            >
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
              <p>{edu.period}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
