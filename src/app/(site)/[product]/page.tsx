import React from 'react';
import { getProduct } from '@/../sanity/requests';
import HeroFormulaicSection from '@/sections/HeroFormulaicSection';

import ProductDescription from '@/components/ui/ProductDescription';
import PreferenceAction from '@/components/ui/PreferenceAction';
import ActionActiveComponents from '@/components/ui/ActionActiveComponents';

import data from '@/data/common.json';
import Contacts from '@/sections/Contacts';
import Products from '@/sections/Products';

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
      <section className="bg-input py-5">
        <div className="container">
          <ProductDescription productId={product} />
          <PreferenceAction productId={product} />
          <ActionActiveComponents productId={product} />
        </div>
      </section>
      <Products />
      <Contacts />
    </>
  );
}

export default Product;
