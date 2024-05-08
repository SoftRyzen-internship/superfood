import Done from '../../../../public/icons/Done.svg';
import { AdvantageItemProps } from './AdvantageItem.types';

function AdvantageItem({ text }: AdvantageItemProps) {
  return (
    <li className="list-none flex gap-5 items-center font-geologica fontSize-medium color-black">
      <Done />
      {text}
    </li>
  );
}

export default AdvantageItem;
