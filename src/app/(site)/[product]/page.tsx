import React from 'react';
import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import { getProduct } from '../../../../sanity/requests';

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

const productDescr = [
  {
    id: 1,
    slug: 'formula',
    description: 'Formula',
  },
  {
    id: 2,
    slug: 'grains',
    description: 'Grains',
  },
  {
    id: 3,
    slug: 'green_formula',
    description: 'GreenFormula',
  },
  {
    id: 4,
    slug: 'solod',
    description: 'Solod',
  },
  {
    id: 5,
    slug: 'vegetable',
    description: 'Vegetable',
  },
];

getProduct().then(content => console.log(content));

async function Product({ params }: ProductProps) {
  const product = params.product;

  const products = productDescr.find(item => item.slug === product);
  const content = await getProduct();

  return (
    <>
      <HeroFormulaicSection productId={product} productData={content} />
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
