import CompanyAdvantageSection from '@/sections/CompanyAdvantageSection/CompanyAdvantageSection';
import { HeroSection } from '@/sections/HeroSection';
import { client } from '../../../sanity/client';
import ProductCard from '@/components/ui/ProductCard';

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
      <HeroSection />
      <CompanyAdvantageSection />
      <ProductCard />
    </main>
  );
}
