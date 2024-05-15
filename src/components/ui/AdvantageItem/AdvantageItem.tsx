import Done from '@/../public/icons/Done.svg';
import { AdvantageItemProps } from './AdvantageItem.types';

function AdvantageItem({ text }: AdvantageItemProps) {
  return (
    <li className="list-none flex gap-5 items-center">
      <div>
        <Done width={24} height={24} className="w-6 h-6 stroke-green xl:w-7 xl:h-7" />
      </div>
      <div>
        {text.map(item => {
          return (
            <p
              key={item}
              className=" font-geologica
        text-medium
        font-light
        color-black
        xl:text-large"
            >
              {item}
            </p>
          );
        })}
      </div>
    </li>
  );
}

export default AdvantageItem;
