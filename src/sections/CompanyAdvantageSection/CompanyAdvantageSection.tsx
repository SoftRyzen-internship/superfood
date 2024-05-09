import Image from 'next/image';
import CompanyAdvantageList from '@/components/ui/CompanyAdvantageList/CompanyAdvantageList';
import data from '@/data/companyAdvantageSection.json';

function CompanyAdvantageSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center flex-col">
          <div>
            <h2 className="section-title text-left mb-8 xl:mb-12">
              {data.sectionTitle}
            </h2>
            <CompanyAdvantageList />
          </div>
          <div className="relative pl-[10px] pb-[44px]">
            <Image
              src={data.image.src}
              width={328}
              height={320}
              alt={data.image.src}
            />
            <Image
              className="absolute bottom-0 left-0"
              src={data.image.srcSmall}
              width={148}
              height={106}
              alt={data.image.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyAdvantageSection;
