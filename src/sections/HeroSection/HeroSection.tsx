import Image from 'next/image';
import ScrollLink from '@/components/ui/ScrollLink';
import styles from './HeroSection.module.css';
import heroSection from '@/data/heroSection.json';
import HeroParallax from '../HeroParallax/HeroParallax';

function HeroSection() {
  return (
    <section
      className={`bg-lightGreen ${styles.bgHero} pt-[88px] pb-[30px] md:pt-[152px] md:pb-[76px] xl:pt-[148px] xl:pb-[100px]`}
    >
      <div className="container">
        <h1 className="title w-[328px] mx-auto mb-6 md:w-[597px] md:mb-10 xl:w-[755px] xl:mb-7">
          {heroSection.title}
        </h1>
        <Image
          className="mx-auto mb-6 w-[328px] h-[234px] md:w-[700px] md:h-[499px] md:mb-16 xl:w-[888px] xl:h-[633px] xl:mb-[91px] xl:hidden"
          src={heroSection.src}
          width={888}
          height={633}
          priority
          alt={heroSection.alt}
        />
        <HeroParallax />
        <p className="font-geologica text-black text-center text-light font-light tracking-[-0.32px] mb-6 md:w-[552px] md:mx-auto md:text-lightLarge md:mb-10 md:tracking-[-0.48px] xl:w-[799px] xl:text-extraLarge xl:mb-16 xl:tracking-[-0.64px]">
          {heroSection.description}
        </p>
        <div className="md:flex md:justify-center">
          <ScrollLink
            label={heroSection.label}
            href={heroSection.to}
            variant={'primary'}
            className={
              'w-full text-[18px] leading-[1.3] md:w-[253px] xl:w-[274px] xl:text-[20px] xl:leading-[1.3]'
            }
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
