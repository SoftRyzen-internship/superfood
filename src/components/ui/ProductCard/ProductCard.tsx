import Image from 'next/image';

import Button from '../Button';

// import { ProductCardProps } from './ProductCard.types'; типи для даних які будуть передаватися

import style from './ProductCard.module.css';

//дані тестові, справжні будуть прийматися пропсами з слайдера

function ProductCard() {
  return (
    //не добавила клас контейнеру бо буде на слайді
    <div className="bg-darkGreen flex flex-col items-center w-full main">
      <div className={` relative  mb-4 flex justify-center md:mb-5 `}>
        <Image
          src="/images/products/sprouted-grains-of-beans.webp"
          alt=""
          width={311}
          height={286}
          className={`${style.ProductBg} w-[311px] h-[286px]  md:w-[380px] md:h-[350px] xl:w-[407px] xl:h-[382px]`}
        />
        <Image
          src="/images/products/beans.webp"
          alt=""
          width={125}
          height={69}
          className={` absolute right-32 bottom-0 w-[125px] h-[69px] md:right-40 md:w-[156px] md:h-[85px] xl:w-[181px] xl:h-[99px] xl:right-[185px]`}
        />
      </div>
      <h2 className="text-roboto font-bold text-[22px] leading-[1.15] uppercase  text-white mb-3 md:text-lightLarge xl:mb-3.5 xl:text-3xl ">
        ПРОРОЩЕНІ ЗЕРНА БОБОВИХ
      </h2>
      <div className="mb-[38px] flex gap-x-3 gap-y-2 flex-wrap justify-center w-[312px] xl:mb-10">
        {[
          'Джерело білка',
          'Фолієва кислота',
          'Антиоксиданти',
          'Клітковина',
        ].map((item, id) => (
          <span
            key={id}
            className="text-roboto text-sm font-bold leading-[1.15] uppercase  text-accent xl:text-light"
          >
            {item}
          </span>
        ))}
      </div>
      {/*буде перероблено на посилання як тільки будуть готові посилання*/}
      <Button label="детальніше" variant="primary2" />
    </div>
  );
}

export default ProductCard;
