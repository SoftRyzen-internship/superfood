'use client';

import React, { useRef, useEffect, useState } from 'react';

import ReadMoreBtn from '../ReadMoreBtn';

import data from '@/data/productDescription.json';

import { ProductDescriptionProps } from './ProductDescription.types';

function ProductDescription({ productId }: ProductDescriptionProps) {
  const [showReadMoreButton, setShowReadMoreExpandButton] = useState(false);
  const textRef = useRef<HTMLUListElement>(null);
  const maxLines = 14;

  useEffect(() => {
    if (textRef.current) {
      const computedStyle = window.getComputedStyle(textRef.current);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * maxLines;
      const listHeight = textRef.current.clientHeight;

      if (listHeight > maxHeight) {
        setShowReadMoreExpandButton(true);
      }
    }
  }, [productId]);

  const productDescription = data.productDescriptionList.find(item => item.id === productId);

  return (
    <div className="bg-white rounded-xl px-4 py-6 border border-strokeLightGreen md:px-6 xl:px-8">
      <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase md:text-xl xl:text-[26px]">
        {data.productDescriptionTitle}
      </h2>
      {productDescription && (
        <ul
          ref={textRef}
          className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight line-clamp-[14] md:line-clamp-none md:text-base xl:text-lg"
        >
          {productDescription.text.map(item => (
            <li key={item.key} className="mb-4">
              {item.part}
            </li>
          ))}
        </ul>
      )}
      {showReadMoreButton && <ReadMoreBtn description={productDescription} />}
    </div>
  );
}

export default ProductDescription;
