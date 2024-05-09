import CompanyAdvantageList from '@/components/ui/CompanyAdvantageList/CompanyAdvantageList';
import data from '@/data/companyAdvantageSection.json';

function CompanyAdvantageSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title text-left mb-8 xl:mb-12">
          {data.sectionTitle}
        </h2>
        <CompanyAdvantageList />
      </div>
    </section>
  );
}

export default CompanyAdvantageSection;
