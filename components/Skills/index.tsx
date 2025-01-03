import React from 'react';
import Image from 'next/image';

import { SkillCategory } from './types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      // Web languages
      { name: 'JavaScript', image: '/assets/skills/languages/javascript.png' },
      { name: 'TypeScript', image: '/assets/skills/languages/typescript.png' },
      { name: 'HTML', image: '/assets/skills/languages/html.png' },
      { name: 'CSS', image: '/assets/skills/languages/css.png' },
      { name: 'SCSS', image: '/assets/skills/languages/scss.png' },

      // General-purpose languages
      { name: 'Python', image: '/assets/skills/languages/python.png' },
      { name: 'Java', image: '/assets/skills/languages/java.png' },
      { name: 'Kotlin', image: '/assets/skills/languages/kotlin.png' },
      { name: 'C++', image: '/assets/skills/languages/cplusplus.png' },
      { name: 'C#', image: '/assets/skills/languages/csharp.png' },
      { name: 'Swift', image: '/assets/skills/languages/swift.png' },
      { name: 'Haskell', image: '/assets/skills/languages/haskell.png' },
      { name: 'PHP', image: '/assets/skills/languages/php.png' },

      // Shell/Command-line languages
      { name: 'Bash', image: '/assets/skills/languages/bash.png' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      // Frontend frameworks and libraries
      { name: 'React', image: '/assets/skills/frameworks/react.png' },
      { name: 'Next.js', image: '/assets/skills/frameworks/nextjs.png' },
      { name: 'Angular', image: '/assets/skills/frameworks/angular.png' },
      { name: 'Tailwind', image: '/assets/skills/frameworks/tailwind.png' },
      { name: 'Storybook', image: '/assets/skills/frameworks/storybook.png' },

      // Backend frameworks
      { name: 'Laravel', image: '/assets/skills/frameworks/laravel.png' },
      { name: 'Node.js', image: '/assets/skills/frameworks/nodejs.png' },
      { name: 'Sitecore', image: '/assets/skills/frameworks/sitecore.png' },

      // Data science and machine learning libraries
      { name: 'TensorFlow', image: '/assets/skills/frameworks/tensorflow.png' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      // Version control and collaboration
      { name: 'GitHub', image: '/assets/skills/tools/github.png' },
      { name: 'GitLab', image: '/assets/skills/tools/gitlab.png' },
      { name: 'Git', image: '/assets/skills/tools/git.png' },

      // Containerization and DevOps tools
      { name: 'Docker', image: '/assets/skills/tools/docker.png' },

      // Design tools
      { name: 'Figma', image: '/assets/skills/tools/figma.png' },

      // Hardware tools
      { name: 'Arduino', image: '/assets/skills/tools/arduino.png' },
    ],
  },
  {
    title: 'Cloud Platforms & Services',
    skills: [
      // Cloud platforms and services
      { name: 'AWS', image: '/assets/skills/cloud/aws.png' },
      { name: 'Firebase', image: '/assets/skills/cloud/firebase.png' },

      // Infrastructure as Code (IaC)
      { name: 'Terraform', image: '/assets/skills/cloud/terraform.png' },
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
