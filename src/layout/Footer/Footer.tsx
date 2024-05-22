'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import data from '@/data/footer.json';

import GOIT from '@/../public/icons/GoItLogo.svg';
import SoftRyzen from '@/../public/icons/SoftRyzenLogo.svg';

import Logo from '@/components/ui/Logo';
import MovingBaner from '@/components/ui/MovingBaner/MovingBaner';
import PhoneContacts from '@/components/ui/PhoneContacts';
import SocialMedia from '@/components/ui/SocialMedia';

function Footer() {
  const pathname = usePathname();
  const isPolicyPage = pathname === '/policy';
  return (
    <>
      <footer className="bg-green end-form-parallax flex flex-col py-6 pb-4 text-center justify-center xl:py-10 transition">
        <div className="xl:container xl:flex xl:items-center xl:justify-center transition">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-0 transition">
            <Logo path="footer" classNames="xl:mr-8" />
            <PhoneContacts location="footer" classNames="justify-center" />
            <SocialMedia
              section="footer"
              className="justify-center px-[142px] md:mt-2 xl:mt-0"
            />
          </div>
          <hr className="w-full mt-4 mb-8 border-strokeGreen xl:hidden" />
          <div className="flex flex-col pb-4  gap-4 text-center font-extralight text-lightGreen text-[14px] leading-[18.9px] md:leading-[19.6px] xl:font-[250] xl:text-start xl:pb-0 transition">
            <a
              href={isPolicyPage ? data.linkMain : data.linkPolicy}
              className="hover:text-white transition"
            >
              {isPolicyPage ? data.nameHomePage : data.namePolicy}
            </a>
            <p>{data.footerTextSec}</p>
            <div className="flex flex-col gap-3 md:flex-row justify-center md:gap-4 xl:gap-6">
              <p>{data.footerCreated}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={data.linkGOIT}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  aria-label="Відкрити головну сторінку GOIT"
                >
                  <GOIT
                    className="fill-lightGreen hover:fill-white"
                    width={64}
                    height={19}
                  />
                </a>
                <a
                  href={data.linkSoftRyzen}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  aria-label="Відкрити головну сторінку SoftRyzen"
                >
                  <SoftRyzen
                    className="fill-lightGreen hover:fill-white"
                    width={131}
                    height={19}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="w-full border-strokeGreen " />
      <MovingBaner />
    </>
  );
}

export default Footer;
