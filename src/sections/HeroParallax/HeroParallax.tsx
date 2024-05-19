import React from 'react';

import Plx from 'react-plx';

export interface HeroParallaxProps {}

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'scale',
      },
    ],
  },
];

function HeroParallax({}: HeroParallaxProps) {
  return (
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
      <div>Test Parallax</div>
    </Plx>
  );
}

export default HeroParallax;
