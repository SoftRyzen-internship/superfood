import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import data from '../../data/Benefits.json';
import CardsBenefits from '@/components/ui/CardsBenefits/CardsBenefits';

import BenefitsLightning from '../../../public/icons/BenefitsLightning.svg';
import BenefitsPlant from '../../../public/icons/BenefitsPlant.svg';
import BenefitsVagetables from '../../../public/icons/BenefitsVagetables.svg';

function Benefits() {
  type IconsBenefits = {
    [key: number]: JSX.Element;
  };

  const IconsStyles = classNames(
    'transition w-[100px] h-[100px] md:w-[130px] md:h-[130px] xl:w-[160px] xl:h-[160px] '
  );

  const IconsBenefits: IconsBenefits = {
    1: <BenefitsPlant className={IconsStyles} />,
    2: <BenefitsLightning className={IconsStyles} />,
    3: <BenefitsVagetables className={IconsStyles} />,
  };

  return (
    <section id="benefits" className="bg-white overflow-hidden py-[60px] md:py-20 xl:py-40">
      <div className="relative">
        <Image
          src="/images/benefits/FirstFoodBen@2x.webp"
          width={276}
          height={266}
          className="absolute pt-[57px] left-[-152px] xl:hidden smOnly:hidden "
          alt="First Food Benefits"
        />
         <Image
          src="/images/benefits/FirstFoodBen@2x.webp"
          width={345.66}
          height={332.25}
          className="absolute pt-[65px] left-[-51.16px] mdOnly:hidden"
          alt="First Food Benefits"
        />
        <Image
          src="/images/benefits/SecondFoodBen@2x.webp"
          width={292}
          height={293}
          className="absolute pt-[315px] right-[-168px]  xl:hidden smOnly:hidden"
          alt="Second Food Benefits"
        />
        <Image
          src="/images/benefits/SecondFoodBen@2x.webp"
          width={372}
          height={373}
          className="absolute pt-[444px] right-[-52px] mdOnly:hidden"
          alt="Second Food Benefits"
        />
        <Image
          src="/images/benefits/ThirthFoodBen@2x.webp"
          width={263}
          height={221}
          className="absolute pt-[617px] left-[-107px] xl:hidden smOnly:hidden"
          alt="Third Food Benefits"
        />
        <Image
          src="/images/benefits/ThirthFoodBen@2x.webp"
          width={335}
          height={282}
          className="absolute pt-[896px] left-[-22px] mdOnly:hidden"
          alt="Third Food Benefits"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="section-title transition text-center pb-9 md:pb-16 xl:pb-14">
            {data.title}
          </h2>
          <ul className="flex flex-col gap-[32px] md:gap-[60px] xl:gap-[120px] items-center">
            {data.cards.map(card => (
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
