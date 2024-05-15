import HeroFormulaicSection from '@/sections/HeroFormulaicSection';
import PreferenceAction from '@/sections/PreferenceAction';
import React from 'react';

import ProductDescription from '@/components/ui/ProductDescription';

export interface ProductProps {
  params: { id: string };
}

function Product({ params }: ProductProps) {
  const filterId = Number(params.id);

  return (
    <>
      <HeroFormulaicSection productId={params.id} />
      <section className=" bg-input py-5">
        <div className="container">
          <ProductDescription productId={filterId} />
        </div>
      </div>
    </>
  );
}

export default Product;
