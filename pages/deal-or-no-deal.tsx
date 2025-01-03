import React from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

import Hero from '@/components/Shared/Hero';
import ProjectDescription from '@/components/Shared/ProjectDescription';
import Technologies from '@/components/Shared/Technologies';
import dealOrNoDealImg from '@/public/assets/projects/deal-or-no-deal.jpg';

const DealOrNoDeal = () => {
  const description = `This project is a simple scoreboard for the popular TV show "Deal or No Deal". It is to be used solely as an electronic scoreboard, accompanying physical boxes as used in the TV show game. The scoreboard can be customised by changing the available prizes, the frequency of the banker calling, and the inclusion of a Gamble Box in the game.
  As each physical box is opened, the corresponding prize on the scoreboard can be clicked to remove it from the game. Whenever the banker calls, he will offer a deal that is dynamically calculated based on the remaining prizes in the game.
  The scoreboard is built using Angular 16, Angular Material, and TypeScript.`;

  const technologies = ['Angular 16', 'Angular Material', 'TypeScript'];

  return (
    <div className="w-full">
      <Hero
        imageSrc={dealOrNoDealImg}
        title="Deal or No Deal Scoreboard"
        altText="Screenshot of the deal or no deal scoreboard, with the banker calling."
        subtitle='A simple scoreboard for the popular TV show "Deal or No Deal"'
      />

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <ProjectDescription
          description={description}
          demoLink="https://jake-russell.github.io/deal-or-no-deal-scoreboard/"
          codeLink="https://github.com/Jake-Russell/deal-or-no-deal-scoreboard"
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

export default DealOrNoDeal;
