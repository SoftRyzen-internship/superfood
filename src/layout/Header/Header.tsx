import React from 'react';

import Logo from '@/components/ui/Logo/Logo';
import NavList from '@/components/common/NavList';
import BurgerMenuBtn from '@/components/ui/BurgerMenuBtn';
import ScrollLink from '@/components/ui/ScrollLink';
import data from '@/data/common.json';

function Header() {
  const { main } = data.buttonsLabel;

  return (
    <header className="absolute top-0 left-0 w-full py-7 md:py-9 xl:py-5">
      <div className="container flex justify-between items-center">
        <div className="hidden xl:block">
          <NavList />
        </div>
        <Logo path="header" />
        <ScrollLink
          label={main}
          href="#contacts"
          variant="secondary"
          className="hidden xl:block"
        />
        <BurgerMenuBtn />
      </div>
    </header>
  );
}

export default Header;
