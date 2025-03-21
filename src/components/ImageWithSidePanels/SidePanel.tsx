// src/components/ImageWithSidePanels/SidePanel.tsx
import { FC } from 'react';
import { SidePanelProps } from './types';
import { getImageSrc } from './utils';

const SidePanel: FC<SidePanelProps> = ({
  icon,
  title,
  media,
  mediaType = 'image', // Por defecto se tratará como imagen si no se especifica
  mediaAlt,
  position,
  text,
}) => {
  const rotationClass = position === 'left' ? 'rotate-3' : '-rotate-3';
  
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg relative z-1">
      <div className="flex flex-row items-center gap-1 w-full">
        <div className="text-4xl text-black-light mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black mb-4">
          {title}
        </h3>
      </div>
      <p className="text-sm text-black-light mb-6">
        {text}
      </p>
      <div className={`relative overflow-hidden transition-transform hover:scale-105 ${rotationClass}`}>
        {mediaType === 'video' ? (
          <video autoPlay loop muted playsInline preload={'auto'} controls={false} className="w-full h-48 object-cover rounded-lg">
            <source src={getImageSrc(media)} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        ) : (
          <img 
            src={getImageSrc(media)} 
            alt={mediaAlt}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default SidePanel;
