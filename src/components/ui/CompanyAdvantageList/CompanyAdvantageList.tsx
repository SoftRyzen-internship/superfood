import items from '@/data/advantageItem.json';
import AdvantageItem from '../AdvantageItem/AdvantageItem';

function CompanyAdvantageList() {
  return (
    <ul className="flex flex-col gap-8">
      {items.map(item => {
        return <AdvantageItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
}

export default CompanyAdvantageList;
