'use client';

import { FC, useState } from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import classNames from 'classnames';
import Plus from '@/../public/icons/Plus.svg';
import Minus from '@/../public/icons/Minus.svg';
import { AccordionProps } from './types';

const Accordion: FC<AccordionProps> = ({
  titleItem,
  description,
  index,
  openFirst = false,
  variant,
  info,
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleVisibility = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <li>
      <Disclosure as="div" defaultOpen={openFirst}>
        {({ open }) => (
          <div
            className={classNames(
              'rounded-xl',
              variant === 'home' && open
                ? 'bg-white p-6 border border-solid border-strokeLightGreen md:px-8 xl:w-[800px] xl:mx-auto'
                : 'bg-input p-6 md:px-8 xl:w-[800px] xl:mx-auto',
              variant === 'formulaic' && open
                ? 'bg-white border border-solid border-strokeLightGreen p-4 md:py-[18px] md:px-8 xl:py-6'
                : 'bg-lightGreen border border-solid border-strokeLightGreen p-4 md:py-[18px] md:px-8 xl:py-6'
            )}
          >
            <DisclosureButton
              className={classNames(
                'font-roboto font-bold uppercase flex justify-between items-center text-left w-full',
                variant === 'home' &&
                  'text-black text-medium gap-4 md:text-[20px] md:leading-[1.30] md:gap-10 xl:text-[26px]',
                variant === 'formulaic' &&
                  'text-green text-[14px] leading-[1.15] gap-10 md:text-[16px] md:leading-[1.30] xl:text-[20px]'
              )}
              onClick={() => {
                () => toggleVisibility(index);

                console.log(index);
                console.log(open);
              }}
            >
              {titleItem}
              <div>{open ? <Minus width={22} height={22} /> : <Plus width={22} height={22} />}</div>
            </DisclosureButton>
            <DisclosurePanel
              className={classNames(
                'font-geologica font-light text-black',
                variant === 'home' &&
                  'text-light tracking-[-0.32px] md:text-medium md:tracking-[-0.36px] xl:text-[20px] xl:tracking-[-0.4px] mt-4 xl:mt-3',
                variant === 'formulaic' &&
                  'text-[14px] leading-[1.35] tracking-[-0.28px] mt-4 md:text-light md:tracking-[-0.32px] xl:text-medium xl:tracking-[-0.36px]'
              )}
            >
              {description}
              {info?.map(item => (
                <div
                  key={item.id}
                  className="font-geologica text-black text-[14px] leading-[1.35] tracking-[-0.28px] md:text-light md:tracking-[-0.32px] xl:text-medium xl:tracking-[-0.36px]"
                >
                  <p className="font-medium mt-4 md:mt-3">
                    {item.caption} <span className="font-light">{item.captionText}</span>
                  </p>
                </div>
              ))}
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </li>
  );
};

export default Accordion;
