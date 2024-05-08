'use client';

import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

function Button({
  label,
  variant,
  type = 'button',
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        'font-bold uppercase rounded-full transition-colors inline-block',
        variant === 'primary' &&
          'py-5 px-8  text-center text-lg text-white bg-green  xl:hover:bg-darkGreen  xl:text-xl',
        variant === 'secondary' &&
          'text-green py-4 px-6 border border-solid border-button  xl:focus:text-white xl:focus:bg-green',
        variant === 'primary2' &&
          'text-white text-xl py-5 px-8 border border-solid border-white xl:hover:text-green xl:hover:bg-white',
        variant === 'readmore' &&
          'text-sm text-green font-light leading-[1.35] tracking-tight normal-case underline underline-offset-4 md:text-base xl:text-lg xl:hover:text-darkGreen xl:focus:text-darkGreen',
        className
      )}
    >
      {label}
    </button>
  );
}

export default Button;
