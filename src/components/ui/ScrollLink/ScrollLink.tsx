'use client';

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { LinkButtonProps } from './ScrollLink.types';

function LinkButton({
  label,
  href,
  variant,
  className = '',
  // onClick,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      {...rest}
      // onClick={onClick}
      href={`/${href}`}
      className={classNames(
        ' text-center font-bold font-geologica uppercase rounded-full inline-block transition-colors cursor-pointer',
        variant === 'primary' &&
          'py-5 px-8 text-lg text-white  bg-green  hover:bg-darkGreen focus:bg-darkGreen xl:text-xl',
        variant === 'secondary' &&
          'py-4 px-6 text-green  border border-solid border-button hover:text-white hover:bg-green  focus:text-white focus:bg-green',
        variant === 'primary2' &&
          'text-white text-xl py-5 px-8 border border-solid border-white hover:text-green hover:bg-white',
        variant === 'navlink' &&
          'text-green text-2xl font-roboto xl:font-geologica leading-[1.15] uppercase relative md:text-[40px] xl:text-base xl:font-extralight xl:normal-case xl:text-black  hover:text-green focus:text-green transition-colors after:block after:absolute after:bg-green after:w-full after:h-[1px] after:opacity-0 after:top-[22px]  hover:after:opacity-100 focus:after:opacity-100 after:transition-opacity inline-block md:after:top-[22px] xl:after:top-[22px]',
        variant === 'policy' &&
          'px-1 py-1  text-lightGreen text-sm font-light leading-[1.4] tracking-tight normal-case   xl:hover:text-green xl:focus:text-green transition-colors',
        className
      )}
    >
      {label}
    </Link>
  );
}

export default LinkButton;
