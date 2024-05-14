import React from 'react';
import { DataProps } from './ProductAction.types';

function ProductAction({ data }: { data: DataProps }) {
  return (
    <ul className='flex gap-2 xl:gap-3 bg-transparent'>
      {data.productAction.map(product => (
        <li key={product.id} className='font-geologica font-light text-black border border-strokeGreen rounded-lg	 py-2 px-3 text-[14px] leading-[18.9px]  transition  xl:font-[250] xl:text-[16] xl:leading-[22.4px]'>
          {product.action}
        </li>
      ))}
    </ul>
  );
}

export default ProductAction;
