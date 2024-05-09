import data from '@/data/companyAdvantageSection.json';
import AdvantageItem from '../AdvantageItem/AdvantageItem';

function CompanyAdvantageList() {
  return (
    <ul className="flex flex-col gap-8">
      {data.items.map(item => {
        return <AdvantageItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
}

export default CompanyAdvantageList;
