export interface Description {
  id: string;
  text: {
    key: number;
    part: string;
  }[];
}

export interface ProductDescriptionProps {
  productId: string;
}
