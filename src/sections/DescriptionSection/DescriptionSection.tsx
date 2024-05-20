import ProductDescription from '@/components/ui/ProductDescription';
import { DescriptionSectionProps } from './DescriptionSection.types';
import ActionActiveComponents from '@/components/ui/ActionActiveComponents';
import PreferenceAction from '@/components/ui/PreferenceAction';
import AccordionList from '@/components/common/AccordionList';
import accData from '@/data/faqFormulaic.json';

function DescriptionSection({ productId }: DescriptionSectionProps) {
  const acc = accData.find(item => item.id === productId);
  const items = acc?.items || [];

  return (
    <section className="section bg-input">
      <div className="container">
        <ul className="flex flex-col gap-12 xl:gap-20">
          <li>
            <ProductDescription productId={productId} />
          </li>
          <li>
            <PreferenceAction productId={productId} />
          </li>
          <li>
            <AccordionList items={items} />
          </li>
          <li>
            <ActionActiveComponents productId={productId} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DescriptionSection;
