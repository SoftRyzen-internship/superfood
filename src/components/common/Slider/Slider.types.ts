import { ReactNode } from 'react';

interface Slide {
  id: number;
  content: any[];
}

export interface SliderProps {
  slides: Slide[];
  isProductsSlider: boolean;
}
