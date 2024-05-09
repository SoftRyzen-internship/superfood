import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';

function Button({
  label,
  variant,
  type = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        'font-bold uppercase rounded-full transition-colors inline-block',
        variant === 'primary' &&
          'py-5 px-8  text-center text-lg text-white bg-green hover:bg-darkGreen  focus:bg-darkGreen text-xl',
        variant === 'secondary' &&
          'text-green py-4 px-6 border border-solid border-button  hover:text-white hover:bg-green focus:text-white focus:bg-green',
        variant === 'primary2' &&
          'text-white text-xl py-5 px-8 border border-solid border-white hover:text-green hover:bg-white',
        variant === 'readmore' &&
          'text-sm text-green font-light leading-[1.35] tracking-tight normal-case underline underline-offset-4 md:text-base text-lg hover:text-darkGreen focus:text-darkGreen',
        className
      )}
    >
      {label}
    </button>
  );
}

export default Button;
