'use client';

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-scroll';

import { ScrollButtonProps } from './ScrollButton.types';

function ScrollButton({
  label,
  to,
  variant,
  className = '',
}: ScrollButtonProps) {
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
          'text-green text-2xl leading-[1.15] uppercase relative md:text-[40px] xl:text-base xl:font-extralight xl:normal-case xl:text-black  hover:text-green focus:text-green transition-colors after:block xafter:absolute after:bg-green after:w-full after:h-[1px] after:opacity-0 after:top-[22px] hover:after:opacity-100 focus:after:opacity-100 after:transition-opacity inline-block',

        className
      )}
    >
      {label}
    </Link>
  );
}

export default ScrollButton;
