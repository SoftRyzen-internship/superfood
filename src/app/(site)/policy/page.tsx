'use client';

import { getPolicy } from '../../../../sanity/requests';
import PolicySection from '@/sections/PolicySection';

getPolicy().then(content => console.log(content));

function PageSample() {
  return <PolicySection />;
}

export default PageSample;
