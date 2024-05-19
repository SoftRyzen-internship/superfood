import React from 'react';

import ScrollLink from '@/components/ui/ScrollLink/';

import navList from '@/data/navlist.json';

function NavList() {
  return (
    <ul className="flex flex-col gap-6 items-center md:gap-8 xl:flex-row">
      {navList.map(({ id, title, sectionId }) => (
        <li key={id}>
          <ScrollLink label={title} href={`#${sectionId}`} variant="navlink" />
        </li>
      ))}
    </ul>
  );
}

export default NavList;
