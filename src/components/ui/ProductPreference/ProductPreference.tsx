import React from 'react';
import { ProdPrefernceProps } from './ProductPreference.types';
import Svg from '@/../public/icons/BenefitsGoodsLeaf.svg';

function ProductPreference({ preferences }: ProdPrefernceProps) {
  return (
    <ul className="flex flex-col gap-4 xl:gap-3">
      {preferences.map((preference, index) => (
        <li
          key={index}
          className="flex gap-2 font-geologica font-light text-black text-[16px] leading-[21.6px] md:gap-3 xl:text-[18px] xl:leading-[24.3px] transition"
        >
          <Svg />
          {preference}
        </li>
      ))}
    </ul>
  );
}

export default ProductPreference;
