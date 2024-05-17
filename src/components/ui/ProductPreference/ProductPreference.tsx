import React from 'react';
import { DataProps } from './ProductPreference.types';
import Svg from '@/../public/icons/BenefitsGoodsLeaf.svg';

function ProductPreference({ data }: { data: DataProps }) {
  return (
    <ul className="flex flex-col gap-4 xl:gap-3">
      {data.map(product => (
        <li
          key={product.id}
          className="flex gap-2 font-geologica font-light text-black text-[16px] leading-[21.6px] tracking-[-0.32px] md:gap-3 xl:text-[18px] xl:leading-[24.3px] transition"
        >
          <Svg />
          {product.preference}
        </li>
      ))}
    </ul>
  );
}

export default ProductPreference;
