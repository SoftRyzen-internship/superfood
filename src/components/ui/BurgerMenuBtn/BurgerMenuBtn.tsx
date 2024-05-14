'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import BurgerIcon from '@/../public/icons/menu.svg';
const Modal = dynamic(() => import('@/components/common/Modal'), {
  ssr: false,
});
import BurgerMenu from '@/components/common/BurgerMenu';

import data from '@/data/common.json';

export interface BurgerMenuBtnProps {}

function BurgerMenuBtn({}: BurgerMenuBtnProps) {
  const { burgerOpen } = data.ariaLabel;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="xl:hidden"
        aria-label={burgerOpen}
        onClick={() => setIsOpen(true)}
      >
        <BurgerIcon
          width={24}
          height={24}
          className="w-6 h-6 md:w-10 md:h-10"
        />
      </button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} variant="burger">
        <BurgerMenu close={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

export default BurgerMenuBtn;
