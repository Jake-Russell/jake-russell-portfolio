import React from 'react';

const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="flex flex-col py-2">
      <label htmlFor={id} className="uppercase text-sm py-2">
        {label}
      </label>
      {type ? (
        <input
          id={id}
          type={type}
          className="border-2 rounded-lg p-3 flex border-gray-300"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={id}
          rows={10}
          className="border-2 rounded-lg p-3 border-gray-300"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
