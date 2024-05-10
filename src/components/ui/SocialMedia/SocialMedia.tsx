import classNames from 'classnames';

import Telegram from '/public/icons/Telegram.svg';
import Facebook from '/public/icons/Facebook.svg';

import { SocialMediaProps } from './SocialMedia.types';

import socialMedia from '@/data/socialMedia.json';

function SocialMedia({ section = 'menu' }: SocialMediaProps) {
  const iconClass = classNames(
    'w-6 h-6 md:w-10 md:h-10',
    section === 'contacts' && 'w-9 h-9',
    section === 'footer' && 'w-8 h-8 xl:w-10 xl:h-10'
  );
  return (
    <ul className="flex gap-5">
      {socialMedia.map(({ name, link }, index) => (
        <li key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={classNames(
              'rounded-full w-10 h-10 bg-white flex justify-center items-center transition-colors hover:bg-green focus:bg-green md:w-[72px] md:h-[72px] ',
              section === 'contacts' && 'w-16 h-16 ',
              section === 'footer' &&
                'w-14 h-14 bg-strokeGreen hover:bg-white focus:bg-white '
            )}
          >
            {name === 'Facebook' ? (
              <Facebook className={iconClass} aria-label="open facebook" />
            ) : (
              <Telegram className={iconClass} aria-label="open telegram" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
