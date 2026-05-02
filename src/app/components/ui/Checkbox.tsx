'use client';

import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ 
  label, 
  indeterminate,
  error,
  checked, 
  disabled,
  className,
  ...props 
}) => {
  return (
    <label className={`
      ${styles.container} 
      ${disabled ? styles.disabled : ''} 
      ${indeterminate ? styles.indeterminate : ''}
      ${error ? styles.error : ''}
      ${className || ''}
    `}>
      <input 
        type="checkbox" 
        className={styles.input}
        checked={checked} 
        disabled={disabled}
        {...props} 
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
