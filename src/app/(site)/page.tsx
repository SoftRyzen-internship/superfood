import { HeroSection } from '@/sections/HeroSection';
import { client } from '../../../sanity/client';

import LinkButton from '@/components/ui/ScrollButton/LinkButton';
import Button from '@/components/ui/Button';
import NavList from '@/components/common/NavList/';

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

import Link from 'next/link';

// Insert the return component calling `getContent()` below

export default function Home() {
  return (
    <main>
      <div className="container text-center">LinkButton</div>
      <div className="container py-2 flex flex-wrap gap-2 items-center bg-gray-400">
        <LinkButton label="Primary" href="#sectionId" variant="primary" />
        <LinkButton label="Secondary" href="#sectionId" variant="secondary" />
        <LinkButton label="Navlink" href="#sectionId" variant="navlink" />
        <LinkButton
          label="Primary2-Nav-To-Page"
          href="policy"
          variant="primary2"
        />
        <LinkButton label="Policy" href="" variant="policy" />
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
    </main>
  );
}
