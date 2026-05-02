import React from 'react';
import styles from './Chip.module.css';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'green' | 'red';
  dot?: boolean;
  onDismiss?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  dot,
  onDismiss,
}) => {
  const variantClass = variant === 'purple' ? styles.purple
    : variant === 'green' ? styles.green
    : variant === 'red' ? styles.red
    : '';

  return (
    <span className={`${styles.chip} ${variantClass}`}>
      {dot && <span className={styles.dot} />}
      {children}
      {onDismiss && (
        <button className={styles.dismiss} onClick={onDismiss} type="button" aria-label="Remove">
          ×
        </button>
      )}
    </span>
  );
};
