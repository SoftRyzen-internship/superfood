import { FC } from 'react';

import Image from 'next/image';

import heroSection from '@/data/heroSection.json';

const HeroSection: FC = () => {
  return (
    <section className="bg-lightGreen bg-bg_yellow bg-cover pt-[88px] pb-[30px] relative md:pt-[152px] md:pb-[76px] xl:pt-[148px] xl:pb-[100px]">
      <div className="container">
        <Image
          className="absolute bottom-[-20%] left-[-58.5%] h-[460px] min-w-[516px] md:h-[755px] md:min-w-[847px]"
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
            className="mx-auto w-[328px] md:w-[700px] xl:w-[888px]"
            src={heroSection.src}
            width={888}
            height={633}
            priority
            alt={heroSection.alt}
          />
          <p className="font-geologica text-black text-center text-light font-light tracking-[-0.32px] mb-6 mt-[-77px] md:w-[552px] md:mx-auto md:text-lightLarge md:mb-10 md:tracking-[-0.48px] md:mt-[-180px] xl:w-[799px] xl:text-extraLarge xl:mb-16 xl:tracking-[-0.64px]">
            {heroSection.description}
          </p>
          <button className="h-[63px] bg-green">{heroSection.textBtn}</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
