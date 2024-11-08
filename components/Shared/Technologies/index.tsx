import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

import { TechnologiesProps } from './types';

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
      <div className="p-2">
        <p className="text-center font-bold pb-2">Technologies</p>
        <div className="grid grid-cols-3 md:grid-cols-1">
          {technologies.map((technology, index) => (
            <p key={index} className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" />
              {technology}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
