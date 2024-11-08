import React from 'react';
import { LinkButtonProps } from './types';
import Link from 'next/link';

const LinkButton: React.FC<LinkButtonProps> = ({
  content,
  href,
  isExternal = false,
}) => {
  return (
    // TODO Maybe add external link icon?
    <Link
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] shadow-xl shadow-gray-400 text-gray-100 uppercase text-center"
    >
      {content}
    </Link>
  );
};

export default LinkButton;
