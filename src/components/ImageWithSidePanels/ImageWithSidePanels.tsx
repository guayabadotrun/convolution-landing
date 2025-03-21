// src/components/ImageWithSidePanels/ImageWithSidePanels.tsx
import { FC } from 'react';
import { ImageWithSidePanelsProps } from './types';
import { getImageSrc } from './utils';
import SidePanel from './SidePanel';

const ImageWithSidePanels: FC<ImageWithSidePanelsProps> = ({
  mainMedia,
  mainMediaAlt,
  mainMediaType = 'image',
  leftPanel,
  rightPanel
}) => {
  return (
    <div className="container mx-auto px-4 max-w-screen-xl">
      {/* En móvil: elementos apilados verticalmente; en desktop: layout horizontal con superposición */}
      <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-0">
        
        {/* Panel Izquierdo */}
        <div className="w-full md:w-1/4 md:-mr-6 md:relative md:mt-60 order-2 md:order-1">
          <SidePanel 
            {...leftPanel}
            position="left"
          />
        </div>

        {/* Medio Principal */}
        <div className="w-full md:w-1/3 order-2">
          {mainMediaType === 'video' ? (
            <video autoPlay loop muted className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-xl">
              <source src={getImageSrc(mainMedia)} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          ) : (
            <img 
              src={getImageSrc(mainMedia)} 
              alt={mainMediaAlt}
              className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-xl"
            />
          )}
        </div>

        {/* Panel Derecho */}
        <div className="w-full md:w-1/4 md:-ml-6 md:mt-6 order-3">
          <SidePanel 
            {...rightPanel}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithSidePanels;
