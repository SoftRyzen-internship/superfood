import Logo from '@/components/ui/Logo';
import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';
import React from 'react';
import data from '@/data/footer.json';
import GOIT from '../../../public/icons/GoItLogo.svg';
import SoftRyzen from '../../../public/icons/SoftRyzenLogo.svg';

function Footer() {
  return (
    <>
      <footer className="bg-green flex flex-col py-6 pb-4 text-center justify-center xl:py-10">
        <div className="xl:container xl:flex xl:items-center xl:justify-center">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-0">
            <Logo path="footer" classNames="xl:pr-8" />
            <PhoneContacts location="footer" classNames="justify-center" />
            <SocialMedia
              section="footer"
              className="justify-center px-[142px]"
            />
          </div>
          <hr className="w-full mt-4 mb-8 border-strokeGreen xl:hidden" />
          <div className="flex flex-col pb-4  gap-4 text-center font-light text-white text-[14px] leading-[18.9px] md:leading-[19.6px] xl:font-[250] xl:text-start xl:pb-0">
            <a href={data.linkPolicy}>{data.namePolicy}</a>
            <p>{data.footerTextSec}</p>
            <div className="flex flex-col gap-3 md:flex-row justify-center md:gap-4 xl:gap-6">
              <p>{data.footerCreated}</p>
              <div className="flex justify-center gap-4">
                <a href={data.linkGOIT}>
                  <GOIT className="fill-white " />
                </a>
                <a href={data.linkSoftRyzen}>
                  <SoftRyzen className="fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="w-full border-strokeGreen " />
    </>
  );
}

export default Footer;
