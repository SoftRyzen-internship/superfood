import Image from 'next/image';
import CompanyAdvantageList from '@/components/ui/CompanyAdvantageList/CompanyAdvantageList';
import data from '@/data/companyAdvantageSection.json';

function CompanyAdvantageSection() {
  return (
    <section className="section">
      <div className="container flex items-center flex-col md:flex-row md:items-start">
        <div className="md:flex-grow">
          <h2 className="section-title text-left mb-8 xl:mb-12">
            {data.sectionTitle}
          </h2>
          <CompanyAdvantageList />
        </div>
        <Image
          className="md:w-[302px] md:h-[286px] xl:w-[635px] xl:h-[573px]"
          src={data.image.src}
          width={328}
          height={320}
          alt={data.image.src}
        />
      </div>
    </section>
  );
}

export default CompanyAdvantageSection;
