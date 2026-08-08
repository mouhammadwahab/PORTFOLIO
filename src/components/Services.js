import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import SectionAura from './SectionAura';
import { easeOut, staggerContainer, staggerItem } from '../motion';

const Services = () => {
  return (
    <section id="services" className="section section--dark">
      <SectionAura tone="dark" />
      <div className="container services-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <span className="eyebrow">Services</span>
          <h2>How I can help</h2>
          <p>
            End-to-end product engineering for teams that need mobile, web, AI automation, and reliable
            delivery pipelines.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="service-card"
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: 'rgba(20,184,166,0.45)' }}
            >
              <div className="service-index">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
