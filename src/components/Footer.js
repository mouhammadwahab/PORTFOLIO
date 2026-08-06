import React from 'react';
import { profile } from '../data/profile';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} <strong>{profile.name}</strong> — Software Engineer · Mobile &amp; Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;
