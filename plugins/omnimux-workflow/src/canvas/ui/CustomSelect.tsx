/**
 * CustomSelect — Native Dark-Glass Select Popover.
 * Replaces antd `Select` with a modern, high-performance, dark-glass component.
 */

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption<T = string | number> {
  value: T;
  label: React.ReactNode;
  triggerLabel?: React.ReactNode;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface CustomSelectProps<T = string | number> {
  value?: T;
  options: Array<SelectOption<T>>;
  onChange?: (value: T) => void;
  className?: string;
  disabled?: boolean;
  popupMatchSelectWidth?: boolean;
  placeholder?: string;
  variant?: 'pill' | 'ghost' | 'standard';
}

export function CustomSelect<T extends string | number = string>({
  value,
  options,
  onChange,
  className = '',
  disabled = false,
  popupMatchSelectWidth = true,
  placeholder,
  variant = 'pill',
}: CustomSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number; width?: number; placement: 'bottom' | 'top' }>({
    top: 0,
    left: 0,
    placement: 'bottom',
  });

  const selectedOption = useMemo(() => {
    return options.find((opt) => opt.value === value);
  }, [options, value]);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const estimatedMenuHeight = Math.min(options.length * 34 + 16, 260);

    const spaceBelow = viewportHeight - rect.bottom;
    const placeTop = spaceBelow < estimatedMenuHeight && rect.top > estimatedMenuHeight;

    const top = placeTop
      ? rect.top - 6
      : rect.bottom + 6;

    const width = popupMatchSelectWidth ? rect.width : undefined;

    setCoords({
      top,
      left: rect.left,
      width,
      placement: placeTop ? 'top' : 'bottom',
    });
  }, [options.length, popupMatchSelectWidth]);

  useEffect(() => {
    if (!open) return;
    updatePosition();

    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      updatePosition();
    };

    window.addEventListener('mousedown', handlePointerDown, true);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown, true);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, updatePosition]);

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (disabled) return;
      setOpen((prev) => !prev);
    },
    [disabled],
  );

  const handleSelect = useCallback(
    (optValue: T, optDisabled?: boolean) => {
      if (optDisabled) return;
      onChange?.(optValue);
      setOpen(false);
    },
    [onChange],
  );

  const triggerClassName = [
    'wf-custom-select-trigger',
    `wf-custom-select-trigger--${variant}`,
    open ? 'wf-custom-select-trigger--open' : '',
    disabled ? 'wf-custom-select-trigger--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        disabled={disabled}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="wf-custom-select-label">
          {selectedOption
            ? (selectedOption.triggerLabel ?? selectedOption.label)
            : placeholder ?? String(value ?? '')}
        </span>
        <ChevronDown size={12} className="wf-custom-select-chevron" />
      </button>

      {open && typeof document !== 'undefined'
        ? createPortal(
            <div
              ref={menuRef}
              className={`wf-custom-select-dropdown wf-custom-select-dropdown--${coords.placement}`}
              style={{
                position: 'fixed',
                top: coords.placement === 'top' ? undefined : coords.top,
                bottom: coords.placement === 'top' ? window.innerHeight - coords.top : undefined,
                left: coords.left,
                minWidth: coords.width ? Math.max(coords.width, 140) : 180,
                zIndex: 9999,
              }}
              role="listbox"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="wf-custom-select-list">
                {options.map((opt) => {
                  const isSelected = opt.value === value;
                  const hasExtra = !!opt.subtitle || !!opt.badge || !!opt.icon;

                  return (
                    <button
                      key={String(opt.value)}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      disabled={opt.disabled}
                      className={`wf-custom-select-option ${
                        hasExtra ? 'wf-custom-select-option--rich' : ''
                      } ${isSelected ? 'wf-custom-select-option--selected' : ''} ${
                        opt.disabled ? 'wf-custom-select-option--disabled' : ''
                      }`}
                      onClick={() => handleSelect(opt.value, opt.disabled)}
                    >
                      {opt.icon ? (
                        <span className="wf-custom-select-option-icon">{opt.icon}</span>
                      ) : null}

                      <div className="wf-custom-select-option-main">
                        <div className="wf-custom-select-option-top">
                          <span className="wf-custom-select-option-text">{opt.label}</span>
                          {opt.badge ? (
                            <span className="wf-custom-select-badge">{opt.badge}</span>
                          ) : null}
                        </div>
                        {opt.subtitle ? (
                          <div className="wf-custom-select-subtitle">{opt.subtitle}</div>
                        ) : null}
                      </div>

                      {isSelected ? (
                        <Check size={14} className="wf-custom-select-option-check" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

export default CustomSelect;
