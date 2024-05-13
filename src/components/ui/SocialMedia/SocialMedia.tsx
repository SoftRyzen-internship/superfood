import classNames from 'classnames';

import Telegram from '/public/icons/Telegram.svg';
import Facebook from '/public/icons/Facebook.svg';

import { SocialMediaProps } from './SocialMedia.types';

import socialMedia from '@/data/socialMedia.json';

function SocialMedia({ section = 'menu', className }: SocialMediaProps) {
  const iconClass = classNames(
    section === 'menu' && 'w-6 h-6 md:w-10 md:h-10',
    section === 'contacts' && 'w-9 h-9  md:w-10 md:h-10',
    section === 'footer' && 'w-8 h-8 xl:w-10 xl:h-10'
  );
  return (
    <ul className={classNames('flex gap-5', className && className)}>
      {socialMedia.map(({ name, link }, index) => (
        <li key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`відкрити ${name}`}
            className={classNames(
              'rounded-full flex justify-center items-center transition-colors',
              section === 'menu' &&
                'w-10 h-10 bg-white hover:bg-strokeGreen  focus:bg-strokeGreen   md:w-[72px] md:h-[72px]',
              section === 'contacts' &&
                'w-16 h-16 bg-white hover:bg-strokeGreen  focus:bg-strokeGreen  md:w-[72px] md:h-[72px]',
              section === 'footer' &&
                'w-14 h-14 bg-strokeGreen hover:bg-white focus:bg-white xl:w-[72px] xl:h-[72px]'
            )}
          >
            {name === 'facebook' ? (
              <Facebook
                width={24}
                height={24}
                className={iconClass}
                aria-label="відкрити facebook"
              />
            ) : (
              <Telegram
                width={24}
                height={24}
                className={iconClass}
                aria-label="відкрити telegram"
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
