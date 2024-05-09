import Done from '@/../public/icons/Done.svg';
import { AdvantageItemProps } from './AdvantageItem.types';

function AdvantageItem({ text }: AdvantageItemProps) {
  return (
    <li className="list-none flex gap-5 items-center font-geologica fontSize-medium font-light color-black xl:fontSize-large">
      <div>
        <Done width={24} height={24} className="w-6 h-6 xl:w-7 xl:h-7" />
      </div>
      <p>{text}</p>
    </li>
  );
}

export default AdvantageItem;
