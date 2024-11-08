import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  isProcessing,
  onClick,
  content,
  processingText,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`w-full p-4 text-gray-100 mt-4 ${
        isDisabled
          ? 'bg-gray-500'
          : 'bg-gradient-to-r from-[#5651e5] to-[#709dff]'
      }`}
    >
      {isProcessing ? processingText : content}
    </button>
  );
};

export default Button;
