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
import SocialMedia from '@/components/ui/SocialMedia';
import Contacts from '@/sections/Contacts';

// // Log content to console
// getPolicy().then(content => console.log(content));
getPhones().then(content => console.log(content));
// getProduct().then(content => console.log(content));
// getReviews().then(content => console.log(content));

// Insert the return component calling `getContent()` below

const slides = [
  { id: 1, content: 'slide' },
  { id: 2, content: 'slide' },
  { id: 3, content: 'slide' },
  { id: 4, content: 'slide' },
  { id: 5, content: 'slide' },
  { id: 6, content: 'slide' },
];

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
      <SocialMedia />
      <Contacts />
    </main>
  );
}
