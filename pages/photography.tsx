import React from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import Hero from '@/components/Shared/Hero';
import ProjectDescription from '@/components/Shared/ProjectDescription';
import Technologies from '@/components/Shared/Technologies';
import photographyImg from '@/public/assets/projects/photography.jpg';

const Photography: React.FC = () => {
  const description = `My first year of University taught me all about basic web-development, giving a solid introduction into the core HTML, CSS, JS and PHP building blocks. This really inspired me to go above and beyond what was taught in this module, leading me to my first project, showcasing my photography skills.
  The front-end of this project is build purely out of HTML, CSS and JS. A small amount of PHP is used for a functioning contact page which triggers an email to be sent using PHPMailer.`;

  const technologies = ['HTML', 'CSS', 'JS', 'PHP'];

  return (
    <div className="w-full">
      <Hero
        imageSrc={photographyImg}
        title="Photography Showcase"
        altText="Screenshot the www.jakerussell.photography homepage, showing a barn with star trails behind it"
        subtitle="Pure HTML / CSS / JS / PHP"
      />

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <ProjectDescription
          description={description}
          demoLink="https://jakerussell.photography/index.html"
          codeLink="https://github.com/Jake-Russell/jake-russell-photography"
        />
        <Technologies technologies={technologies} />
      </div>

      <Link href="/#projects">
        <div className="rounded-full shadow-lg shadow-gray-400 w-fit mx-auto my-8 p-4 cursor-pointer flex items-center gap-2 hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleLeft className="text-[#5651e5]" size={30} />
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
};

export default Photography;
