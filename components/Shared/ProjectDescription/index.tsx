import React from 'react';
import { ProjectDescriptionProps } from './types';
import Button from '../Button';
import LinkButton from '../LinkButton';

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => {
  const descriptionParts = description.split('\n');

  return (
    <div className="col-span-4">
      <h2 className="pb-2">Overview</h2>
      {descriptionParts.map((part, index) => (
        <p key={index} className="py-2">
          {part}
        </p>
      ))}
      <div className="flex space-x-4 mt-4">
        <LinkButton
          content="Demo"
          href="https://jakerussell.photography/index.html"
          isExternal
        />
        <LinkButton
          content="Code"
          href="https://github.com/Jake-Russell/jake-russell-photography"
          isExternal
        />
      </div>
    </div>
  );
};

export default ProjectDescription;
