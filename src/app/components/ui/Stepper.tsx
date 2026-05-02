'use client';

import React from 'react';
import styles from './Stepper.module.css';

export type StepStatus = 'default' | 'active' | 'completed' | 'disabled' | 'error';

export interface Step {
  title: string;
  subheader?: string;
  status?: StepStatus;
  isOptional?: boolean;
  icon?: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'number' | 'dot' | 'icon';
  className?: string;
}

const CheckIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
  </svg>
);

export const Stepper: React.FC<StepperProps> = ({
  steps,
  orientation = 'horizontal',
  size = 'md',
  variant = 'number',
  className = '',
}) => {
  return (
    <div className={`${styles.stepper} ${styles[orientation]} ${styles[size]} ${variant === 'dot' ? styles.dotVariant : ''} ${className}`}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const status = step.status || 'default';
        
        return (
          <div key={index} className={`${styles.step} ${styles[status]}`}>
            {!isLast && <div className={styles.connector} />}
            
            <div className={styles.indicatorWrapper}>
              {variant === 'dot' ? (
                <div className={styles.dot} />
              ) : (
                <div className={styles.indicator}>
                  {status === 'completed' ? (
                    <div className={styles.icon}><CheckIcon /></div>
                  ) : status === 'error' ? (
                    <div className={styles.icon}><ErrorIcon /></div>
                  ) : variant === 'icon' && step.icon ? (
                    <div className={styles.icon}>{step.icon}</div>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.header}>
                {step.title}
              </div>
              {step.subheader && (
                <div className={styles.subheader}>{step.subheader}</div>
              )}
              {step.isOptional && (
                <span className={styles.optional}>Optional</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
