import './gm-switch.css';
import React, { useState } from 'react';

export const GMSwitch = (p: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const getStateProps = () => ({
    'data-checked': checked,
    'data-hover': hovered,
    'data-active': active,
    'data-focused': focused,
    'data-disabled': p.disabled,
  });

  const getTrackProps = () => ({
    ...getStateProps(),
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
      setActive(true);
    },
    onMouseUp: () => setActive(false),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  });

  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        {...p}
        onChange={e => {
          setChecked(e.target.checked)
          p.onChange && p.onChange(e);
        }}
      />
      <span
        className="switch__track"
        {...getTrackProps()}
      >
        <span
          className="switch__thumb"
          {...getStateProps()}
        />
        <span
          className="switch__icon"
          {...getStateProps()}
        >
          {checked ? 'gn.' : 'gm.'}
        </span>

      </span>
    </label>
  )
}
