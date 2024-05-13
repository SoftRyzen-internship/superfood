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
        'font-geologica font-bold uppercase rounded-full transition-colors inline-block',
        variant === 'primary' &&
          'py-5 px-8  text-center text-lg text-white bg-green hover:bg-darkGreen  focus:bg-darkGreen xl:text-xl',
        variant === 'readmore' &&
          'text-sm text-green font-light leading-[1.35] tracking-tight normal-case underline underline-offset-4 md:text-base  hover:text-darkGreen focus:text-darkGreen xl:text-lg',
        className
      )}
    >
      {label}
    </button>
  );
}

export default Button;
