'use client';

import React, { useState } from 'react';
import styles from './Playground.module.css';
import CodeBlock from './CodeBlock';

export type ControlOption = {
  name: string;
  type: 'select' | 'boolean' | 'text';
  options?: string[];
  label?: string;
};

interface PlaygroundProps {
  component: (props: any) => React.ReactNode;
  controls: ControlOption[];
  defaultProps: Record<string, any>;
  componentName: string;
}

export default function Playground({
  component: Component,
  controls,
  defaultProps,
  componentName,
}: PlaygroundProps) {
  const [props, setProps] = useState<Record<string, any>>(defaultProps);
  const [activeTab, setActiveTab] = useState('React');

  const updateProp = (name: string, value: any) => {
    setProps((prev) => ({ ...prev, [name]: value }));
  };

  const generateCode = (type: string) => {
    const { children, ...restProps } = props;

    const propString = Object.entries(restProps)
      .filter(([key, val]) => {
        if (val === undefined || val === null) return false;
        if (typeof val === 'boolean' && !val) return false;
        return true;
      })
      .map(([key, val]) => {
        if (typeof val === 'string') return `${key}="${val}"`;
        if (typeof val === 'boolean') return key;
        if (Array.isArray(val)) return `${key}={${JSON.stringify(val)}}`;
        return `${key}={${JSON.stringify(val)}}`;
      })
      .join(' ');

    const openingTag = propString ? `<${componentName} ${propString}` : `<${componentName}`;
    const componentJSX = children
      ? `${openingTag}>\n  ${children}\n</${componentName}>`
      : `${openingTag} />`;

    if (type === 'Next.js') {
      return `'use client';
import { ${componentName} } from 'prixma';

export default function Page() {
  return (
    ${componentJSX.split('\n').join('\n    ')}
  );
}`;
    }

    if (type === 'JavaScript') {
      const classParts = [`fp-${componentName.toLowerCase()}`];
      if (props.variant) classParts.push(`fp-${componentName.toLowerCase()}-${props.variant}`);
      if (props.size) classParts.push(`fp-${componentName.toLowerCase()}-${props.size}`);

      return `<div class="${classParts.join(' ')}">
  ${props.children || '...'}
</div>`;
    }

    return `import { ${componentName} } from 'prixma';

<${componentName} 
  ${propString.split(' ').join('\n  ')} 
/>`;
  };

  return (
    <div className={styles.playground}>
      <div className={styles.mainArea}>
        <div className={styles.preview}>
          <Component {...props} />
        </div>

        <div className={styles.controls}>
          {controls.map((control) => (
            <div key={control.name} className={styles.controlGroup}>
              {control.type !== 'boolean' && (
                <label className={styles.controlLabel}>{control.label || control.name}</label>
              )}

              {control.type === 'select' && (
                <div className={styles.controlGrid}>
                  {control.options?.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.optionBtn} ${props[control.name] === opt ? styles.activeOption : ''}`}
                      onClick={() => updateProp(control.name, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {control.type === 'boolean' && (
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={!!props[control.name]}
                    onChange={(e) => updateProp(control.name, e.target.checked)}
                  />
                  <span className={styles.slider}></span>
                  {control.name}
                </label>
              )}

              {control.type === 'text' && (
                <input
                  type="text"
                  className={styles.optionBtn}
                  style={{ width: '100%', outline: 'none' }}
                  value={props[control.name] || ''}
                  onChange={(e) => updateProp(control.name, e.target.value)}
                  placeholder={`Enter ${control.name}...`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.codeArea}>
        <div className={styles.tabs}>
          {['React', 'Next.js', 'JavaScript'].map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <CodeBlock code={generateCode(activeTab)} filename={`${componentName}.tsx`} />
      </div>
    </div>
  );
}
