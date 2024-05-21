import React from 'react';
import { ProdPrefernceProps } from './ProductPreference.types';
import Svg from '@/../public/icons/BenefitsGoodsLeaf.svg';

function ProductPreference({ preferences }: ProdPrefernceProps) {
  return (
    <ul className="flex flex-col gap-4 md:gap-3 smOnly:px-2 smOnly:pb-4">
      {preferences.map((preference, index) => (
        <li
          key={index}
          className="flex gap-2 items-center font-geologica font-light text-black text-[16px] leading-[21.6px] tracking-[-0.32px] md:gap-3 xl:text-[18px] xl:leading-[24.3px] transition"
        >
          <div className="w-[28px]">
            <Svg width={28} height={28} />
          </div>
          {preference}
        </li>
      ))}
    </ul>
  );
}

export default ProductPreference;
