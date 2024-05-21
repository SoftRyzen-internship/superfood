import Image from 'next/image';

import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';
import Form from '@/components/ui/Form';
import FormParallax from '@/components/ui/FormParallax/FormParallax';

import contacts from '@/data/contacts.json';
import common from '@/data/common.json';

import style from './Contacts.module.css';

function Contacts() {
  const { title, owner, ownerImage, ownerText, ownerPosition } = contacts;
  return (
    <section
      id="contacts"
      className={`bg-lightGreen relative  ${style.contactsBg}`}
    >
      <div
        className={`container smOnly:pb-0 py-[60px] md:py-20 xl:py-[120px] xl:flex xl:gap-[272px] ${style.vegetablesBg}`}
      >
        <div>
          <h2 className="font-roboto font-bold text-lightLarge leading-[1.15] uppercase text-center text-green mb-10 md:text-[40px] xl:text-[68px] xl:mb-[47px] xl:text-start">
            {title}
          </h2>
          <div className="md:flex md:gap-16 md:justify-center  md:mb-10 xl:block">
            <div>
              <PhoneContacts
                location="contacts"
                classNames="mb-4 justify-center md:justify-start"
              />
              <a
                href={`mailto:${common.email}`}
                className="font-geologica font-light text-medium tracking-[-0.02em] text-black text-center transition-colors hover:text-green focus:text-green block mb-8 md:text-start md:text-xl md:leading-[1.35] xl:text-large xl:mb-10"
              >
                {common.email}
              </a>
              <SocialMedia
                section="contacts"
                className="mb-8  justify-center md:justify-start xl:mb-[70px]"
              />
            </div>
            <span className="end-animation-contacts" />
            <div>
              <p
                className={`smOnly:mx-auto font-geologica font-light text-light tracking-[-0.02em] text-black p-6 rounded-xl bg-[#dcf2b4] w-[312px] relative ${style.lowPartOfReview}  mb-6 md:w-[303px] xl:mb-27px `}
              >
                {ownerText}
              </p>
              <div className="smOnly:mb-[60px] smOnly:w-[312px] smOnly:mx-auto flex gap-3 items-center ">
                <Image
                  src={ownerImage}
                  alt={owner}
                  width={64}
                  height={64}
                  className="md:w-[72px] md:h-[72px]"
                />
                <div>
                  <h3 className="font-geologica font-medium text-light tracking-[-0.02em] text-green mb-[2px] md:text-medium">
                    {owner}
                  </h3>
                  <p className="font-geologica font-light text-sm leading-[1.35] tracking-[-0.02em] text-black">
                    {ownerPosition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="smOnly:hidden relative">
          <Form />
          <FormParallax />
        </div>
      </div>
      <div className="md:hidden">
        <Form />
      </div>
    </section>
  );
}

export default Contacts;
