import Image from 'next/image';
import AccordionList from '@/components/common/AccordionList';
import faq from '@/data/faqSection.json';

function FAQSection() {
  return (
    <section className="section overflow-x-clip">
      <div className="container relative">
        <h2 className="section-title mb-8 md:mb-10 xl:mb-[55px]">{faq.title}</h2>
        <AccordionList items={faq.items} />
        <Image
          className="w-[135px] h-[135px] absolute right-[-49px] bottom-[-146px] md:w-[236px] md:h-[236px] md:right-[-75px] md:bottom-[-248px] xl:w-[322px] xl:h-[322px] xl:right-[-179px] xl:bottom-[-226px]"
          src={faq.src}
          width={322}
          height={322}
          alt={faq.alt}
        />
      </div>
    </section>
  );
}

export default FAQSection;
