import { client } from '../lib/client';
import {reviewQuery}  from './reviewQuery';

export async function getReviews() {
  const reviews = await client.fetch(reviewQuery);
  return reviews;
}