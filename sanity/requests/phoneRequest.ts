import { client } from '../lib/client';
import { phonesQuery } from './phoneQuery';

export async function getPhones() {
  const phones = await client.fetch(phonesQuery);
  return phones;
}