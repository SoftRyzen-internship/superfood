import React from 'react';
import classNames from 'classnames';

import Logo from '@/components/ui/Logo/Logo';
import NavList from '../NavList';
import ScrollLink from '@/components/ui/ScrollLink';
import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';

import CloseIcon from '@/../../public/icons/Close.svg';

import data from '@/data/common.json';
import styles from './Burger.module.css';

export interface BurgerMenu {}

function BurgerMenu({}: BurgerMenu) {
  const { main } = data.buttonsLabel;
  return (
    <div className={classNames(styles.burger, 'pt-[30px] pb-6')}>
      <div className="container relative">
        <Logo path="header" classNames="mb-[67px]" />
        <button type="button" className="absolute top-0 right-4">
          <CloseIcon
            width={24}
            height={24}
            className="w-7 h-7"
            aria-label="Закрити бургер меню"
          />
        </button>

        <div className="mb-10">
          <NavList />
        </div>

        <div className="text-center mb-[130px]">
          <ScrollLink label={main} href="#contacts" variant="secondary" />
        </div>

        <PhoneContacts location="footer" classNames="self-center mb-3" />
        <a
          href="mailto:alisagrushkovska@gmail.com"
          className="flex justify-center mb-6 font-geologica text-black font-light text-[14px] leading-[1.35] text-center md:font-[250] md:text-[16px] md:leading-[22.4px]"
        >
          alisagrushkovska@gmail.com
        </a>
        <SocialMedia className="justify-center" />
      </div>
    </div>
  );
}

export default BurgerMenu;
