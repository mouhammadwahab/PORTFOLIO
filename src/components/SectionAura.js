import React from 'react';
import CodeField from './CodeField';

/** Section atmosphere — CSS glow + light coding motifs (no WebGL). */
const SectionAura = ({ className = '', tone = 'light' }) => (
  <>
    <div className={`section-aura section-aura--css ${className}`} aria-hidden="true" />
    <CodeField variant={tone === 'dark' ? 'dark' : 'light'} />
  </>
);

export default SectionAura;
