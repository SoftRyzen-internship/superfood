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
import Products from '@/sections/Products';

// Log content to console
// getPolicy().then(content => console.log(content[0].description[0].children));
// getPhones().then(content => console.log(content));
getProduct().then(content => console.log(content));
// getReviews().then(content => console.log(content));

export default function Home() {
  const productId = 2;
  return (
    <main>
      <HeroSection />
      <Benefits />
      <Products />
      <CompanyAdvantageSection />
      <FAQSection />
      <Contacts />
    </main>
  );
}
