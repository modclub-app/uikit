import React from 'react';
import { Typography } from '../../../components';
import { SectionBoxProps } from '../types';

export const SectionBox: React.FC<SectionBoxProps> = ({ 
  title, 
  description,
  children,
}) => (
  <section>
    <div className='flex flex-col'>
      <Typography
        tagName="h3"
        weight="medium"
        size="2xl"
      >
        {title}
      </Typography>
      {description && (
        <Typography
          tagName="span"
          weight="light"
          size="sm"
        >
          {description}
        </Typography>
      )}
    </div>
    <div className="mt-4">
      {children}
    </div>
  </section>
);