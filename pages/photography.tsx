import React from 'react';
import Link from 'next/link';

import photographyImg from '../public/assets/projects/photography.jpg';
import Hero from '@/components/Shared/Hero';
import ProjectDescription from '@/components/Shared/ProjectDescription';
import Technologies from '@/components/Shared/Technologies';

const Photography: React.FC = () => {
  const description = `My first year of University taught me all about basic web-development, giving a solid introduction into the core HTML, CSS, JS and PHP building blocks. This really inspired me to go above and beyond what was taught in this module, leading me to my first project, showcasing my photography skills.
  The front-end of this project is build purely out of HTML, CSS and JS. A small amount of PHP is used for a functioning contact page which triggers an email to be sent using PHPMailer`;

  const technologies = ['HTML', 'CSS', 'JavaScript', 'PHP'];

  return (
    <div className="w-full">
      <Hero
        imageSrc={photographyImg}
        title="Photography Showcase"
        subtitle="Pure HTML / CSS / JS / PHP"
      />

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <ProjectDescription description={description} />
        <Technologies technologies={technologies} />

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Photography;
