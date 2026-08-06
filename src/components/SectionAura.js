import React from 'react';

/** CSS-only section atmosphere — no WebGL. */
const SectionAura = ({ className = '' }) => (
  <div className={`section-aura section-aura--css ${className}`} aria-hidden="true" />
);

export default SectionAura;
