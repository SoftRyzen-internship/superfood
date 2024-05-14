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
        onClick={() => setIsOpen(true)}
      >
        <BurgerIcon
          width={24}
          height={24}
          className="w-6 h-6 md:w-10 md:h-10"
          aria-label={burgerOpen}
        />
      </button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} variant="burger">
        <BurgerMenu close={() => setIsOpen(false)} />
        {/* <div className="flex flex-col  w-full h-full">
          <div className="bg-black">Header</div>
          <main className="bg-blue-200 flex-auto">Main</main>
          <footer className="bg-red ">Footer</footer>
        </div> */}
      </Modal>
    </>
  );
}

export default BurgerMenuBtn;
