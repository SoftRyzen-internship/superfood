
import {
  getPolicy,
  getPhones,
  getPrices,
  getReviews,
} from '../../../sanity/requests';
import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import { HeroSection } from '@/sections/HeroSection';



// Log content to console
getPolicy().then(content => console.log(content));
getPhones().then(content => console.log(content));
getPrices().then(content => console.log(content));
getReviews().then(content => console.log(content));

// Insert the return component calling `getContent()` below

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyAdvantageSection />
    </main>
  );
}
