// src/components/ImageWithSidePanels/utils.ts
import { MediaSource } from './types';

export const getImageSrc = (image: MediaSource): string => {
  if (typeof image === 'string') {
    return image;
  }
  return image.default;
};