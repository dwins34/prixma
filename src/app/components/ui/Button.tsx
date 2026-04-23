'use client';
import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  iconButton?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  leadingIcon,
  trailingIcon,
  iconButton = false,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    iconButton ? styles.iconBtn : '',
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className={`${styles.spinner} ${variant === 'secondary' || variant === 'text' ? styles.spinnerDark : ''}`} />
      ) : (
        <>
          {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
          {!iconButton && children}
          {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
          {iconButton && children}
        </>
      )}
    </button>
  );
}
