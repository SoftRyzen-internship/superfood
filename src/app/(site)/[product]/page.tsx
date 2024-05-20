import React from 'react';
import { getProduct } from '@/../sanity/requests';
import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import DescriptionSection from '@/sections/DescriptionSection';
import Contacts from '@/sections/Contacts';
import Products from '@/sections/Products';
import data from '@/data/common.json';

export interface ProductProps {
  params: { product: string };
}

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export function generateStaticParams() {
  return data.productSlugs.map(product => {
    return { product };
  });
}

async function Product({ params: { product } }: ProductProps) {
  const content = await getProduct();

  return (
    <>
      <HeroFormulaicSection productId={product} productData={content} />
      <DescriptionSection productId={product} />
      <Products />
      <Contacts />
    </>
  );
}

export default Product;
