'use client';

import React from 'react';
import Image from 'next/image';
import Plx from 'react-plx';

import contactsData from '@/data/contacts.json';

const parallaxData = [
  {
    start: 'self',
    end: '.end-form-parallax',
    properties: [
      {
        startValue: 0,
        endValue: -150,
        duration: 500,
        property: 'translateX',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
        duration: 500,
      },
    ],
  },
];

function FormParallax() {
  return (
    <Plx
      className="absolute  top-[55px] left-[-10px] hidden xl:block"
      parallaxData={parallaxData}
    >
      <Image
        src={contactsData.src}
        width={307}
        height={384}
        alt={contactsData.alt}
      />
    </Plx>
  );
}

export default FormParallax;
