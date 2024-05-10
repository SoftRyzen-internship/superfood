import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import { HeroSection } from '@/sections/HeroSection';
import { client } from '../../../sanity/client';
import ProductCard from '@/components/ui/ProductCard';

import ScrollLink from '@/components/ui/ScrollLink/';
import Button from '@/components/ui/Button';
import NavList from '@/components/common/NavList/';
import SocialMedia from '@/components/ui/SocialMedia';

// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == "project"] {
  ...,
  coverImage {
    ...,
    asset->
  },
  duration {
    ...
  },
  tags[],
  body
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

// Log content to console
getContent().then(content => console.log(content));

// Insert the return component calling `getContent()` below

export default function Home() {
  return (
    <main>
      <div className="container text-center">ScrollLink</div>
      <div className="container py-2 flex flex-wrap gap-2 items-center bg-gray-400">
        <ScrollLink label="Primary" href="#sectionId" variant="primary" />
        <ScrollLink label="Secondary" href="#sectionId" variant="secondary" />
        <ScrollLink label="Navlink" href="#sectionId" variant="navlink" />
        <ScrollLink
          label="Primary2-Nav-To-Page"
          href="policy"
          variant="primary2"
        />
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
      <CompanyAdvantageSection />
      <ProductCard />
      <SocialMedia />
    </main>
  );
}
