import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

import photographyImg from '../public/assets/projects/photography.jpg';
import Hero from '@/components/Shared/Hero';
import ProjectDescription from '@/components/Shared/ProjectDescription';

const Photography: React.FC = () => {
  const projectDescription = `My first year of University taught me all about basic web-development, giving a solid introduction into the core HTML, CSS, JS and PHP building blocks. This really inspired me to go above and beyond what was taught in this module, leading me to my first project, showcasing my photography skills.
  The front-end of this project is build purely out of HTML, CSS and JS. A small amount of PHP is used for a functioning contact page which triggers an email to be sent using PHPMailer`;

  return (
    <div className="w-full">
      <Hero
        imageSrc={photographyImg}
        title="Photography Showcase"
        subtitle="Pure HTML / CSS / JS / PHP"
      />

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <ProjectDescription description={projectDescription} />

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PHP
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Photography;
