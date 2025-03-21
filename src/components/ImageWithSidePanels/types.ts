// src/components/ImageWithSidePanels/types.ts
import { ReactNode } from 'react';

export type MediaSource = string | { default: string };

export interface SidePanelProps {
  icon: ReactNode;
  title: string;
  media: MediaSource;
  mediaType?: 'image' | 'video'; // Por defecto se tratará como imagen
  mediaAlt: string;
  position: 'left' | 'right';
  text: string;
}

export interface ImageWithSidePanelsProps {
  mainMedia: MediaSource;
  mainMediaType?: 'image' | 'video';
  mainMediaAlt: string;
  leftPanel: {
    icon: ReactNode;
    title: string;
    media: MediaSource;
    mediaType?: 'image' | 'video';
    mediaAlt: string;
    text: string;
  };
  rightPanel: {
    icon: ReactNode;
    title: string;
    media: MediaSource;
    mediaType?: 'image' | 'video';
    mediaAlt: string;
    text: string;
  };
}
