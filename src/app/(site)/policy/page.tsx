import { getPolicy } from '../../../../sanity/requests';
import PolicySection from '@/sections/PolicySection';

async function Policy() {
  const data = await getPolicy();

  return <PolicySection content={data[0]} />;
}

export default Policy;
