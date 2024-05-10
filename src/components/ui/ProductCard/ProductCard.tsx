import Image from 'next/image';

import LinkButton from '../ScrollLink/ScrollLink';

// import { ProductCardProps } from './ProductCard.types'; типи для даних які будуть передаватися

import style from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.types';
import classNames from 'classnames';

function ProductCard({
  img,
  imgBg,
  alt,
  name,
  descriptionItems,
  link,
  buttonText,
}: ProductCardProps) {
  return (
    //не добавила клас контейнеру бо буде на слайді
    <div className="bg-darkGreen flex flex-col items-center w-full main">
      <div className={` relative  mb-4 flex justify-center md:mb-5 `}>
        <Image
          src={img}
          alt={alt}
          width={263}
          height={284}
          className={classNames(
            `${style.ProductBg} md:w-[327px] md:h-[352px] xl:w-[381px] xl:h-[409px]`,
            imgBg === 'beans' && `${style.ProductBgBeans}`,
            imgBg === 'wheat' && `${style.ProductBgWheat}`,
            imgBg === 'vegetables' && `${style.ProductBgVegetables}`,
            imgBg === 'corn' && `${style.ProductBgCorn}`,
            imgBg === 'seaweed' && `${style.ProductBgSeaweed}`
          )}
        />
      </div>
      <h3 className="text-roboto font-bold text-[22px] leading-[1.15] uppercase  text-white mb-3 md:text-lightLarge xl:mb-3.5 xl:text-3xl ">
        {name}
      </h3>
      <div className="mb-[38px] flex gap-x-3 gap-y-2 flex-wrap justify-center w-[312px] xl:mb-10">
        {descriptionItems.map((item, id) => (
          <span
            key={id}
            className="text-roboto text-sm font-bold leading-[1.15] uppercase  text-accent xl:text-light"
          >
            {item}
          </span>
        ))}
      </div>
      <LinkButton label={buttonText} href={link} variant="primary2" />
    </div>
  );
}

export default ProductCard;
