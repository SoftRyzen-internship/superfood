import { client } from '../lib/client';
import { priceQuery } from './priceQuery';

export async function getPrices() {
  const price = await client.fetch(priceQuery);
  return price;
}