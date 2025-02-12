// src/components/ImageWithSidePanels/utils.ts
import { ImageSource } from './types';

export const getImageSrc = (image: ImageSource): string => {
  if (typeof image === 'string') {
    return image;
  }
  return image.default;
};