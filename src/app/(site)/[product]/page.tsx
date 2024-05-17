import React from 'react';
import { getProduct } from '../../../../sanity/requests';
import HeroFormulaicSection from '@/sections/HeroFormulaicSection';

import ProductDescription from '@/components/ui/ProductDescription';
import PreferenceAction from '@/components/ui/PreferenceAction';
import ActionActiveComponents from '@/components/ui/ActionActiveComponents';

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
      <section className="bg-input py-5">
        <div className="container">
          <ProductDescription productId={product} />
          <PreferenceAction productId={product}/>
          <ActionActiveComponents productId={product} />
        </div>
      </section>
    </>
  );
}

export default Product;
