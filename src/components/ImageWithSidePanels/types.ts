// src/components/ImageWithSidePanels/types.ts
import { ReactNode } from 'react';

export type ImageSource = string | { default: string };

export interface SidePanelProps {
  icon: ReactNode;
  title: string;
  image: ImageSource;
  imageAlt: string;
  position: 'left' | 'right';
  text: string;
}

export interface ImageWithSidePanelsProps {
  mainImage: ImageSource;
  mainImageAlt: string;
  leftPanel: {
    icon: ReactNode;
    title: string;
    image: ImageSource;
    imageAlt: string;
    text: string;
  };
  rightPanel: {
    icon: ReactNode;
    title: string;
    image: ImageSource;
    imageAlt: string;
    text: string;
  };
}
