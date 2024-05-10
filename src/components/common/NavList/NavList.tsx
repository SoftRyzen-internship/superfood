import React from 'react';

import LinkButton from '@/components/ui/ScrollButton/LinkButton';

import navList from '@/data/navlist.json';

function NavList() {
  return (
    <ul className="flex flex-col gap-6 items-center md:gap-8 xl:flex-row">
      {navList.map(({ id, title, sectionId }) => (
        <li key={id}>
          <LinkButton label={title} href={`#${sectionId}`} variant="navlink" />
        </li>
      ))}
    </ul>
  );
}

export default NavList;
