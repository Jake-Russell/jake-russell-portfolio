import React from 'react';
import { ProjectDescriptionProps } from './types';
import LinkButton from '../LinkButton';

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  demoLink,
  codeLink,
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
        {demoLink && <LinkButton content="Demo" href={demoLink} isExternal />}
        {codeLink && <LinkButton content="Code" href={codeLink} isExternal />}
      </div>
    </div>
  );
};

export default ProjectDescription;
