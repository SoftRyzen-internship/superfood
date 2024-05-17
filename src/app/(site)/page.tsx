import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import HeroSection from '@/sections/HeroSection';
import FAQSection from '@/sections/FAQSection';
import Benefits from '@/sections/Benefits/Benefits';
import Contacts from '@/sections/Contacts';
import Reviews from '@/sections/Reviews/Reviews';
import Products from '@/sections/Products';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Benefits />
      <Products />
      <CompanyAdvantageSection />
      <Reviews />
      <FAQSection />
      <Contacts />
    </main>
  );
}
