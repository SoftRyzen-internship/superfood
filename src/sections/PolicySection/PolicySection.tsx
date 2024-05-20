import { PortableText } from '@portabletext/react';
import CustomComponents from '@/components/ui/CustomComponents';
import { PolicyProps } from './PolicySection.types';

function PolicySection({ content, title }: PolicyProps) {
  return (
    <section className="pt-[140px] pb-12 md:pt-[192px] md:pb-20 xl:pt-[212px]">
      <div className="container md:px-[70px] xl:px-[136px]">
        <h1 className="font-roboto text-green text-[18px] font-bold leading-[1.30] uppercase mb-10 md:text-[24px] md:leading-[1.15] md:text-center md:mb-14 md:w-[580px] xl:w-full xl:text-[30px] xl:mb-16">
          {title}
        </h1>
        <div className="prose-h2:font-roboto prose-h2:text-green prose-h2:text-[14px] prose-h2:font-bold prose-h2:leading-[1.15] prose-h2:uppercase prose-h2:mb-4 md:prose-h2:text-[16px] md:prose-h2:leading-[1.30] xl:prose-h2:text-[20px] xl:prose-h2:mb-6 prose-p:font-geologica prose-p:text-textBody prose-p:font-light prose-p:text-[14px] prose-p:leading-[1.35] prose-p:tracking-[-0.28px] prose-p:mb-8 md:prose-p:text-[16px] md:prose-p:tracking-[-0.32px] md:prose-p:mb-10 xl:prose-p:text-[18px] xl:prose-p:tracking-[-0.36px] prose-ul:font-geologica prose-ul:text-textBody prose-ul:font-light prose-ul:list-disc prose-ul:pl-6 prose-ul:text-[14px] prose-ul:leading-[1.35] prose-ul:tracking-[-0.28px] md:prose-ul:text-[16px] md:prose-ul:tracking-[-0.32px] xl:prose-ul:text-[18px] xl:prose-ul:tracking-[-0.36px] prose-a:font-geologica prose-a:text-green prose-a:font-light prose-a:text-[14px] prose-a:leading-[1.35] prose-a:tracking-[-0.28px] md:prose-a:text-[16px] md:prose-a:tracking-[-0.32px] xl:prose-a:text-[18px] xl:prose-a:tracking-[-0.36px]">
          <PortableText value={content} components={CustomComponents} />
        </div>
      </div>
    </section>
  );
}

export default PolicySection;
