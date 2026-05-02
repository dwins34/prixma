'use client';
import React, { useState, useId } from 'react';
import styles from './Input.module.css';

type InputSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  label?: string;
  hint?: string;
  error?: string;
  success?: boolean;
  optional?: boolean;
  required?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  size?: InputSize;
  className?: string;
}

interface TopLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'top';
}

interface FloatingLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant: 'floating';
}

interface InlineLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant: 'inline';
}

type InputProps = TopLabelProps | FloatingLabelProps | InlineLabelProps;

/* ── Top Label Input ─────────────────────── */
function TopLabelInput({
  label, hint, error, success, optional, required, disabled,
  leadingIcon, trailingIcon, size = 'md', className,
  variant: _variant, ...rest
}: TopLabelProps) {
  const sizeClass = styles[size];
  const stateClass = error ? styles.error : disabled ? styles.disabled : success ? styles.success : '';

  return (
    <div className={`${styles.group} ${sizeClass} ${stateClass} ${className || ''}`}>
      {label && (
        <div className={styles.labelRow}>
          <label className={styles.label}>{label}</label>
          {optional && <span className={styles.optional}>(optional)</span>}
          {required && <span className={styles.required}> *</span>}
        </div>
      )}
      <div className={styles.fieldWrap}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <input
          className={styles.input}
          disabled={disabled}
          {...rest}
        />
        {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
      </div>
      {error  && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.helperText}>{hint}</span>}
    </div>
  );
}

/* ── Floating Label Input ────────────────── */
function FloatingLabelInput({
  label, hint, error, optional, required, disabled,
  leadingIcon, trailingIcon, size = 'md', className, ...rest
}: FloatingLabelProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!rest.defaultValue || !!rest.value);
  const inputId = useId();

  // Floated when focused OR when field has a value
  const isFloated = focused || hasValue || !!rest.value || !!rest.defaultValue;
  const stateClass = error ? styles.floatingError : disabled ? styles.floatingDisabled : '';

  return (
    <div className={`${styles.floatingGroup} ${stateClass} ${className || ''}`}>
      {/* overflow: visible on field so label can escape above border */}
      <div className={styles.floatingField}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}

        {/* floatingInner is the position reference for the label */}
        <div className={styles.floatingInner}>
          {label && (
            <label
              htmlFor={inputId}
              className={[
                styles.floatingLabel,
                isFloated ? styles.floated : '',
                isFloated && focused ? styles.floatedFocus : '',
              ].join(' ')}
            >
              {label}
              {required && <span className={styles.required}> *</span>}
              {optional && <span className={styles.optional}> (optional)</span>}
            </label>
          )}
          <input
            id={inputId}
            className={`${styles.floatingInput} ${!isFloated ? styles.notFloated : ''}`}
            disabled={disabled}
            onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
            onBlur={(e) => { setFocused(false); setHasValue(!!e.target.value); rest.onBlur?.(e); }}
            onChange={(e) => { setHasValue(!!e.target.value); rest.onChange?.(e); }}
            {...rest}
          />
        </div>

        {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
      </div>
      {error  && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.helperText}>{hint}</span>}
    </div>
  );
}

/* ── Inline Label Input ──────────────────── */
function InlineLabelInput({
  label, hint, error, optional, required, disabled,
  leadingIcon, trailingIcon, size = 'md', className, ...rest
}: InlineLabelProps) {
  const stateClass = error ? styles.inlineError : disabled ? styles.inlineDisabled : '';

  return (
    <div className={`${styles.inlineGroup} ${stateClass} ${className || ''}`}>
      <div className={styles.inlineField}>
        {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
        <div className={styles.inlineContent}>
          {label && (
            <span className={styles.inlineLabel}>
              {label}
              {required && <span className={styles.required}> *</span>}
              {optional && <span className={styles.optional}> (optional)</span>}
            </span>
          )}
          <input
            className={styles.inlineInput}
            disabled={disabled}
            {...rest}
          />
        </div>
        {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
      </div>
      {error  && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.helperText}>{hint}</span>}
    </div>
  );
}

/* ── Unified export ──────────────────────── */
export const Input: React.FC<InputProps> = ({ variant = 'top', ...props }) => {
  if (variant === 'floating') return <FloatingLabelInput {...(props as Omit<FloatingLabelProps, 'variant'>)} variant="floating" />;
  if (variant === 'inline')   return <InlineLabelInput   {...(props as Omit<InlineLabelProps,   'variant'>)} variant="inline" />;
  return <TopLabelInput {...props as TopLabelProps} />;
};

export default Input;
