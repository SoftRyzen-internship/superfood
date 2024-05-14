export interface AccordionListProps {
  items: {
    id: string;
    titleItem: string;
    description: string;
    info?: { id: string; caption: string; captionText: string }[];
  }[];
  openFirst?: boolean;
}
