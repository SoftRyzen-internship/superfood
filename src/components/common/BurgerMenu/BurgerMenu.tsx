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
  const { burgerClose } = data.ariaLabel;

  return (
    <div
      className={classNames(
        styles.burger,
        'pt-[30px] pb-6 md:pt-[43px] md:pb-16 xl:hidden'
      )}
    >
      <div className="container relative">
        <Logo path="header" classNames="mb-[67px] md:mb-[191px]" />
        <button type="button" className="absolute top-0 right-4">
          <CloseIcon
            width={24}
            height={24}
            className="w-6 h-6 md:w-10 md:h-10"
            aria-label={burgerClose}
          />
        </button>

        <div className="mb-10 md:mb-16">
          <NavList />
        </div>

        <div className="text-center mb-[130px] md:mb-[281px]">
          <ScrollLink label={main} href="#contacts" variant="secondary" />
        </div>

        <PhoneContacts
          location="footer"
          classNames="self-center mb-3 md:text-[20px] md:font-light"
        />
        <a
          href="mailto:alisagrushkovska@gmail.com"
          className="flex justify-center mb-6 font-geologica text-black font-light text-[14px] leading-[1.35] text-center  md:text-[20px] md:mb-8"
        >
          {data.email}
        </a>

        <SocialMedia className="justify-center" />
      </div>
    </div>
  );
}

export default BurgerMenu;
