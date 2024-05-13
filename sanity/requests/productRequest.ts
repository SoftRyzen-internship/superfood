import { client } from '../lib/client';
import { productQuery } from './productQuery';

export async function getProduct() {
  const product = await client.fetch(productQuery);
  return product;
}