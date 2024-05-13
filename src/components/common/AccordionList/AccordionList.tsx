'use client';

import { useState } from 'react';
import { TabGroup, TabList } from '@headlessui/react';
import AccordionItem from '@/components/ui/AccordionItem';
import { AccordionListProps } from './AccordionList.types';

function AccordionList({ items, openFirst }: AccordionListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return openFirst ? (
    <TabGroup manual selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList as={'ul'} className="flex flex-col gap-4 xl:w-[800px] xl:mx-auto">
        {items.map(item => (
          <AccordionItem
            key={item.id}
            titleItem={item.titleItem}
            description={item.description}
            openFirst={openFirst}
          />
        ))}
      </TabList>
    </TabGroup>
  ) : (
    <ul className="flex flex-col gap-4">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          titleItem={item.titleItem}
          description={item.description}
          info={item.info}
          openFirst={openFirst}
        />
      ))}
    </ul>
  );
}

export default AccordionList;
