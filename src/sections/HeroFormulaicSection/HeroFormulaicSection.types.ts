export interface ProductData {
  _id: string;
  product: string;
  price: number;
  slug: {
    current: string;
    _type: string;
  };
}

export interface HeroFormulaicSectionProps {
  productId: string;
  productData: ProductData[];
}
