import Done from '@/../public/icons/Done.svg';
import { AdvantageItemProps } from './AdvantageItem.types';
import item from '@/data/advantageItem.json';

function AdvantageItem({ text }: AdvantageItemProps) {
  return (
    <li className="list-none flex gap-5 items-center font-geologica fontSize-medium font-light color-black xl:fontSize-large">
      <div>
        <Done className="w-6 h-6 xl:w-7 xl:h-7" />
      </div>
      <p>{text}</p>
    </li>
  );
}

export default AdvantageItem;
