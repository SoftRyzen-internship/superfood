import { client } from '../lib/client';
import { policyQuery } from './policyQuery';

export async function getPolicy() {
  const policy = await client.fetch(policyQuery);
  return policy;
}