import React from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import Hero from '@/components/Shared/Hero';
import ProjectDescription from '@/components/Shared/ProjectDescription';
import Technologies from '@/components/Shared/Technologies';
import portfolioImg from '@/public/assets/projects/portfolio.jpg';

const Portfolio: React.FC = () => {
  const description = `This project is the website you are viewing right now! Built using Next.js, React, Tailwind CSS, and TypeScript, the purpose of this project is to showcase my projects and skills.
  It also marks my introduction to Next.js, a React framework that I have come to love for its speed, simplicity, and ease of use. I also took this opportunity to learn Tailwind CSS, a utility-first CSS framework that has helped me to quickly and consistently style this website.`;

  const technologies = ['Next.js', 'React', 'Tailwind', 'TypeScript'];

  return (
    <div className="w-full">
      <Hero
        imageSrc={portfolioImg}
        title="Portfolio"
        altText="Screenshot the www.jakerussell.info homepage."
        subtitle="Next.js / React / Tailwind / TypeScript"
      />

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <ProjectDescription
          description={description}
          codeLink="https://github.com/Jake-Russell/jake-russell-portfolio"
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

export default Portfolio;
