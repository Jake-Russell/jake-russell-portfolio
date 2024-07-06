import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ExternalLinks = () => {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <Link href="https://www.linkedin.com/in/jcrussell1/">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedin />
        </div>
      </Link>
      <Link href="https://github.com/Jake-Russell">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </Link>
      <Link href="mailto:jake@jakerussell.photography">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="/#contact">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </div>
  );
};

export default ExternalLinks;
