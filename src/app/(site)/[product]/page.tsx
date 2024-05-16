import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import React from 'react';

import ProductDescription from '@/components/ui/ProductDescription';

import data from '@/data/common.json';
import ActionActiveComponents from '@/components/ui/ActionActiveComponents';

export interface ProductProps {
  params: { product: string };
}

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export function generateStaticParams() {
  return data.productSlugs.map(product => ({ params: { product } }));
}

function Product({ params }: ProductProps) {
  const product = params.product;

  return (
    <>
      <HeroFormulaicSection productId={product} />
      <section className="bg-input py-5">
        <div className="container">
          <ProductDescription productId={product} />
          <ActionActiveComponents productId={product} />
        </div>
      </section>
    </>
  );
}

export default Product;
