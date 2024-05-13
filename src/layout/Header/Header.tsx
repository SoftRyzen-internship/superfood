import React from 'react';

import Logo from '@/components/ui/Logo/Logo';
import NavList from '@/components/common/NavList';

export interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <>
      <Logo path="header" />
      <NavList />
    </>
  );
}

export default Header;
