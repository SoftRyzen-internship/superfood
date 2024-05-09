import React from 'react';

import ScrollButton from '@/components/ui/ScrollButton/ScrollButton';

import navList from '@/data/navlist.json';

function NavList() {
  return (
    <ul className="flex flex-col gap-6 items-center md:gap-8 xl:flex-row">
      {navList.map(({ id, title, sectionId }) => (
        <li key={id}>
          <ScrollButton label={title} to={sectionId} variant="navlink" />
        </li>
      ))}
    </ul>
  );
}

export default NavList;
