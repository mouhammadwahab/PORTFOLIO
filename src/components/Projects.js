import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';
import { projects, projectFilters } from '../data/projects';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section section--alt">
      <SectionAura />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">Portfolio</span>
          <h2>Selected projects</h2>
          <p>
            Twelve shipped and personal builds across Flutter, React, Next.js, Java, and AI automation —
            from solar monitoring to multi-agent sales platforms.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectFilters.map((item) => (
            <motion.button
              key={item}
              type="button"
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                layout
                type="button"
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.28), ease: easeOut }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(project)}
              >
                <div className="project-card-media">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                </div>
                <div className="project-card-body">
                  <div className="cat">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-row">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
            >
              <img src={active.image} alt={active.title} />
              <div className="project-modal-body">
                <button type="button" className="modal-close" onClick={() => setActive(null)} aria-label="Close">
                  <BiX />
                </button>
                <div
                  className="cat"
                  style={{
                    color: 'var(--teal-deep)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {active.category}
                </div>
                <h3>{active.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{active.description}</p>
                <div className="stack-row" style={{ marginTop: '1rem' }}>
                  {active.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
