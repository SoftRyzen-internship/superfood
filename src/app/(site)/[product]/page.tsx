import React from 'react';
import { getProduct } from '../../../../sanity/requests';
import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import DescriptionSection from '@/sections/DescriptionSection';
import data from '@/data/common.json';

export interface ProductProps {
  params: { product: string };
}

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export function generateStaticParams() {
  return data.productSlugs.map(product => ({ params: { product } }));
}

async function Product({ params }: ProductProps) {
  const product = params.product;
  const content = await getProduct();

  return (
    <>
      <HeroFormulaicSection productId={product} productData={content} />
      <DescriptionSection productId={product} />
    </>
  );
}

export default Product;
