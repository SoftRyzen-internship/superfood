export interface AccordionProps {
  index: number;
  titleItem: string;
  description: string;
  variant: 'home' | 'formulaic';
  info?: { id: string; caption: string; captionText: string }[];
  openFirst?: boolean;
}
