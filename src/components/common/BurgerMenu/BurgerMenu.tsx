import React from 'react';
import classNames from 'classnames';

import Logo from '@/components/ui/Logo/Logo';
import NavList from '../NavList';
import ScrollLink from '@/components/ui/ScrollLink';
import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';

import { BurgerMenuProps } from './BurgerMenu.types';

import CloseIcon from '@/../../public/icons/Close.svg';

import data from '@/data/common.json';

function BurgerMenu({ close }: BurgerMenuProps) {
  const { main } = data.buttonsLabel;
  const { burgerClose } = data.ariaLabel;

  return (
    <div
      className={classNames('container xl:hidden w-full h-full flex flex-col')}
    >
      <div className="flex py-[30px] justify-between items-center mb-9 md:mb-[148px] md:py-[43px]">
        <Logo path="header" />
        <button type="button" aria-label={burgerClose} onClick={close}>
          <CloseIcon
            width={24}
            height={24}
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </button>
      </div>

      <div className="mb-[105px] md:mb-[265px] flex-auto">
        <div className="mb-10 md:mb-16">
          <NavList />
        </div>

        <div className="text-center">
          <ScrollLink label={main} href="#contacts" variant="secondary" />
        </div>
      </div>

      <div className="pb-6  md:pb-16 ">
        <PhoneContacts
          location="contacts"
          classNames="justify-center  text-sm  md:text-[20px] md:font-light"
        />
        <a
          href="mailto:alisagrushkovska@gmail.com"
          className="flex justify-center mb-6 te mt-3 font-geologica text-black font-light text-[14px] leading-[1.35] text-center  md:text-[20px] md:mb-8"
        >
          {data.email}
        </a>

        <SocialMedia className="justify-center" />
      </div>
    </div>
  );
}

export default BurgerMenu;
