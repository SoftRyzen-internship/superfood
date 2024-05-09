import Image from 'next/image';
import CompanyAdvantageList from '@/components/ui/CompanyAdvantageList/CompanyAdvantageList';
import data from '@/data/companyAdvantageSection.json';

function CompanyAdvantageSection() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="section-title text-left mb-8 xl:mb-12">
            {data.sectionTitle}
          </h2>
          <CompanyAdvantageList />
          <Image
            src={data.image.src}
            width={328}
            height={320}
            alt={data.image.src}
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyAdvantageSection;
