import { Tab, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import classNames from 'classnames';
import Plus from '@/../public/icons/Plus.svg';
import Minus from '@/../public/icons/Minus.svg';
import { AccordionItemProps } from './AccordionItem.types';

function AccordionItem({ titleItem, description, openFirst = false, info }: AccordionItemProps) {
  return openFirst ? (
    <Tab as={'li'} className={'outline-none'}>
      {({ selected }) => (
        <div
          className={classNames('rounded-xl p-6 md:px-8', {
            'bg-white border border-solid border-strokeLightGreen': selected,
            'bg-input': !selected,
          })}
        >
          <div className="font-roboto font-bold uppercase flex justify-between items-center text-left w-full text-black text-[18px] leading-[1.30] gap-4 md:text-[20px] md:gap-10 xl:text-[26px]">
            {titleItem}
            <div>
              {selected ? <Minus width={22} height={22} /> : <Plus width={22} height={22} />}
            </div>
          </div>
          {selected && (
            <p className="font-geologica font-light text-black text-light tracking-[-0.32px] md:text-medium md:tracking-[-0.36px] xl:text-[20px] xl:tracking-[-0.4px] mt-4 xl:mt-3">
              {description}
            </p>
          )}
        </div>
      )}
    </Tab>
  ) : (
    <Disclosure as="li">
      {({ open }) => (
        <div
          className={classNames(
            'rounded-xl border border-solid border-strokeLightGreen p-4 md:py-[18px] md:px-8 xl:py-6',
            {
              'bg-white': open,
              'bg-lightGreen': !open,
            }
          )}
        >
          <DisclosureButton className="font-roboto font-bold uppercase flex justify-between items-center text-left w-full text-green text-[14px] leading-[1.15] gap-10 md:text-[16px] md:leading-[1.30] xl:text-[20px]">
            {titleItem}
            <div>{open ? <Minus width={22} height={22} /> : <Plus width={22} height={22} />}</div>
          </DisclosureButton>
          <DisclosurePanel className="font-geologica font-light text-black text-[14px] leading-[1.35] tracking-[-0.28px] mt-4 md:text-light md:tracking-[-0.32px] xl:text-medium xl:tracking-[-0.36px]">
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
  );
}

export default AccordionItem;
