import Image from 'next/image';
import CompanyAdvantageList from '@/components/ui/CompanyAdvantageList/CompanyAdvantageList';
import data from '@/data/companyAdvantageSection.json';

function CompanyAdvantageSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center flex-col md:flex-row md:items-start">
          <div className="md:flex-grow">
            <h2 className="section-title text-left mb-8 xl:mb-12">
              {data.sectionTitle}
            </h2>
            <CompanyAdvantageList />
          </div>
          <div className="relative pl-[10px] pb-[44px] md:pl-[9px] md:pb-[39px] xl:pl-[43px] xl:pb-[47px]">
            <Image
              className="md:w-[293px] md:h-[247px] xl:w-[592px] xl:h-[526px]"
              src={data.image.src}
              width={328}
              height={320}
              alt={data.image.src}
            />
            <Image
              className="absolute bottom-0 left-0 md:w-[137px] md:h-[95px] xl:w-[277px] xl:h-[200px]"
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
