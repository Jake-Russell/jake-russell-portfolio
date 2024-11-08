import React from 'react';
import Image from 'next/image';

import { HeroProps } from './types';

const Hero: React.FC<HeroProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={imageSrc}
        alt="" // TODO Add alt text
      />
      <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </div>
  );
};

export default Hero;
