// src/components/ImageWithSidePanels/ImageWithSidePanels.tsx
import { FC } from 'react';
import { ImageWithSidePanelsProps } from './types';
import { getImageSrc } from './utils';
import SidePanel from './SidePanel';

const ImageWithSidePanels: FC<ImageWithSidePanelsProps> = ({
  mainImage,
  mainImageAlt,
  leftPanel,
  rightPanel
}) => {
  return (
    <div className="container mx-auto px-4">
      {/* En móvil: elementos apilados verticalmente En desktop: layout horizontal con superposición */}
      <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-0">
        {/* Panel Izquierdo */}
        <div className="w-full md:w-1/4 md:-mr-6 md:relative md:mt-60 order-2 md:order-1">
          <SidePanel 
            {...leftPanel}
            position="left"
          />
        </div>

        {/* Imagen Principal */}
        <div className="w-full md:w-1/3 order-2">
          <img 
            src={getImageSrc(mainImage)} 
            alt={mainImageAlt}
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-xl"
          />
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

export default ImageWithSidePanels