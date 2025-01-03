import React from 'react';
import { LinkButtonProps } from './types';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const LinkButton: React.FC<LinkButtonProps> = ({
  content,
  href,
  isExternal = false,
}) => {
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] shadow-xl shadow-gray-400 text-gray-100 uppercase text-center flex items-center justify-center gap-2"
    >
      <span>{content}</span>
      {isExternal && (
        <ArrowTopRightOnSquareIcon
          className="h-4 w-4"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

export default LinkButton;
