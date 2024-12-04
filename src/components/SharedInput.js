// src/components/SharedInput.js
import React from 'react';

const SharedInput = ({ type, name, value, onChange, options, label }) => {
  switch (type) {
    case 'text':
    case 'textarea':
      return (
        <div>
          <label>{label}</label>
          {type === 'text' ? (
            <input type="text" name={name} value={value} onChange={onChange} />
          ) : (
            <textarea name={name} value={value} onChange={onChange} />
          )}
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <label>
            <input type="checkbox" name={name} checked={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
    case 'radio':
      return (
        <div>
          <label>{label}</label>
          {options.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default SharedInput;
