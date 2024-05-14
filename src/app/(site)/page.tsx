import {
  getPolicy,
  getPhones,
  getProduct,
  getReviews,
} from '../../../sanity/requests';

import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import HeroSection from '@/sections/HeroSection';
import { client } from '../../../sanity/client';
import ProductCard from '@/components/ui/ProductCard';
import FAQSection from '@/sections/FAQSection';
import Benefits from '@/sections/Benefits/Benefits';
import SocialMedia from '@/components/ui/SocialMedia';

// Log content to console
getPolicy().then(content => console.log(content));
getPhones().then(content => console.log(content));
getProduct().then(content => console.log(content));
getReviews().then(content => console.log(content));

// Insert the return component calling `getContent()` below

export default function Home() {
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
        link="/:productId"
        buttonText="детальніше"
      />
      <CompanyAdvantageSection />
      <FAQSection />
      <SocialMedia />
    </main>
  );
}
