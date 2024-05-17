import Image from 'next/image';

import classNames from 'classnames';

import LinkButton from '../ScrollLink/ScrollLink';

import { ProductCardProps } from './ProductCard.types';

import style from './ProductCard.module.css';

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
    <div className="flex flex-col items-center w-full main h-[480px] md:h-[555px] xl:h-[626px]">
      <div className={` relative  mb-4 flex justify-center md:mb-5 `}>
        <Image
          src={img}
          alt={alt}
          width={264}
          height={284}
          className={classNames(
            `md:w-[328px] md:h-[352px] xl:w-[381px] xl:h-[409px]`
          )}
        />
      </div>
      <h3 className="font-roboto font-bold text-[22px] leading-[1.15] uppercase  text-white mb-3 md:text-lightLarge xl:mb-3.5 xl:text-3xl ">
        {name}
      </h3>
      <div className="flex flex-col items-center justify-between h-[144px] xl:h-[148px]">
        <div className="flex gap-x-3 gap-y-2 flex-wrap justify-center w-[312px]">
          {descriptionItems.map((item, id) => (
            <span
              key={id}
              className="font-roboto text-sm font-bold leading-[1.15] uppercase  text-accent xl:text-light"
            >
              {item}
            </span>
          ))}
        </div>
        <LinkButton
          label={buttonText}
          href={link}
          variant="primary2"
          className="smOnly:w-full md:w-[205px]"
        />
      </div>
    </div>
  );
}

export default ProductCard;
