import { groq } from 'next-sanity';

export const priceQuery = groq`*[_type=="price"]{_id,product,price}`;