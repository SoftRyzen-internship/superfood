'use client';

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import { ScrollButtonProps } from './ScrollButton.types';

function ScrollButton({ label, to, variant, className = '' }: ScrollButtonProps) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className={classNames(
        ' text-center font-bold font-geologica uppercase rounded-full inline-block transition-colors cursor-pointer',
        variant === 'primary' &&
          'py-5 px-8 text-lg text-white bg-green  xl:hover:bg-darkGreen xl:focus:bg-darkGreen xl:text-xl',
        variant === 'secondary' &&
          'py-4 px-6 text-green  border border-solid border-button xl:hover:text-white xl:hover:bg-green  xl:focus:text-white xl:focus:bg-green',
        variant === 'navlink' &&
          'text-green text-2xl max-md:font-roboto leading-[1.15] uppercase relative md:text-[40px] xl:text-base xl:font-extralight xl:normal-case xl:text-black  xl:hover:text-green xl:focus:text-green transition-colors xl:after:block xl:after:absolute xl:after:bg-green xl:after:w-full xl:after:h-[1px] xl:after:opacity-0 xl:after:top-[22px] xl:hover:after:opacity-100 xl:focus:after:opacity-100 xl:after:transition-opacity inline-block',
        className
      )}
    >
      {label}
    </Link>
  );
}

export default ScrollButton;
