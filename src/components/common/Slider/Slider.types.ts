import { ReactNode } from 'react';

interface Slide {
  id: number | string;
  content: ReactNode;
}

export interface SliderProps {
  slides: Slide[];
  isProductsSlider: boolean;
}
