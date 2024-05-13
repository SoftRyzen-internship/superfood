import { getPolicy, getPhones, getPrices, getReviews } from '../../../sanity/requests';
import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import { HeroSection } from '@/sections/HeroSection';
import FAQSection from '@/sections/FAQSection';

import { client } from '../../../sanity/client';
import ProductCard from '@/components/ui/ProductCard';

import ScrollLink from '@/components/ui/ScrollLink/';
import Button from '@/components/ui/Button';
import NavList from '@/components/common/NavList/';
import Benefits from '@/sections/Benefits/Benefits';
import SocialMedia from '@/components/ui/SocialMedia';

// Log content to console
getPolicy().then(content => console.log(content));
getPhones().then(content => console.log(content));
getPrices().then(content => console.log(content));
getReviews().then(content => console.log(content));

// Insert the return component calling `getContent()` below

export default function Home() {
  return (
    <main>
      <div className="container text-center">ScrollLink</div>
      <div className="container py-2 flex flex-wrap gap-2 items-center bg-gray-400">
        <ScrollLink label="Primary" href="#sectionId" variant="primary" />
        <ScrollLink label="Secondary" href="#sectionId" variant="secondary" />
        <ScrollLink label="Navlink" href="#sectionId" variant="navlink" />
        <ScrollLink label="Primary2-Nav-To-Page" href="policy" variant="primary2" />
        <ScrollLink label="Policy" href="" variant="policy" />
      </div>
      <div className="container text-center">Button</div>
      <div className="container py-2 flex flex-wrap gap-2 items-center bg-gray-400">
        <Button label="ReadMore" variant="readmore" />
        <Button label="Primary" variant="primary" />
      </div>
      <div className="container text-center">NavList</div>
      <div className="container py-2 flex flex-wrap gap-2 items-center bg-gray-400">
        <NavList />
      </div>

      <HeroSection />
      <Benefits />
      <Benefits />
      <CompanyAdvantageSection />
      <SocialMedia />
      <ProductCard
        img="/images/products/sprouted-grains-of-beans@2x.webp"
        imgBg="beans"
        alt="ПРОРОЩЕНІ ЗЕРНА БОБОВИХ"
        name="ПРОРОЩЕНІ ЗЕРНА БОБОВИХ"
        descriptionItems={['Джерело білка', 'Фолієва кислота', 'Антиоксиданти', 'Клітковина']}
        link="/:productId"
        buttonText="детальніше"
      />
      <FAQSection />
      <SocialMedia />
    </main>
  );
}
