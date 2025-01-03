import React from 'react';

import photographyImg from '../../public/assets/projects/photography.jpg';
import portfolioImg from '../../public/assets/projects/portfolio.jpg';
import cryptoImg from '../../public/assets/projects/crypto.jpg';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';

import ProjectItem from './subcomponents/ProjectItem';

const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] m-auto min-h-screen h-auto flex flex-col justify-center px-4 pt-24"
    >
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Photography Showcase"
          subtitle="Pure HTML / CSS / JS / PHP"
          backgroundImage={photographyImg}
          projectUrl="/photography"
        />
        <ProjectItem
          title="Portfolio"
          subtitle="The website you are currently viewing!"
          backgroundImage={portfolioImg}
          projectUrl="/portfolio"
        />
        <ProjectItem
          title="Crypto App"
          backgroundImage={cryptoImg}
          projectUrl="/crypto"
        />
        <ProjectItem
          title="Netflix App"
          backgroundImage={netflixImg}
          projectUrl="/netflix"
        />
        <ProjectItem
          title="Twitch App"
          backgroundImage={twitchImg}
          projectUrl="/twitch"
        />
      </div>
    </div>
  );
};

export default Projects;
