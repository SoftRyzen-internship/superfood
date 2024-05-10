export interface ProductCardProps {
  img: string;
  imgBg: 'beans' | 'wheat' | 'vegetables' | 'corn' | 'seaweed';
  alt: string;
  name: string;
  descriptionItems: string[];
  link: string;
  buttonText: string;
}
