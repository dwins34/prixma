'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './Toggle.module.css';

interface ToggleProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  options,
  value,
  onChange,
  disabled,
}) => {
  const [internalValue, setInternalValue] = useState(options[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({});

  const activeValue = value !== undefined ? value : internalValue;
  const activeIndex = options.indexOf(activeValue);

  const handleToggle = (opt: string) => {
    if (disabled) return;
    if (value === undefined) setInternalValue(opt);
    onChange?.(opt);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const btns = container.querySelectorAll<HTMLButtonElement>(`.${styles.option}`);
    if (!btns[activeIndex]) return;
    const btn = btns[activeIndex];
    setSliderStyle({ width: btn.offsetWidth, transform: `translateX(${btn.offsetLeft - 4}px)` });
  }, [activeIndex, options]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${disabled ? styles.disabled : ''}`}
    >
      <div className={styles.slider} style={sliderStyle} />
      {options.map((opt) => (
        <button
          key={opt}
          className={`${styles.option} ${activeValue === opt ? styles.activeOption : ''}`}
          onClick={() => handleToggle(opt)}
          disabled={disabled}
          type="button"
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
