import Image from 'next/image';

import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';

import contacts from '@/data/contacts.json';

import style from './Contacts.module.css';

function Contacts() {
  const { title, ownerEmail, owner, ownerImage, ownerText, ownerPosition } =
    contacts;
  return (
    <section id="contacts" className="bg-lightGreen container">
      <h2 className="font-roboto font-bold text-lightLarge leading-[1.15] uppercase text-center text-green mb-10">
        {title}
      </h2>
      <PhoneContacts location="contacts" classNames="mb-4 justify-center" />
      <a
        href={ownerEmail}
        className="font-geologica font-light text-medium tracking-[-0.02em] text-black text-center block"
      >
        {ownerEmail}
      </a>
      <SocialMedia section="contacts" className="mb-8 mt-8 justify-center" />
      <div>
        <p
          className={`font-geologica font-light text-light tracking-[-0.02em] text-black p-6 rounded-xl bg-[#dcf2b4] w-[312px] relative ${style.lowPartOfReview} mx-auto mb-6`}
        >
          {ownerText}
        </p>
        <div className="flex gap-3 items-center ">
          <Image src={ownerImage} alt={owner} width={64} height={64} />
          <div>
            <h3 className="font-geologica font-medium text-light tracking-[-0.02em] text-green mb-[2px]">
              {owner}
            </h3>
            <p className="font-geologica font-light text-xs leading-[1.35] tracking-[-0.02em] text-black">
              {ownerPosition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
