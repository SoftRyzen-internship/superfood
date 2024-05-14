import React from 'react';

import data from '@/data/products.json';

export interface Description {
  id: number;
  description: string;
}

export interface ProductDescriptionProps {
  productId: number;
}

function ProductDescription({ productId }: ProductDescriptionProps) {
  console.log(
    data.productDescriptionList[productId].description.split('').length
  );
  return (
    <div className="bg-white rounded-xl px-4 py-6 border border-strokeLightGreen">
      <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase">
        {data.productDescriptionTitle}
      </h2>
      <p className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight line-clamp-[14]">
        {data.productDescriptionList[productId].description}
      </p>
    </div>
  );
}

export default ProductDescription;
