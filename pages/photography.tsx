import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

import photographyImg from '../public/assets/projects/photography.jpg';

const Photography: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/30 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={photographyImg}
          alt=""
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Photography Showcase</h2>
          <h3>Pure HTML / CSS / JS / PHP</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="pb-2">Overview</h2>
          <p className="py-2">
            My first year of University taught me all about basic
            web-development, giving a solid introduction into the core HTML,
            CSS, JS and PHP building blocks. This really inspired me to go above
            and beyond what was taught in this module, leading me to my first
            project, showcasing my photography skills.
          </p>
          <p>
            The front-end of this project is build purely out of HTML, CSS and
            JS. A small amount of PHP is used for a functioning contact page
            which triggers an email to be sent using <code>PHPMailer</code>.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
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
