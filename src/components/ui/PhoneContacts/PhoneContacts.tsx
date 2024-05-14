import React from 'react';
import data from '@/data/phoneContacts.json';
import { PhoneProps } from './PhoneContacts.types';
import classNames from 'classnames';

function PhoneContacts({ location, classNames: additionalClasses }: PhoneProps) {
  const PhoneStyles =
    location === 'contacts'
      ? 'font-geologica text-black font-light text-[18px] leading-[24.3px]  md:text-[20px] md:leading-[27px] xl:text-[26px] xl:leading-[35.1px] hover:text-green'
      : 'font-geologica text-lightGreen font-extralight text-[14px] leading-[18.9px] text-center md:font-[250] md:text-[16px] md:leading-[22.4px] hover:font-light hover:text-white';

  const PhoneClasses = classNames(
    'cursor-pointer inline-block transition tracking-[-0.02em] flex',
    PhoneStyles,
    additionalClasses
  );

  const PhoneStylesGap = location === 'contacts' ? 'gap-4' : 'gap-2';

  const PhoneClassesGap = classNames(
    'flex flex-col',
    PhoneStylesGap
  );

  return (
    <div className={PhoneClassesGap}>
      {data.contacts.map(contact => (
        <div key={contact.key} className={PhoneClasses}>
          <a href={`tel:${contact.number}`}>{contact.number}</a>
          <span>&nbsp;|&nbsp;</span>
          <p>{contact.country}</p>
        </div>
      ))}
    </div>
  );
}

export default PhoneContacts;
