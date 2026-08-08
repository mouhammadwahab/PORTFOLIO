import React from 'react';

const LIGHT_TOKENS = [
  { text: '</>', className: 'token-a' },
  { text: '{ }', className: 'token-b' },
  { text: '=>', className: 'token-c' },
  { text: 'const', className: 'token-d' },
  { text: 'npm', className: 'token-e' },
  { text: 'git', className: 'token-f' },
  { text: 'API', className: 'token-g' },
  { text: 'async', className: 'token-h' },
];

const DARK_TOKENS = [
  { text: '</>', className: 'token-a' },
  { text: '{ }', className: 'token-b' },
  { text: '=>', className: 'token-c' },
  { text: 'CI/CD', className: 'token-d' },
  { text: 'node', className: 'token-e' },
  { text: 'git', className: 'token-f' },
  { text: 'API', className: 'token-g' },
  { text: 'deploy', className: 'token-h' },
];

/**
 * CSS-only faux-3D coding motifs — reusable across the site.
 * @param {'hero'|'light'|'dark'} variant
 */
const CodeField = ({ variant = 'light' }) => {
  const tokens = variant === 'dark' ? DARK_TOKENS : LIGHT_TOKENS;
  const showWindows = variant === 'hero';

  return (
    <div className={`code-field code-field--${variant}`} aria-hidden="true">
      <div className="code-field-plane">
        {tokens.map((t) => (
          <span key={`${variant}-${t.className}`} className={`code-token ${t.className}`}>
            {t.text}
          </span>
        ))}
        {showWindows && (
          <>
            <div className="code-window code-window--a">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <pre>{`function ship() {\n  return build();\n}`}</pre>
            </div>
            <div className="code-window code-window--b">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <pre>{`deploy --prod\n✓ ready`}</pre>
            </div>
          </>
        )}
        {variant !== 'hero' && (
          <div className={`code-window code-window--section code-window--${variant}`}>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <pre>
              {variant === 'dark'
                ? `pipeline:\n  build → test → ship`
                : `stack.push('ship')\n// keep shipping`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeField;
