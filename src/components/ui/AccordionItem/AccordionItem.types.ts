export interface AccordionItemProps {
  titleItem: string;
  description: string;
  info?: { id: string; caption: string; captionText: string }[];
  openFirst?: boolean;
}
