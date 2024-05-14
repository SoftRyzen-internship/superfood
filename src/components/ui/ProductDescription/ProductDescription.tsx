import React from 'react';

import data from '@/data/products.json';
import { product } from '../../../../sanity/schemas/product';

export interface ProductDescriptionProps {
  id: number;
}

function ProductDescription({ id }: ProductDescriptionProps) {
  return (
    <div className="">
      <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase">
        {data.productDescriptionTitle}
      </h2>
      <p className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight"></p>
    </div>
  );
}

export default ProductDescription;
