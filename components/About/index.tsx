import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import aboutImage from '../../public/assets/jake_russell_portrait.jpg';
import { getExperience } from '@/utils/experience';

const About: React.FC = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-32">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651ef]">
            About
          </p>
          <h2 className="py-4">Who Am I?</h2>
          <p className="py-2 text-gray-600">
            Hi, I&apos;m Jake, a Full Stack Developer based in Oxfordshire, UK.
            Currently, I work as an Associate Software Developer at Valtech,
            where I focus on creating impactful solutions using a variety of
            technologies.
          </p>

          <p className="py-2 text-gray-600">
            I hold a first-class Bachelor&apos;s degree in Computer Science and
            Artificial Intelligence from Loughborough University, where I gained
            extensive knowledge in software development methodologies and
            technologies. Since graduating, I&apos;ve accumulated{' '}
            {getExperience(new Date(2023, 8))} of professional development
            experience, primarily working with front-end technologies like
            React, Sitecore as a CMS, and C# for the back-end. Being able to
            expand my skills learnt at University, and apply these to real world
            projects has been a truly rewarding experience, which I am excited
            to pursue and continue.
          </p>

          <p className="py-2 text-gray-600">
            Outside of coding, I have a passion for photography and travel.
            Studying photography at A-Level sharpened my attention to detail and
            composition, skills I carry over into my development work. I also
            enjoy traveling, exploring new places and cultures, and capturing
            these moments through my camera lens. This creative side fuels my
            personal projects, such as my photography portfolio website, where I
            showcase some of my work.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <Image className="rounded-xl" src={aboutImage} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
