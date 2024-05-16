import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import React from 'react';

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

function Product({ params }: ProductProps) {
  const product = params.product;

  const products = productDescr.find(item => item.slug === product);

  return (
    <>
      <HeroFormulaicSection productId={product} />
      <div className="container pt-14">
        <p className="text-xl text-center font-bold p-10">
          Hero Product slug {product}
        </p>
        <div className="bg-lightGreen p-10">
          {products && <p>{products.description}</p>}
        </div>
      </div>
    </>
  );
}

export default Product;
