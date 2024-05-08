import React from 'react';
import classNames from 'classnames';

import data from '../../data/Benefits.json';
import CardsBenefits from '@/components/ui/CardsBenefits/CardsBenefits';

import BenefitsLightning from '../../../public/icons/BenefitsLightning.svg';
import BenefitsPlant from '../../../public/icons/BenefitsPlant.svg';
import BenefitsVagetables from '../../../public/icons/BenefitsVagetables.svg';
import Image from 'next/image';

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
    <section id="benefits">
      <Image
          src="/images/FirstFoodBenefits@2x.webp"
          width={345.66}
          height={332.25}
          className='absolute top-[57px] left-[-152px] xl:top-[65px] xl:left-[-51.16px] smOnly:hidden'
          alt="First Food Benefits"
        />
        <Image
          src="/images/SecondFoodBenefits@2x.webp"
          width={372}
          height={373}
          className='absolute top-[363px] right-[-168px] xl:top-[444px] xl:right[-52px] smOnly:hidden'
          alt="Second Food Benefits"
        />
        <Image
          src="/images/ThirthFoodBenefits@2x.webp"
          width={335}
          height={282}
          className='absolute top-[617px] left-[-107px] xl:top-[896px] xl:left-[-15px] smOnly:hidden'
          alt="Thirth Food Benefits"
        />
      <div className="flex flex-col justify-center items-center">
        <h2 className="section-title transition text-center pb-9 md:pb-16 xl:pb-14">
          {data.title}
        </h2>
        <ul className="flex flex-col gap-8 md:gap-15 xl:gap-30 items-center">
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
    </section>
  );
}

export default Benefits;
