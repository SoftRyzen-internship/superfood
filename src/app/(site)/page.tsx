import {
  getPolicy,
  getPhones,
  getProduct,
  getReviews,
} from '../../../sanity/requests';

import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import HeroSection from '@/sections/HeroSection';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/sections/FAQSection';
import Benefits from '@/sections/Benefits/Benefits';
import Contacts from '@/sections/Contacts';

// Log content to console
// getPolicy().then(content => console.log(content[0].description[0].children));
// getPhones().then(content => console.log(content));
// getProduct().then(content => console.log(content));
// getReviews().then(content => console.log(content));

export default function Home() {
  const productId = 2;
  return (
    <main>
      <HeroSection />
      <Benefits />

      <ProductCard
        img="/images/products/sprouted-grains-of-beans@2x.webp"
        imgBg="beans"
        alt="ПРОРОЩЕНІ ЗЕРНА БОБОВИХ"
        name="ПРОРОЩЕНІ ЗЕРНА БОБОВИХ"
        descriptionItems={[
          'Джерело білка',
          'Фолієва кислота',
          'Антиоксиданти',
          'Клітковина',
        ]}
        link={`products/${productId}`}
        buttonText="детальніше"
      />
      <CompanyAdvantageSection />
      <FAQSection />
      <Contacts />
    </main>
  );
}
