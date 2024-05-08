import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { LogoProps } from './Logo.types';

function Logo({ text, path }: LogoProps) {
  const logoSizes =
    path === 'header'
      ? 'text-base leading-[19.2px] font-extrabold text-black md:text-[22px] leading-[26.4px] hover:text-green smOnly:leading-[19.2px] '
      : 'text-[22px] leading-[26.4px] font-extrabold text-white hover:text-green';

  const logoClasses = classNames(
    'cursor-pointer inline-block uppercase transition',
    logoSizes
  );

  return (
    <Link href="/" className={logoClasses} >
      {text}
    </Link>
  );
}

export default Logo;
