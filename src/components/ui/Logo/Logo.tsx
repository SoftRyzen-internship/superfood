import React from 'react';
import Link from 'next/link';

interface LogoProps {
  text: string;
}

function Logo({ text }: LogoProps) {
  return (
    <Link
      href="/"
      className={
        'cursor-pointer inline-block text-transform: uppercase font-extrabold text-base leading-5'
      }
    >
      <h1>{text}</h1>
    </Link>
  );
}

export default Logo;
