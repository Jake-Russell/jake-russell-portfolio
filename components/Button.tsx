import React from 'react';

type ButtonProps = {
  isDisabled: boolean;
  onClick: () => void;
  content: string;
};

const Button: React.FC<ButtonProps> = ({ isDisabled, onClick, content }) => {
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
      {content}
    </button>
  );
};

export default Button;
