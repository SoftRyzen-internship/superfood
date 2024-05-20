import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import HeroSection from '@/sections/HeroSection';
import FAQSection from '@/sections/FAQSection';
import Benefits from '@/sections/Benefits/Benefits';
import Contacts from '@/sections/Contacts';
import Reviews from '@/sections/Reviews/Reviews';
import Products from '@/sections/Products';

import HeroParallax from '@/sections/HeroParallax/HeroParallax';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroParallax />
      <Benefits />
      <Products />
      <CompanyAdvantageSection />
      <Reviews />
      <FAQSection />
      <Contacts />
    </main>
  );
}
