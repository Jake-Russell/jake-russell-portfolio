import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  isTextArea = false,
  error,
  ...props
}) => {
  const placeholder = `Please enter your ${label.toLowerCase()}...`;

  return (
    <div className="flex flex-col py-2">
      <label htmlFor={id} className="uppercase text-sm py-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          rows={10}
          placeholder={placeholder}
          required
          {...props}
          className={`border-2 rounded-lg p-3 border-gray-300 ${
            error && 'border-red-500'
          }`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required
          {...props}
          className={`border-2 rounded-lg p-3 flex border-gray-300 ${
            error && 'border-red-500'
          }`}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
