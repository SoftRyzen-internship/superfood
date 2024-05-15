'use client';

import React, { useRef, useEffect, useState } from 'react';
import Button from '../Button';
import Modal from '@/components/common/Modal';
import ReadMoreBtn from '../ReadMoreBtn';
import Icon from '@/../';

import CloseIcon from '@/../public/icons/Close.svg';

import commonData from '@/data/common.json';
import data from '@/data/productDescription.json';

export interface Description {
  id: number;
  text: {
    key: number;
    part: string;
  }[];
}

export interface ProductDescriptionProps {
  productId: number;
}

function ProductDescription({ productId }: ProductDescriptionProps) {
  const { burgerClose } = commonData.ariaLabel;
  const [isOpen, setIsOpen] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const textRef = useRef<HTMLUListElement>(null);
  const maxLines = 14;

  useEffect(() => {
    if (textRef.current) {
      const ulElement = textRef.current;
      const computedStyle = window.getComputedStyle(ulElement);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * maxLines * 1.4;
      const actualHeight = ulElement.scrollHeight;

      if (actualHeight > maxHeight) {
        setShowExpandButton(true);
      }
    }
  }, [productId]);

  const productDescription = data.productDescriptionList.find(
    item => item.id === productId
  );

  return (
    <div className="bg-white rounded-xl px-4 py-6 border border-strokeLightGreen md:px-6 xl:px-8">
      <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase md:text-xl xl:text-[26px]">
        {data.productDescriptionTitle}
      </h2>
      {productDescription && (
        <ul
          ref={textRef}
          className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight line-clamp-[14] md:line-clamp-none md:text-base md:text-lg"
        >
          {productDescription.text.map(item => (
            <li key={item.key} className="mb-3">
              {item.part}
            </li>
          ))}
        </ul>
      )}
      {showExpandButton && (
        <>
          <Button
            label="Читати далі"
            variant="readmore"
            className="mt-4"
            onClick={() => setIsOpen(true)}
          />
          <ReadMoreBtn description={productDescription} />
        </>
      )}
      <Modal variant="simple" isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="px-4 pt-12 pb-[26px]">
          <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase md:text-xl xl:text-[26px]">
            {data.productDescriptionTitle}
          </h2>
          <ul className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight  md:text-base md:text-lg">
            {productDescription?.text.map(item => (
              <li key={item.key} className="mb-3">
                {item.part}
              </li>
            ))}
          </ul>

          <Button
            label="Закрити"
            variant="readmore"
            className="mt-4"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <button
          type="button"
          className="absolute top-4 right-4"
          aria-label={burgerClose}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon
            width={24}
            height={24}
            stroke="#CADAB0"
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </button>
      </Modal>
    </div>
  );
}

export default ProductDescription;
