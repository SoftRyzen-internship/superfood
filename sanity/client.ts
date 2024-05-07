import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: false,
});
