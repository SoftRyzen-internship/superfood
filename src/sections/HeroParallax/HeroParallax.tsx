'use client';

import React from 'react';
import Image from 'next/image';

import Plx from 'react-plx';
import heroSection from '@/data/heroSection.json';

export interface HeroParallaxProps {}

const parallaxData = [
  {
    start: 800,
    end: 1400,
    properties: [
      {
        startValue: 0,
        endValue: 360,
        property: 'rotate',
      },
    ],
  },
];

function HeroParallax({}: HeroParallaxProps) {
  return (
    <Plx
      className="container h-700px flex justify-center items-center"
      parallaxData={parallaxData}
    >
      <Image
        className="mx-auto mb-6 w-[328px] h-[234px] md:w-[700px] md:h-[499px] md:mb-16 xl:w-[888px] xl:h-[633px] xl:mb-[91px]"
        src={heroSection.src}
        width={888}
        height={633}
        priority
        alt={heroSection.alt}
      />
    </Plx>
  );
}

export default HeroParallax;
