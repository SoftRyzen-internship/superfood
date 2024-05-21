'use client';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { getPhones } from '../../../../sanity/requests';
import { Phone, PhoneProps, PhoneResponse } from './PhoneContacts.types';

function PhoneContacts({ location, classNames: additionalClasses }: PhoneProps) {
  const [contacts, setContacts] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones().then((phones: PhoneResponse[]) => {
      if (phones && phones.length > 0) {
        const phoneData: Phone[] = phones.flatMap((phone) => [
          { country: phone.phoneUA.country, phone: phone.phoneUA.phone },
          { country: phone.phoneLT.country, phone: phone.phoneLT.phone },
        ]);
        setContacts(phoneData);
      }
    });
  }, []);

  const PhoneStyles =
    location === 'contacts'
      ? 'font-geologica text-black font-light text-[18px] leading-[24.3px] md:text-[20px] md:leading-[27px] xl:text-[26px] xl:leading-[35.1px] hover:text-green'
      : 'font-geologica text-lightGreen font-extralight text-[14px] leading-[18.9px] text-center md:font-[250] md:text-[16px] md:leading-[22.4px] hover:text-white';

  const PhoneClasses = classNames(
    'cursor-pointer inline-block transition tracking-[-0.02em] flex',
    PhoneStyles,
    additionalClasses
  );

  const PhoneStylesGap = location === 'contacts' ? 'gap-4' : 'gap-2';

  const PhoneClassesGap = classNames('flex flex-col', PhoneStylesGap);

  return (
    <div className={PhoneClassesGap}>
      {contacts.map((contact) => (
        <div key={contact.phone} className={PhoneClasses}>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <span>&nbsp;|&nbsp;</span>
          <p>{contact.country}</p>
        </div>
      ))}
    </div>
  );
}

export default PhoneContacts;
