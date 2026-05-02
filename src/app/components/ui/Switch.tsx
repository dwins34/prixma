'use client';

import React from 'react';
import styles from './Switch.module.css';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  disabled,
  className,
  ...props
}) => {
  return (
    <label className={`${styles.container} ${disabled ? styles.disabled : ''} ${className || ''}`}>
      <div className={styles.track}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span className={styles.slider} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Switch;
