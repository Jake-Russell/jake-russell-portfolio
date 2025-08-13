import React from 'react';
import Image from 'next/image';
import { SkillCategory } from './types';

// Import all skill images
import jsImg from '../../public/assets/skills/languages/javascript.png';
import tsImg from '../../public/assets/skills/languages/typescript.png';
import htmlImg from '../../public/assets/skills/languages/html.png';
import cssImg from '../../public/assets/skills/languages/css.png';
import scssImg from '../../public/assets/skills/languages/scss.png';
import pythonImg from '../../public/assets/skills/languages/python.png';
import javaImg from '../../public/assets/skills/languages/java.png';
import kotlinImg from '../../public/assets/skills/languages/kotlin.png';
import cppImg from '../../public/assets/skills/languages/cplusplus.png';
import csharpImg from '../../public/assets/skills/languages/csharp.png';
import swiftImg from '../../public/assets/skills/languages/swift.png';
import haskellImg from '../../public/assets/skills/languages/haskell.png';
import phpImg from '../../public/assets/skills/languages/php.png';
import bashImg from '../../public/assets/skills/languages/bash.png';

import reactImg from '../../public/assets/skills/frameworks/react.png';
import nextImg from '../../public/assets/skills/frameworks/nextjs.png';
import angularImg from '../../public/assets/skills/frameworks/angular.png';
import tailwindImg from '../../public/assets/skills/frameworks/tailwind.png';
import storybookImg from '../../public/assets/skills/frameworks/storybook.png';
import laravelImg from '../../public/assets/skills/frameworks/laravel.png';
import nodeImg from '../../public/assets/skills/frameworks/nodejs.png';
import sitecoreImg from '../../public/assets/skills/frameworks/sitecore.png';
import tensorflowImg from '../../public/assets/skills/frameworks/tensorflow.png';

import githubImg from '../../public/assets/skills/tools/github.png';
import gitlabImg from '../../public/assets/skills/tools/gitlab.png';
import gitImg from '../../public/assets/skills/tools/git.png';
import dockerImg from '../../public/assets/skills/tools/docker.png';
import figmaImg from '../../public/assets/skills/tools/figma.png';
import arduinoImg from '../../public/assets/skills/tools/arduino.png';

import awsImg from '../../public/assets/skills/cloud/aws.png';
import firebaseImg from '../../public/assets/skills/cloud/firebase.png';
import terraformImg from '../../public/assets/skills/cloud/terraform.png';

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', image: jsImg },
      { name: 'TypeScript', image: tsImg },
      { name: 'HTML', image: htmlImg },
      { name: 'CSS', image: cssImg },
      { name: 'SCSS', image: scssImg },
      { name: 'Python', image: pythonImg },
      { name: 'Java', image: javaImg },
      { name: 'Kotlin', image: kotlinImg },
      { name: 'C++', image: cppImg },
      { name: 'C#', image: csharpImg },
      { name: 'Swift', image: swiftImg },
      { name: 'Haskell', image: haskellImg },
      { name: 'PHP', image: phpImg },
      { name: 'Bash', image: bashImg },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', image: reactImg },
      { name: 'Next.js', image: nextImg },
      { name: 'Angular', image: angularImg },
      { name: 'Tailwind', image: tailwindImg },
      { name: 'Storybook', image: storybookImg },
      { name: 'Laravel', image: laravelImg },
      { name: 'Node.js', image: nodeImg },
      { name: 'Sitecore', image: sitecoreImg },
      { name: 'TensorFlow', image: tensorflowImg },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', image: githubImg },
      { name: 'GitLab', image: gitlabImg },
      { name: 'Git', image: gitImg },
      { name: 'Docker', image: dockerImg },
      { name: 'Figma', image: figmaImg },
      { name: 'Arduino', image: arduinoImg },
    ],
  },
  {
    title: 'Cloud Platforms & Services',
    skills: [
      { name: 'AWS', image: awsImg },
      { name: 'Firebase', image: firebaseImg },
      { name: 'Terraform', image: terraformImg },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="max-w-[1240px] m-auto min-h-screen h-auto flex flex-col justify-center px-4 pt-24"
    >
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
      <h2 className="py-4">What Can I Do?</h2>

      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-lg font-semibold py-2">{category.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="flex gap-2 sm:gap-4 items-center justify-center">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={32}
                    height={32}
                  />
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
