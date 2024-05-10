import React from 'react';

import { BenefitsCards } from './CardBenefits.types';

function CardsBenefits({ id, icon, text }: BenefitsCards) {
  return (
    <li
      key={id}
      className="flex flex-col items-center w-full md:w-[456px] xl:w-[591px] text-center"
    >
      {icon}
      <p className="font-geologica text-[18px] font-light leading-[24.3px] md:text-2xl	md:leading-[32.4px] xl:text-[32px] xl:leading-[43.2px]">
        {text}
      </p>
    </li>
  );
}

export default CardsBenefits;
