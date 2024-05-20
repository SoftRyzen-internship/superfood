'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Button from '../Button';
const Modal = dynamic(() => import('@/components/common/Modal'), {
  ssr: false,
});

import CloseIcon from '@/../public/icons/Close.svg';

import commonData from '@/data/common.json';
import data from '@/data/productDescription.json';
import { Description } from '../ProductDescription/ProductDescription.types';

function ReadMoreBtn({
  description,
}: {
  description: Description | undefined;
}) {
  const { burgerClose } = commonData.ariaLabel;
  const { secondary, secondary2 } = commonData.buttonsLabel;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        label={secondary}
        variant="readmore"
        className="mt-4"
        onClick={() => setIsOpen(true)}
      />
      <Modal variant="simple" isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="px-4 pt-12 pb-[26px]">
          <h2 className="font-roboto font-bold text-lg text-green leading-[1.3] mb-4 uppercase md:text-xl xl:text-[26px]">
            {data.productDescriptionTitle}
          </h2>
          <ul className="font-geologica font-light text-sm text-black leading-[1.3] tracking-tight  md:text-base xl:text-lg">
            {description?.text.map(item => (
              <li key={item.key} className="mb-3">
                {item.part}
              </li>
            ))}
          </ul>

          <Button
            label={secondary2}
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

export default ReadMoreBtn;
