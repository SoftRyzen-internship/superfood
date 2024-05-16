import Image from 'next/image';
import ScrollLink from '@/components/ui/ScrollLink';
import HeroFormulaicItem from '@/components/ui/HeroFormulaicItem';
import Line from '@/../public/icons/Line.svg';
import hfsData from '@/data/heroFormulaicSection.json';
import { HeroFormulaicSectionProps } from './HeroFormulaicSection.types';
import data from '@/data/test.json';

function HeroFormulaicSection({ productId, productData }: HeroFormulaicSectionProps) {
  const hfs = hfsData.find(item => item.id === productId);
  const price = data.find(item => item.product === productId);

  if (!hfs || !productData) {
    return null;
  }

  return (
    <section className="pt-[120px] pb-[60px] md:pt-[152px] md:pb-[80px] xl:pt-[133px] xl:pb-[65px]">
      <div className="container xl:flex xl:flex-row-reverse xl:justify-between">
        <Image
          className="mx-auto w-[234px] h-[251px] mb-8 md:w-[380px] md:h-[408px] md:mb-10 xl:w-[561px] xl:h-[602px] xl:mb-0 xl:mx-0"
          src={hfs.src}
          width={561}
          height={602}
          priority
          alt={hfs.alt}
        />
        <div>
          <h1 className="font-roboto text-green font-bold uppercase text-[22px] leading-[1.15] mb-3 md:text-[32px] xl:pt-[69px] xl:text-[40px] xl:mb-4">
            {hfs.title}
          </h1>
          <div className="font-roboto text-black font-bold uppercase text-[18px] leading-[1.30] flex gap-2 items-center mb-6 md:text-[20px] md:mb-8 xl:text-[26px] xl:gap-3 xl:mb-10">
            <p className="md:mr-2 xl:mr-0">{price?.price} ₴</p>
            <Line width={1} height={16} className="w-px h-3 stroke-button md:h-4 md:stroke-grey" />
            <p className="text-grey">{hfs.weight}</p>
          </div>
          <h3 className="font-roboto text-black font-bold uppercase text-[18px] leading-[1.30] mb-3 md:text-[20px] xl:text-[26px]">
            {hfs.subtitle}
          </h3>
          <p className="font-geologica text-black font-light text-[14px] leading-[1.35] tracking-[-0.28px] mb-6 md:leading-[1.40] md:mb-8 md:w-[634px] xl:text-[16px] xl:font-[250] xl:tracking-[-0.32px] xl:mb-12 xl:w-[591px]">
            {hfs.description}
          </p>
          <HeroFormulaicItem text={hfs.contains} />
          <div className="">
            <ScrollLink
              label={hfs.label}
              href={hfs.to}
              variant={'primary'}
              className={
                'w-full text-[20px] leading-[1.25] md:text-[20px] md:leading-[1.25] md:w-[274px] xl:w-[274px] xl:text-[20px] xl:leading-[1.25]'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFormulaicSection;
