'use client';

import React from 'react';
import Image from 'next/image';
import Plx from 'react-plx';

import heroSection from '@/data/heroSection.json';

const parallaxData = [
  {
    start: 0,
    end: 250,
    properties: [
      {
        startValue: 0.95,
        endValue: 1.1,
        duration: 500,
        property: 'scale',
      },
    ],
  },
];

const parallaxDataLeftPart = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: -180,
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

const parallaxDataRightPart = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 300,
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

function HeroParallax() {
  return (
    <div className="hidden xl:block">
      <Plx
        className="flex justify-center items-center"
        parallaxData={parallaxDataLeftPart}
      >
        <Image
          className="absolute top-[30px] left-[340px]"
          src={heroSection.srcVegetablesLeft}
          width={347}
          height={508}
          priority
          alt={heroSection.alt}
        />
      </Plx>

      <Plx
        className="flex justify-center items-center"
        parallaxData={parallaxDataRightPart}
      >
        <Image
          className="absolute top-[30px] left-[340px]"
          src={heroSection.srcVegetablesRight}
          width={389}
          height={561}
          priority
          alt={heroSection.alt}
        />
      </Plx>

      <Plx
        className="flex justify-center items-center"
        parallaxData={parallaxData}
      >
        <Image
          className="mx-auto mb-6 w-[328px] h-[234px] md:w-[700px] md:h-[499px] md:mb-16 xl:w-[380px] xl:h-[592px] xl:mb-[91px]"
          src={heroSection.srcParallax}
          width={592}
          height={380}
          priority
          alt={heroSection.alt}
        />
      </Plx>
    </div>
  );
}

export default HeroParallax;
