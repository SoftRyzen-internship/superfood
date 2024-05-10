import { FC } from 'react';

import faq from '@/data/faq.json';
import { Accordion } from '@/components/ui/Accordion';

const FAQSection: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title mb-8 md:mb-10 xl:mb-[55px]">{faq.title}</h2>
        <ul className="flex flex-col gap-4">
          {faq.items.map((item, index) => (
            <Accordion
              key={item.id}
              index={index}
              titleItem={item.titleItem}
              description={item.description}
              openFirst={index === 0}
              variant={'home'}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
