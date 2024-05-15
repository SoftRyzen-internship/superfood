export interface Slide {
  id: number;
  content: string;
}

export interface ProductSwiperProps {
  slides: Slide[];
  isProductsSlider: boolean;
}
