import React from 'react';
import classNames from 'classnames';

import CardsBenefits from '@/components/ui/CardsBenefits/CardsBenefits';
import { IconsBenefits } from '@/types/Benefits.types';

import data from '../../data/Benefits.json';
import BenefitsLightning from '../../../public/icons/BenefitsLightning.svg';
import BenefitsPlant from '../../../public/icons/BenefitsPlant.svg';
import BenefitsVagetables from '../../../public/icons/BenefitsVagetables.svg';

function Benefits() {

  const IconsStyles = classNames(
    'transition w-[100px] h-[100px] md:w-[130px] md:h-[130px] xl:w-[160px] xl:h-[160px] '
  );

  const IconsBenefits: IconsBenefits = {
    1: <BenefitsPlant className={IconsStyles} width="100" height="100" />,
    2: <BenefitsLightning className={IconsStyles} width="100" height="100" />,
    3: <BenefitsVagetables className={IconsStyles} width="100" height="100" />,
  };

  return (
    <section
      id="benefits"
      className="bg-white py-[60px] overflow-hidden md:py-20 xl:py-40"
    >
      <div className="relative">
        <div
          className="absolute bg-[url('/images/benefits/FirstFoodBen@2x.webp')] w-[276px] h-[266px] top-[57px] left-[-152px] xl:w-[345.66px] xl:h-[332.25px] xl:top-[65px] xl:left-[-51.6px] bg-contain bg-no-repeat smOnly:hidden transition"
        />
        <div
          className="absolute bg-[url('/images/benefits/SecondFoodBen@2x.webp')] w-[292px] h-[293px] top-[363px] right-[-198px] xl:w-[372px] xl:h-[373px] xl:top-[444px] xl:right-[-52px] bg-contain bg-no-repeat smOnly:hidden transition"
        />
        <div
          className="absolute bg-[url('/images/benefits/ThirthFoodBen@2x.webp')] w-[263px] h-[221px] top-[617px] left-[-138px] xl:w-[335px] xl:h-[282px] xl:top-[896px] xl:left-[-15px] bg-contain bg-no-repeat smOnly:hidden transition"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title transition text-center pb-9 md:pb-16 xl:pb-14">
            {data.title}
          </h2>
          <ul className="flex flex-col gap-[32px] md:gap-[60px] xl:gap-[120px] items-center">
            {data.cards.map((card) => (
              <CardsBenefits
                key={card.id}
                id={card.id}
                icon={IconsBenefits[card.id]}
                text={card.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
