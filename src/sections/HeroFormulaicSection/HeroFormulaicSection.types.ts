export interface ProductData {
  _id: string;
  product: string;
  price: number;
}

export interface HeroFormulaicSectionProps {
  productId: string;
  productData: ProductData | null;
}
