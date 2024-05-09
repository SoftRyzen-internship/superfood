import { FC } from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import classNames from 'classnames';
import Plus from '@/../public/icons/Plus.svg';
import Minus from '@/../public/icons/Minus.svg';
import { AccordionProps } from './types';

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  return (
    <li className="space-y-4">
      <Disclosure>
        <DisclosureButton className="py-2 focus:outline-none focus:ring focus:ring-blue-500">
          {question}
          <Plus />
        </DisclosureButton>
        <DisclosurePanel className="text-gray-500">{answer}</DisclosurePanel>
      </Disclosure>
    </li>
  );
};

export default Accordion;
