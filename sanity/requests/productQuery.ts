import { groq } from 'next-sanity';

export const productQuery = groq`*[_type=="price"]{_id,product,price}`;