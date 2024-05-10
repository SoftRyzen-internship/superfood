import { FC } from 'react';

import Image from 'next/image';

import heroSection from '@/data/heroSection.json';
import ScrollLink from '@/components/ui/ScrollLink';

const HeroSection: FC = () => {
  return (
    <section className="bg-lightGreen bg-bg_yellow bg-cover pt-[88px] pb-[30px] relative md:pt-[152px] md:pb-[76px] xl:pt-[148px] xl:pb-[100px] ">
      <div className="container">
        <Image
          className="absolute bottom-[-17%] left-[-58.5%] h-[460px] min-w-[516px] md:h-[755px] md:min-w-[847px] md:bottom-[-13%] md:left-[-22%] xl:h-[1306px] xl:min-w-[1465px] xl:bottom-[-36%] xl:left-[-10%]"
          src={heroSection.srcBg}
          width={1465}
          height={1306}
          priority
          alt={heroSection.altBg}
        />
        <div className="relative z-10">
          <h1 className="title w-[328px] mx-auto mb-6 md:w-[597px] md:mb-10 xl:w-[755px] xl:mb-7">
            {heroSection.title}
          </h1>
          <Image
            className="mx-auto w-[328px] h-[337px] md:w-[700px] md:h-[700px] xl:w-[888px] xl:h-[900px]"
            src={heroSection.src}
            width={888}
            height={633}
            priority
            alt={heroSection.alt}
          />
          <p className="font-geologica text-black text-center text-light font-light tracking-[-0.32px] mb-6 mt-[-77px] md:w-[552px] md:mx-auto md:text-lightLarge md:mb-10 md:tracking-[-0.48px] md:mt-[-140px] xl:w-[799px] xl:text-extraLarge xl:mb-16 xl:tracking-[-0.64px] xl:mt-[-180px]">
            {heroSection.description}
          </p>
          <div className="md:flex md:justify-center">
            <ScrollLink
              label={heroSection.label}
              href={heroSection.to}
              variant={'primary'}
              className={'w-full md:w-[253px] xl:w-[274px]'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
