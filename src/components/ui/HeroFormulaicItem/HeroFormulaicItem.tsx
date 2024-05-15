import Done from '@/../public/icons/Done.svg';
import { HeroFormulaicItemProps } from './HeroFormulaicItem.types';

function HeroFormulaicItem({ text }: HeroFormulaicItemProps) {
  return (
    <ul className="flex gap-4 flex-wrap mb-10 md:mb-12 xl:mb-16">
      {text.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <Done width={16} height={16} className="w-4 h-4 stroke-strokeGreen" />
          <p className="font-roboto text-strokeGreen font-bold uppercase text-[14px] leading-[1.15] xl:text-[16px]">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default HeroFormulaicItem;
