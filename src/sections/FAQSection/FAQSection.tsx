import { FC } from 'react';

import faq from '@/data/faq.json';
import { Accordion } from '@/components/ui/Accordion';

const FAQSection: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{faq.title}</h2>
        <ul>
          {faq.items.map(item => (
            <Accordion key={item.id} question={item.question} answer={item.answer} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
