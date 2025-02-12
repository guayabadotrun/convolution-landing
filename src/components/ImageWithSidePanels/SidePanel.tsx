// src/components/ImageWithSidePanels/SidePanel.tsx
import { FC } from 'react';
import { SidePanelProps } from './types';
import { getImageSrc } from './utils';

const SidePanel: FC<SidePanelProps> = ({
  icon,
  title,
  image,
  imageAlt,
  position,
  text,
}) => {
  const rotationClass = position === 'left' ? 'rotate-6' : '-rotate-6';
  
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg relative z-1">
      <div className='flex flex-row items-center gap-1 w-full'>
        <div className="text-4xl text-black-light mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black mb-4">
          {title}
        </h3>
      </div>
      <p className='text-sm text-black-light mb-6'>
        {text}
      </p>
      <div className={`relative overflow-hidden transition-transform hover:scale-105 ${rotationClass}`}>
        <img 
          src={getImageSrc(image)} 
          alt={imageAlt}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SidePanel;
