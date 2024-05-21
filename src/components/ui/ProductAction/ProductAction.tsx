import React from 'react';
import { ActionProps } from './ProductAction.types';

function ProductAction({ actions }: ActionProps) {
  return (
    <ul className="flex flex-wrap gap-2 bg-transparent md:w-[615px]">
      {actions.map((action, index) => (
        <li
          key={index}
          className="font-geologica font-light text-black border border-strokeGreen rounded-lg py-2 px-3 text-[14px] leading-[18.9px] transition smOnly:w-full xl:font-[250] xl:text-[16px] xl:leading-[22.4px]"
        >
          {action}
        </li>
      ))}
    </ul>
  );
}

export default ProductAction;
