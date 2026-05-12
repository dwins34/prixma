'use client';
import React, { useState, useRef, useEffect, useId, useCallback } from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  group: string;
  options: SelectOption[];
}

type SelectSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  options: (SelectOption | SelectGroup)[];
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
  size?: SelectSize;
  leadingIcon?: React.ReactNode;
  className?: string;
}

/* ── Single select ───────────────────────────── */
interface SingleProps extends BaseProps {
  multi?: false;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  searchable?: boolean;
}

/* ── Multi select ────────────────────────────── */
interface MultiProps extends BaseProps {
  multi: true;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  searchable?: boolean;
  maxChips?: number; // collapse to "+N more" after this count
}

export type SelectProps = SingleProps | MultiProps;

/* ── Icons ───────────────────────────────────── */
const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const XIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ── Helpers ─────────────────────────────────── */
function isGroup(item: SelectOption | SelectGroup): item is SelectGroup {
  return 'group' in item;
}
function flatOptions(options: (SelectOption | SelectGroup)[]): SelectOption[] {
  return options.flatMap(o => isGroup(o) ? o.options : [o]);
}
function filterOptions(options: (SelectOption | SelectGroup)[], query: string): (SelectOption | SelectGroup)[] {
  if (!query) return options;
  const q = query.toLowerCase();
  return options
    .map(o => {
      if (isGroup(o)) {
        const opts = o.options.filter(op => op.label.toLowerCase().includes(q));
        return opts.length ? { group: o.group, options: opts } : null;
      }
      return (o as SelectOption).label.toLowerCase().includes(q) ? o : null;
    })
    .filter(Boolean) as (SelectOption | SelectGroup)[];
}

/* ══════════════════════════════════════════════
   SINGLE SELECT
   ══════════════════════════════════════════════ */
function SingleSelect({
  options, value: controlledValue, defaultValue, onChange,
  placeholder = 'Select an option', label, hint, error, success,
  required, optional, disabled, searchable = false, size = 'md',
  leadingIcon, className,
}: SingleProps) {
  const isControlled = controlledValue !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? '');
  const value = isControlled ? controlledValue! : internal;

  const [open, setOpen]   = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef    = useRef<HTMLInputElement>(null);
  const id = useId();

  const selected = flatOptions(options).find(o => o.value === value);
  const filtered = filterOptions(options, search);
  const hasResults = flatOptions(filtered).length > 0;

  const stateClass = error ? styles.error : disabled ? styles.disabled : success ? styles.success : '';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false); setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { if (open && searchable) searchRef.current?.focus(); }, [open, searchable]);

  const handleSelect = (opt: SelectOption) => {
    if (opt.disabled) return;
    if (!isControlled) setInternal(opt.value);
    onChange?.(opt.value);
    setOpen(false); setSearch('');
  };

  return (
    <div className={`${styles.group} ${styles[size]} ${stateClass} ${open ? styles.open : ''} ${className ?? ''}`} ref={containerRef}>
      {label && (
        <div className={styles.labelRow}>
          <label htmlFor={id} className={styles.label}>{label}</label>
          {optional && <span className={styles.optional}>(optional)</span>}
          {required && <span className={styles.required}> *</span>}
        </div>
      )}
      <div className={styles.wrap}>
        <button id={id} type="button" className={styles.trigger}
          onClick={() => !disabled && setOpen(o => !o)}
          disabled={disabled} aria-haspopup="listbox" aria-expanded={open}
        >
          {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
          <span className={`${styles.value} ${!selected ? styles.placeholder : ''}`}>
            {selected ? selected.label : placeholder}
          </span>
          <span className={styles.chevron}><ChevronIcon /></span>
        </button>

        {open && (
          <div className={styles.menu} role="listbox">
            {searchable && (
              <div className={styles.search}>
                <input ref={searchRef} className={styles.searchInput}
                  placeholder="Search..." value={search}
                  onChange={e => setSearch(e.target.value)} />
              </div>
            )}
            <div className={styles.options}>
              {!hasResults && <div className={styles.empty}>No options found</div>}
              {filtered.map((item, i) => isGroup(item) ? (
                <div key={item.group + i}>
                  <div className={styles.groupLabel}>{item.group}</div>
                  {item.options.map(opt => (
                    <button key={opt.value} type="button" role="option" aria-selected={opt.value === value}
                      className={[styles.option, opt.value === value ? styles.optionSelected : '', opt.disabled ? styles.optionDisabled : ''].join(' ')}
                      onClick={() => handleSelect(opt)}>
                      {opt.label}
                      {opt.value === value && <span className={styles.checkIcon}><CheckIcon /></span>}
                    </button>
                  ))}
                </div>
              ) : (
                <button key={item.value} type="button" role="option" aria-selected={item.value === value}
                  className={[styles.option, item.value === value ? styles.optionSelected : '', item.disabled ? styles.optionDisabled : ''].join(' ')}
                  onClick={() => handleSelect(item)}>
                  {item.label}
                  {item.value === value && <span className={styles.checkIcon}><CheckIcon /></span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {error  && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.helperText}>{hint}</span>}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MULTI SELECT  — chips inside the trigger,
   inline search input, dropdown stays open
   ══════════════════════════════════════════════ */
function MultiSelect({
  options, value: controlledValue, defaultValue, onChange,
  placeholder = 'Select options', label, hint, error, success,
  required, optional, disabled, size = 'md', leadingIcon,
  className, maxChips,
}: MultiProps) {
  const isControlled = controlledValue !== undefined;
  const [internal, setInternal] = useState<string[]>(defaultValue ?? []);
  const values = isControlled ? controlledValue! : internal;

  const [open, setOpen]   = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef     = useRef<HTMLInputElement>(null);
  const id = useId();

  const all      = flatOptions(options);
  const selected = all.filter(o => values.includes(o.value));
  const filtered = filterOptions(options, search);
  const hasResults = flatOptions(filtered).length > 0;

  const stateClass = error ? styles.error : disabled ? styles.disabled : success ? styles.success : '';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false); setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const commit = useCallback((next: string[]) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }, [isControlled, onChange]);

  const toggle = (opt: SelectOption) => {
    if (opt.disabled) return;
    const next = values.includes(opt.value)
      ? values.filter(v => v !== opt.value)
      : [...values, opt.value];
    commit(next);
  };

  const removeChip = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    commit(values.filter(v => v !== val));
  };

  const openAndFocus = () => {
    if (disabled) return;
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // Backspace on empty input removes last chip
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !search && values.length) {
      commit(values.slice(0, -1));
    }
    if (e.key === 'Escape') { setOpen(false); setSearch(''); }
  };

  // Collapsed chips: show first N, then "+X more"
  const visibleChips = maxChips ? selected.slice(0, maxChips) : selected;
  const hiddenCount  = maxChips ? Math.max(0, selected.length - maxChips) : 0;

  return (
    <div className={`${styles.group} ${styles[size]} ${stateClass} ${open ? styles.open : ''} ${className ?? ''}`} ref={containerRef}>
      {label && (
        <div className={styles.labelRow}>
          <label htmlFor={id} className={styles.label}>{label}</label>
          {optional && <span className={styles.optional}>(optional)</span>}
          {required && <span className={styles.required}> *</span>}
        </div>
      )}

      <div className={styles.wrap}>
        {/* Multi-trigger: chips + inline search input */}
        <div
          className={`${styles.multiTrigger} ${open ? styles.multiTriggerOpen : ''} ${disabled ? styles.multiTriggerDisabled : ''} ${error ? styles.multiTriggerError : ''} ${success ? styles.multiTriggerSuccess : ''}`}
          onClick={openAndFocus}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          id={id}
        >
          {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}

          <div className={styles.chipsRow}>
            {visibleChips.map(opt => (
              <span key={opt.value} className={styles.chip}>
                {opt.label}
                {!disabled && (
                  <button type="button" className={styles.chipRemove} onClick={e => removeChip(opt.value, e)} aria-label={`Remove ${opt.label}`}>
                    <XIcon />
                  </button>
                )}
              </span>
            ))}

            {hiddenCount > 0 && (
              <span className={styles.chipMore}>+{hiddenCount} more</span>
            )}

            <input
              ref={inputRef}
              id={`${id}-input`}
              className={styles.multiInput}
              value={search}
              onChange={e => { setSearch(e.target.value); setOpen(true); }}
              onFocus={() => setOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder={selected.length === 0 ? placeholder : ''}
              disabled={disabled}
              autoComplete="off"
            />
          </div>

          <span className={styles.chevron}><ChevronIcon /></span>
        </div>

        {open && (
          <div className={styles.menu} role="listbox" aria-multiselectable="true">
            <div className={styles.options}>
              {!hasResults && <div className={styles.empty}>No options found</div>}
              {filtered.map((item, i) => isGroup(item) ? (
                <div key={item.group + i}>
                  <div className={styles.groupLabel}>{item.group}</div>
                  {item.options.map(opt => {
                    const isSelected = values.includes(opt.value);
                    return (
                      <button key={opt.value} type="button" role="option" aria-selected={isSelected}
                        className={[styles.option, isSelected ? styles.optionSelected : '', opt.disabled ? styles.optionDisabled : ''].join(' ')}
                        onClick={() => toggle(opt)}>
                        <span className={`${styles.multiCheck} ${isSelected ? styles.multiCheckActive : ''}`}>
                          {isSelected && <CheckIcon />}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ) : (
                (() => {
                  const isSelected = values.includes(item.value);
                  return (
                    <button key={item.value} type="button" role="option" aria-selected={isSelected}
                      className={[styles.option, isSelected ? styles.optionSelected : '', item.disabled ? styles.optionDisabled : ''].join(' ')}
                      onClick={() => toggle(item)}>
                      <span className={`${styles.multiCheck} ${isSelected ? styles.multiCheckActive : ''}`}>
                        {isSelected && <CheckIcon />}
                      </span>
                      {item.label}
                    </button>
                  );
                })()
              ))}
            </div>
          </div>
        )}
      </div>

      {error  && <span className={styles.errorText}>{error}</span>}
      {!error && hint && <span className={styles.helperText}>{hint}</span>}
    </div>
  );
}

/* ── Unified export ──────────────────────────── */
export const Select: React.FC<SelectProps> = (props) => {
  if (props.multi) return <MultiSelect {...props} />;
  return <SingleSelect {...props} />;
};

export default Select;
