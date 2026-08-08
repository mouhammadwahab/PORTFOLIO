import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import CodeField from './CodeField';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CodeField variant="dark" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p>
          © {year} <strong>{profile.name}</strong> — Software Engineer · Mobile &amp; Web
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
