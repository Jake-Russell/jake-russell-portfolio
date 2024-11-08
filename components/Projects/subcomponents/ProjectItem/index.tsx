import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProjectItemProps } from './types';

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  subtitle,
  backgroundImage,
  projectUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#5651e5] transition duration-500">
      <Image
        src={backgroundImage}
        alt=""
        className="transition duration-500 rounded-xl group-hover:brightness-50 object-cover h-full"
      />
      <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-500">
        <h3
          className={`text-2xl text-white tracking-wider text-center ${
            !subtitle && 'pb-4'
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="pb-4 pt-2 text-white text-center">{subtitle}</p>
        )}
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
