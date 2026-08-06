import React, { Suspense, lazy, useEffect, useState } from 'react';

const AmbientScene = lazy(() => import('./AmbientScene'));

const SectionAura = ({ variant = 'dark', className = '' }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 900px)');
    const sync = () => setEnabled(!mqMotion.matches && !mqMobile.matches);
    sync();
    mqMotion.addEventListener('change', sync);
    mqMobile.addEventListener('change', sync);
    return () => {
      mqMotion.removeEventListener('change', sync);
      mqMobile.removeEventListener('change', sync);
    };
  }, []);

  if (!enabled) {
    return <div className={`section-aura section-aura--css ${className}`} aria-hidden="true" />;
  }

  return (
    <div className={`section-aura ${className}`} aria-hidden="true">
      <Suspense fallback={<div className="section-aura section-aura--css" />}>
        <AmbientScene variant={variant} />
      </Suspense>
    </div>
  );
};

export default SectionAura;
