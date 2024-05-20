import React from 'react';

import ScrollLink from '@/components/ui/ScrollLink/';

import navList from '@/data/navlist.json';

export interface NavListProps {
  close?: () => void;
}

function NavList({ close }: NavListProps) {
  return (
    <ul className="flex flex-col gap-6 items-center md:gap-8 xl:flex-row">
      {navList.map(({ id, title, sectionId }) => (
        <li key={id}>
          <ScrollLink
            label={title}
            href={`#${sectionId}`}
            variant="navlink"
            onClick={close}
          />
        </li>
      ))}
    </ul>
  );
}

export default NavList;
