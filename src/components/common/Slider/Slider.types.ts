import { ReactNode } from 'react';

interface Slide {
  id: number;
  content: ReactNode;
}

export interface SliderProps {
  slides: Slide[];
  isProductsSlider: boolean;
}
