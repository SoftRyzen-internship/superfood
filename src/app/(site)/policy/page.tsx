import { getPolicy } from '@/../sanity/requests';
import PolicySection from '@/sections/PolicySection';

async function Policy() {
  const data = await getPolicy();
  const content = data[0].description;
  const title = data[0].title;

  return <PolicySection content={content} title={title} />;
}

export default Policy;
